import useData from "./useData";

interface TranslatedText {
  arabic_text: string;
  type: string;
}

const useYoutube = (url: string) => {
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
    []
  );
};

export default useYoutube;
