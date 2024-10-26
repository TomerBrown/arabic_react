import useTranslate from "../../../hooks/useTranslate";

interface TranslateProps {
  arabicText: string;
  translateAgain: boolean;
}

const Translate = ({ arabicText, translateAgain }: TranslateProps) => {
  const { data, error, loading } = useTranslate(arabicText, translateAgain);
  if (error) {
    console.error(error);
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{data.translated_text}</div>;
};

export default Translate;
