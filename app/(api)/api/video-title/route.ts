import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json(
      { error: "Video ID is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch video page");
    }
    const html = await res.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);

    if (titleMatch) {
      return NextResponse.json({ videoTitle: titleMatch[1] });
    } else {
      return NextResponse.json({
        videoTitle: "No title found, ignore this text",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      videoTitle: "No title found, ignore this text",
    });
  }
}
