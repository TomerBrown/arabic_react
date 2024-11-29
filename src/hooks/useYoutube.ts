import useData from "./useData";

interface TranslatedText {
  arabic_text: string;
  type: string;
}

const useYoutube = (url: string, youtubeAgain: boolean) => {
  console.log("url: ", url);
  return useData<TranslatedText>(
    "/youtube/",
    {
      method: "POST",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    },
    [youtubeAgain]
  );
};

export default useYoutube;
