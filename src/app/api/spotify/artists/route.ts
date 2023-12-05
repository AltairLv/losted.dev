import { getAccessToken } from "@/lib/spotify/spotify";
import { NextResponse } from "next/server";
import { getTopArtists } from "@/lib/spotify/metrics";

export const dynamic = "force-dynamic";

export async function GET() {
  const { access_token } = await getAccessToken();
  const response = await getTopArtists(access_token);
  return NextResponse.json(response, { status: 200 });
}
