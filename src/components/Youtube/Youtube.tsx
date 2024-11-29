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

const Youtube = ({ setArabicText }: YoutubeProps) => {
  const [url, setUrl] = useState("");
  const [youtubeAgain, setYoutubeAgain] = useState(false);
  const { data, error, loading } = useYoutube(url, youtubeAgain);
  const handleSubmit = () => {
    setYoutubeAgain(!youtubeAgain);
    if (data) {
      setArabicText(data.arabic_text);
    }
  };
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="youtubeUrl"></FormLabel>
        <Stack direction="row" alignItems="center">
          {loading && <Spinner color="red" />}
          {!loading && (
            <Button colorScheme="red" ml={2} onClick={handleSubmit}>
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
              onChange={(e) => setUrl(e.target.value)}
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
