import { Heading, HStack, VStack } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <VStack p={2}>
      <HStack justifyContent={"space-between"} w="100%">
        <ThemeToggle />
        <NavMenu />
      </HStack>
      <Heading className="title" flexGrow={1}>
        לומדים ערבית עם יפתח ותומר
      </Heading>
    </VStack>
  );
};

export default Header;
