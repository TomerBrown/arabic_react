import { Box, Heading, Link } from "@chakra-ui/react";
// TODO(tomerbrown): Improve the way this page looks!
const NotFoundPage = () => {
  return (
    <Box>
      <Heading color="red">העמוד לא נמצא</Heading> <br />
      <Link href="/arabic_react/" color={"blue"}>
        לחץ כאן כדי לחזור לעמוד הבית
      </Link>
    </Box>
  );
};

export default NotFoundPage;
