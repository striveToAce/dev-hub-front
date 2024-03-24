import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "../../middleware";

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
    const body = await request.json()
    const supabase = createClient();
    const currentUser = await getUser(body.token);
    const { data, error, status } = await supabase
      .from("users")
      .select()
      .eq("email", currentUser?.email);
    if (error) return responseHandler(0, {}, status, "something went wrong!");
    else if (!data?.length)
      return responseHandler(0, {}, 401, "unauthorised access");
    else {
      const user = data[0];
      delete user.password;
      return responseHandler(1, user, status, "login success!");
    }
  } catch (err) {
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
