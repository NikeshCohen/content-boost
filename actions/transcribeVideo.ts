"use server";

import { YoutubeTranscript } from "youtube-transcript";

export async function transcribeVideo(videoId: string) {
  "use server";
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    const combinedText = transcript.map((item) => item.text).join(" ");
    return { transcript: combinedText };
  } catch (error) {
    return {
      error: "Failed to fetch transcript",
    };
  }
}
