import TemplatePage from "./TemplatePage";
import Youtube from "../components/Youtube/Youtube";
import ReactPlayer from "react-player";
import { Box, VStack } from "@chakra-ui/react";
import "./YoutubeVideoPage.css";
import { useState } from "react";
import Outputs from "../components/outputs/Outputs";

interface YoutubeVideoPageProps {
  arabicText: string;
  setArabicText: (text: string) => void;
  url: string;
  setUrl: (url: string) => void;
}

const YoutubeVideoPage = ({
  arabicText,
  setArabicText,
  url,
  setUrl,
}: YoutubeVideoPageProps) => {
  const [isVideoFetched, setIsViedoFetched] = useState<boolean>(false);
  return (
    <Box>
      <TemplatePage>
        <VStack gap={"20px"}>
          <Youtube
            setArabicText={setArabicText}
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
        <Box padding={"20px"}>
          <Outputs arabicText={arabicText} />
        </Box>
      </TemplatePage>
    </Box>
  );
};

export default YoutubeVideoPage;
