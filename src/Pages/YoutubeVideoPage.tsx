import TemplatePage from "./TemplatePage";
import Youtube from "../components/Youtube/Youtube";
import ReactPlayer from "react-player";
import { Badge, Box, HStack, VStack } from "@chakra-ui/react";
import "./YoutubeVideoPage.css";
import { useRef, useState } from "react";
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
  id_prefix: string,
  badgeColor: string,
  badgeTitle: string,
  textTransformation?: (text: string) => string
) => {
  return (
    <VStack w={"100%"} spacing={4}>
      <Badge alignSelf="flex-end" colorScheme={badgeColor}>
        {badgeTitle}
      </Badge>
      <Box
        padding={"20px"}
        width={"100%"}
        alignSelf={"center"}
        dir="rtl"
        justifySelf={"center"}
        display={"flex"}
        flexDirection={"column"}
        height={"300px"}
        overflowY={"scroll"}
      >
        {YoutubeTranscript.length > 0 &&
          YoutubeTranscript.map((transcript, index) => (
            <p key={index} id={id_prefix + index}>
              {textTransformation
                ? textTransformation(transcript.text)
                : transcript.text}
            </p>
          ))}
      </Box>
    </VStack>
  );
};
const updateElementsProperties = (currentHtmlEl: HTMLElement | null) => {
  if (currentHtmlEl) {
    currentHtmlEl.classList.add("highlighted");
    currentHtmlEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
const YoutubeVideoPage = ({
  setArabicText,
  url,
  setUrl,
}: YoutubeVideoPageProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isVideoFetched, setIsViedoFetched] = useState<boolean>(false);
  const [YoutubeTranscript, setYoutubeTranscript] = useState<Transcript[]>([]);
  let previousTextHtmlEl: HTMLElement | null = null;
  let previousTaaticHtmlEl: HTMLElement | null = null;

  const handleProgress = (state: { playedSeconds: number }) => {
    const currentTimestamp = state.playedSeconds;
    // get current transcript and index
    const currentTranscriptIndex = YoutubeTranscript.findIndex(
      (transcript) =>
        transcript.start <= currentTimestamp &&
        transcript.end >= currentTimestamp
    );

    // Highlight the corresponding element in the text
    const currentTextHtmlEl = document.getElementById(
      "text" + currentTranscriptIndex
    );
    if (currentTextHtmlEl?.id !== previousTextHtmlEl?.id) {
      // Remove the highlight from all elements
      const highlightedElements =
        document.getElementsByClassName("highlighted");
      Array.from(highlightedElements).forEach((el) =>
        el.classList.remove("highlighted")
      );
      updateElementsProperties(currentTextHtmlEl);
      previousTextHtmlEl = currentTextHtmlEl;
    }
    // Highlight the corresponding element in the Taatic
    const currentTaaticHtmlEl = document.getElementById(
      "taatic" + currentTranscriptIndex
    );
    if (currentTaaticHtmlEl?.id !== previousTaaticHtmlEl?.id) {
      updateElementsProperties(currentTaaticHtmlEl);
      previousTaaticHtmlEl = currentTaaticHtmlEl;
    }
  };

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
                ref={playerRef}
                url={url}
                controls={true}
                pip={true}
                light={false}
                width={"100%"}
                height={"100%"}
                onProgress={handleProgress}
              />
            )}
          </Box>
        </VStack>

        <HStack p={10}>
          {TimedTextBox(
            YoutubeTranscript,
            "taatic",
            "purple",
            "תעתיק",
            mapArabicToHebrewLetters
          )}
          {TimedTextBox(YoutubeTranscript, "text", "red", "תמלול")}
        </HStack>
      </TemplatePage>
    </Box>
  );
};

export default YoutubeVideoPage;
