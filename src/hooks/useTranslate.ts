import useData from "./useData";

interface TranslatedText {
  translated_text: string;
}

const useTranslate = (arabic_text: string, translateAgain: boolean) => {
  return useData<TranslatedText>(
    "/translate/",
    {
      method: "POST",
      maxBodyLength: Infinity,
      data: {
        text: arabic_text,
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
    [translateAgain]
  );
};

export default useTranslate;
