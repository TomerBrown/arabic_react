import TemplatePage from "./TemplatePage";
import Youtube from "../components/Youtube/Youtube";
import ReactPlayer from "react-player";
import { Box, HStack, VStack } from "@chakra-ui/react";
import "./YoutubeVideoPage.css";
import { useState } from "react";
import { Transcript } from "../hooks/useYoutube";
import { mapArabicToHebrewLetters } from "../mapper/Mapper";

interface YoutubeVideoPageProps {
  arabicText: string;
  setArabicText: (text: string) => void;
  url: string;
  setUrl: (url: string) => void;
}

const TimedTextBox = (
  YoutubeTranscript: Transcript[],
  textTransformation?: (text: string) => string
) => {
  return (
    <Box
      padding={"20px"}
      width={"50%"}
      alignSelf={"center"}
      dir="rtl"
      justifySelf={"center"}
      display={"flex"}
      flexDirection={"column"}
      height={"300px"}
      overflowY={"scroll"}
    >
      {YoutubeTranscript.length > 0 &&
        YoutubeTranscript.map((transcript) => (
          <p>
            {textTransformation
              ? textTransformation(transcript.text)
              : transcript.text}
          </p>
        ))}
    </Box>
  );
};

const YoutubeVideoPage = ({
  setArabicText,
  url,
  setUrl,
}: YoutubeVideoPageProps) => {
  const [isVideoFetched, setIsViedoFetched] = useState<boolean>(false);
  const [YoutubeTranscript, setYoutubeTranscript] = useState<Transcript[]>([]);
  return (
    <Box>
      <TemplatePage>
        <VStack gap={"20px"}>
          <Youtube
            setArabicText={setArabicText}
            setYoutubeTranscript={setYoutubeTranscript}
            url={url}
            setUrl={setUrl}
            handleSubmit={() => {
              setUrl(url);
              setIsViedoFetched(true);
            }}
            buttonText={"הצג סרטון"}
          />
          <Box
            className="video-container"
            maxWidth={["100%", "500px", "500px", "500px"]}
          >
            {isVideoFetched && (
              <ReactPlayer
                url={url}
                controls={true}
                pip={true}
                light={false}
                width={"100%"}
                height={"100%"}
              />
            )}
          </Box>
        </VStack>

        <HStack p={10}>
          {TimedTextBox(YoutubeTranscript, mapArabicToHebrewLetters)}
          {TimedTextBox(YoutubeTranscript)}
        </HStack>
      </TemplatePage>
    </Box>
  );
};

export default YoutubeVideoPage;
