import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { mapArabicToHebrewLetters } from "../../mapper/Mapper";
import Taatic from "./Taatic";

interface OutputsProps {
    arabicText: string;
}

const Outputs = ({arabicText}: OutputsProps) => {
  return (
    <Tabs isFitted variant="enclosed" dir="rtl">
      <TabList mb="1em" dir="rtl">
        <Tab>תעתיק </Tab>
        <Tab>תרגום</Tab>
        <Tab>שאלות</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Taatic text={mapArabicToHebrewLetters(arabicText)}/>
        </TabPanel>
        <TabPanel>
          <p>שתיים</p>
        </TabPanel>
        <TabPanel>
          <p>שלוש</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Outputs;
