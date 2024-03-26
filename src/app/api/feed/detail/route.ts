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
    await getUser(body.token);
    const { data, error, status } = await supabase
      .from("feeds")
      .select()
      .eq("id", body?.id);
    if (error) return responseHandler(0, {}, status, "something went wrong!");
    else if (!data?.length)
      return responseHandler(0, {}, 404, "not found");
    else {
      const feed = data[0];
      return responseHandler(1, feed, status, "feed details found!");
    }
  } catch (err) {
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
