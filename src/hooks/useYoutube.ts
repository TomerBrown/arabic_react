import useData from "./useData";

interface TranscribideText {
  arabic_text: string;
  type: string;
}

const useYoutube = (
  url: string,
  setArabicText: (text: string) => void,
  youtubeAgain: boolean
) => {
  return useData<TranscribideText>(
    "/youtube/",
    {
      method: "POST",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    },
    [youtubeAgain],
    (data: TranscribideText) => {
      setArabicText(data.arabic_text);
    }
  );
};

export default useYoutube;
