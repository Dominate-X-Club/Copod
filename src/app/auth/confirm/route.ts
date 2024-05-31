import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  try {
    if (code) {
      const supabase = createClient();
      await supabase.auth.exchangeCodeForSession(code);
    }

    // URL to redirect to after sign up process completes
    return NextResponse.redirect(`${origin}/protected`);
  } catch (error) {
    // URL to redirect if an error
    return NextResponse.redirect(`${origin}/error`);
  }
}