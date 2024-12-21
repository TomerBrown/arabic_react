import { Box, VStack, Badge, Text } from '@chakra-ui/react';

interface OutputBoxProps {
    text: string;
    badgeColor: string;
    badgeTitle: string;
  }

const OutputBox = ({ text, badgeColor, badgeTitle }: OutputBoxProps) => {
    return (
        <Box
          as="div"
          p={2}
          borderWidth="1px"
          borderRadius="md"
          height="150px"
          overflowY="auto"
          whiteSpace="pre-wrap"
          cursor="text"
          userSelect="text"
          width="100%"
        >
          <VStack>
            <Badge alignSelf="start" colorScheme={badgeColor}>
              {badgeTitle}
            </Badge>
            <Text alignSelf={"start"}> {text}</Text>
          </VStack>
        </Box>
      );
}

export default OutputBox