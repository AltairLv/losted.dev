import { getPlaying, getRecent } from "@/lib/spotify/metrics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [recentMusic, currentMusic] = await Promise.all([
      getRecent(),
      getPlaying(),
    ]);
    if (currentMusic?.isPlaying) {
      return NextResponse.json(currentMusic, { status: 200 });
    }
    return NextResponse.json(recentMusic, { status: 200 });
  } catch (err) {
    return NextResponse.json("An Error Occurred", { status: 500 });
  }
}
