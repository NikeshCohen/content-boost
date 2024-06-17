"use server";

export async function getVideoTitle(videoId: string) {
  "use server";
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch video page");
    }
    const html = await res.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);

    if (titleMatch) {
      return { videoTitle: titleMatch[1] };
    } else {
      return {
        videoTitle: "No title found, ignore this text",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      videoTitle: "No title found, ignore this text",
    };
  }
}
