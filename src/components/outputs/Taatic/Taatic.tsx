import { Box } from "@chakra-ui/react";

interface TaaticProps {
    text: string
}

const Taatic = ({text}: TaaticProps) => {
  return (
    <Box
    as="div"
    p={2}
    borderWidth="1px"
    borderRadius="md"
    bg="white"
    height="150px"
    overflowY="auto"
    whiteSpace="pre-wrap"
    cursor="text"
    userSelect="text"
  >
    {text}
  </Box>
  );
};

export default Taatic;
