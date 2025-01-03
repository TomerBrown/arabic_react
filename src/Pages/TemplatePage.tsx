import React from "react";
import Header from "../components/Header/Header";
import { Box } from "@chakra-ui/react";

interface TemplatePageProps {
  children?: React.ReactNode;
}

const TemplatePage = ({ children }: TemplatePageProps) => {
  return (
    <Box padding={"20px"}>
      <Header />
      {children}
    </Box>
  );
};

export default TemplatePage;
