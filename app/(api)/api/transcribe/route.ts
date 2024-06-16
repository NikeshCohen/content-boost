import { NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";

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
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    const combinedText = transcript.map((item) => item.text).join(" ");
    return NextResponse.json({ transcript: combinedText });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch transcript" },
      { status: 500 }
    );
  }
}
