import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const responseHandler = (status: any, data: any, code: any, message: any) => {
  return NextResponse.json({
    status,
    data,
    code,
    message,
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      full_name: body.fullName,
      current_position: body.currentPosition,
      password: body.password,
      email: body.email,
    };
    body.current_position = body.currentPosition;
    delete body.currentPosition;
    const supabase = createClient();
    const { data: existUser } = await supabase
      .from("users")
      .select()
      .eq("email", body.email);
    if (existUser?.length)
      return responseHandler(
        0,
        {},
        409,
        "you are already on DevHub! login please"
      );
    const { data, error, status } = await supabase.from("users").insert(payload);
    if(!error){
      await supabase.auth.signUp({
        email: body.email,
        password: body.password,
      })
    }
    if (error) return responseHandler(0, {}, status, "something went wrong!");
    else return responseHandler(1, {}, status, "signup success!");
  } catch (err) {
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
