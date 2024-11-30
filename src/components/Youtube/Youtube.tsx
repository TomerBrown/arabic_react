import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import useYoutube from "../../hooks/useYoutube";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Spinner,
} from "@chakra-ui/react";

interface YoutubeProps {
  setArabicText: (text: string) => void;
}

function isValidYoutubeUrlWithVParam(url: string): boolean {
  if (url === "") return true;
  // Regular expression to match YouTube URLs with the 'v' parameter
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.+&)?v=|(?:embed\/|v\/))|youtu\.be\/)([^&]+)/;

  // Check if the URL matches the YouTube pattern
  if (!youtubeRegex.test(url)) {
    return false;
  }

  // Check if the URL contains the 'v' parameter
  return url.includes("v=");
}

const Youtube = ({ setArabicText }: YoutubeProps) => {
  const [url, setUrl] = useState("");
  const [youtubeAgain, setYoutubeAgain] = useState(false);
  const { loading } = useYoutube(url, setArabicText, youtubeAgain);
  const handleSubmit = () => {
    setYoutubeAgain(!youtubeAgain);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="youtubeUrl"></FormLabel>
        <Stack direction="row" alignItems="center">
          {loading && <Spinner color="red" />}
          {!loading && (
            <Button
              colorScheme="red"
              ml={2}
              onClick={handleSubmit}
              isDisabled={!isValidYoutubeUrlWithVParam(url) || url === ""}
            >
              הבא טקסט
            </Button>
          )}
          <InputGroup size="md">
            <Input
              id="youtubeUrl"
              type="text"
              placeholder="הכנס לינק ליוטיוב"
              value={url}
              width={"70vw"}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              isInvalid={isValidYoutubeUrlWithVParam(url) ? false : true}
            />
            <InputLeftElement pointerEvents="none">
              <FaYoutube color="red" />
            </InputLeftElement>
          </InputGroup>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Youtube;
