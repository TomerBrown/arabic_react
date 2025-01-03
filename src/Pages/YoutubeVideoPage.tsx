import TemplatePage from "./TemplatePage";
import Youtube from "../components/Youtube/Youtube";
import ReactPlayer from "react-player";
import { Box, VStack } from "@chakra-ui/react";
import "./YoutubeVideoPage.css";

interface YoutubeVideoPageProps {
  setArabicText: (text: string) => void;
}

const YoutubeVideoPage = ({ setArabicText }: YoutubeVideoPageProps) => {
  return (
    <div>
      <TemplatePage>
        <VStack gap={"20px"}>
          <Youtube setArabicText={setArabicText} />
          <Box
            className="video-container"
            maxWidth={["100%", "500px", "500px", "500px"]}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=RqgvKgXJbOE&t=4s"
              controls={true}
              pip={true}
              light={false}
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </VStack>
      </TemplatePage>
    </div>
  );
};

export default YoutubeVideoPage;
