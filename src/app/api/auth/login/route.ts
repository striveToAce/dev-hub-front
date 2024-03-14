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
    const supabase = createClient();
    const { data, error, status } = await supabase
      .from("users")
      .select()
      .eq("email", body.email);

    if (error) return responseHandler(0, {}, status, "something went wrong!");
    else if (!data?.length)
      return responseHandler(
        0,
        {},
        status,
        "you are not on DevHub please signup!"
      );
    else if (data[0].password !== body.password)
      return responseHandler(0, {}, status, "wrong cred found!");
    else {
      
      const {data,error} = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password,
      });
      if(error) return responseHandler(0, {}, 500, "something went wrong!");
      
      return responseHandler(1, {}, status, "login success!");
    }
  } catch (err) {
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
