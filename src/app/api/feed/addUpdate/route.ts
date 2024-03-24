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
    const body = await request.json();
    const supabase = createClient();
    /*___auth___*/
    let loggedInUser = await getUser(request);

    /*___payload manipulation___*/
    const payload = { ...body, userId: loggedInUser.id };

    /*__add/update  query___*/
    const createdFeeds = await supabase.from("feeds").insert(payload);
    if (createdFeeds?.error)
      return responseHandler(0, {}, 500, "something went wrong!");
    return responseHandler(1, createdFeeds?.data, 201, "Great! feed added");
  } catch (err) {
    if (err?.unauth) return responseHandler(0, {}, 401, "unauthorised!");
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
