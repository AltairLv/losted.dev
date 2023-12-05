import { getPlaying, getRecent } from "@/lib/spotify/metrics";
import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify/spotify";

export const runtime = "edge";

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    const [recentMusic, currentMusic] = await Promise.all([
      getRecent(access_token),
      getPlaying(access_token),
    ]);
    if (currentMusic?.isPlaying) {
      return NextResponse.json(currentMusic, { status: 200 });
    }
    return NextResponse.json(recentMusic, { status: 200 });
  } catch (err) {
    return NextResponse.json("An Error Occurred", { status: 500 });
  }
}
