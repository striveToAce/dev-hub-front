import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const responseHandler = (status: any, data: any, code: any) => {
  return NextResponse.json({
    status,
    data,
    code,
  });
};
export async function GET(request: Request) {
  try {
    const supabase = createClient();
    const { data, error, status } = await supabase.from("users").select();
    if (error) return responseHandler(1, data, status);
    else return responseHandler(0, error, status);
  } catch (err) {
    return responseHandler(0, {}, 500);
  }
}

export async function POST(request: Request) {

    
}
