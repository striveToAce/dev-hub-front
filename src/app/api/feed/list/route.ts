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
    const { page, pagesize } = body;
    const startIndex = (page - 1) * pagesize;
    const endIndex = startIndex + pagesize - 1;
    const supabase = createClient();
    await getUser(body?.token);
    const { data, error } = await supabase
      .from("feeds")
      .select("*")
      .range(startIndex, endIndex);

    if (error) return responseHandler(0, {}, 500, "something went wrong!");
    return responseHandler(1, data, 200, "Data fetched successfully");
  } catch (err) {
    console.log(err)
    return responseHandler(0, {}, 500, "something went wrong!");
  }
}
