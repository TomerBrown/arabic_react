import useData from "./useData";

interface Transcript {
  text: string;
  start: number;
  duration: number;
  end: number;
}

interface TranscribideText {
  transcript: Transcript[];
  type: string;
}

const useYoutube = (
  url: string,
  setArabicText: (text: string) => void,
  setYoutubeTranscript: (transcripts: Transcript[]) => void,
  youtubeAgain: boolean
) => {
  return useData<TranscribideText>(
    "/youtube/",
    {
      method: "POST",
      maxBodyLength: Infinity,
      data: {
        url: url,
        format: "TEXT_AND_TIMESTAMPS",
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
    [youtubeAgain],
    (data: TranscribideText) => {
      setArabicText(data.transcript.map((t) => t.text).join("\n"));
      setYoutubeTranscript(data.transcript);
    }
  );
};

export default useYoutube;
export type { Transcript };
