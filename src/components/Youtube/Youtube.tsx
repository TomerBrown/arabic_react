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
  VStack,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface YoutubeProps {
  setArabicText: (text: string) => void;
}

const Youtube = ({ setArabicText }: YoutubeProps) => {
  const [url, setUrl] = useState("");
  const { data, error, loading } = useYoutube(url);
  if (loading) {
    return (
      <VStack>
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );
  }
  const handleSubmit = () => {
    setArabicText(data.arabic_text);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="youtubeUrl"></FormLabel>
        <Stack direction="row" alignItems="center">
          <Button colorScheme="red" ml={2} onClick={handleSubmit}>
            הבא טקסט
          </Button>
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
