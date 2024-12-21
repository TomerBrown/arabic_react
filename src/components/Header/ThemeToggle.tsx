import {
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel mb="0">
        {colorMode === "light" ? "מצב בהיר" : "מצב כהה"}
      </FormLabel>
      <Switch
        onChange={toggleColorMode}
        size={"sm"}
        colorScheme="teal"
        isChecked={colorMode === "dark"}
      />
    </FormControl>
  );
};

export default ThemeToggle;
