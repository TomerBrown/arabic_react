import React from "react";
import Header from "../components/Header/Header";

interface TemplatePageProps {
  children?: React.ReactNode;
}

const TemplatePage = ({ children }: TemplatePageProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default TemplatePage;
