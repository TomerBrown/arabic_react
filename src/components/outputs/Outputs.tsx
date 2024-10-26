import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { mapArabicToHebrewLetters } from "../../mapper/Mapper";
import Taatic from "./Taatic";
import Translate from "./Translate/Translate";
import { useState } from "react";
interface OutputsProps {
  arabicText: string;
}

const Outputs = ({ arabicText }: OutputsProps) => {
  const [translateAgain, setTranslateAgain] = useState(false);

  return (
    <Tabs isFitted variant="enclosed" dir="rtl">
      <TabList mb="1em" dir="rtl">
        <Tab>תעתיק </Tab>
        <Tab
          onClick={() => {
            setTranslateAgain(!translateAgain);
          }}
        >
          תרגום
        </Tab>
        <Tab>שאלות</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Taatic text={mapArabicToHebrewLetters(arabicText)} />
        </TabPanel>
        <TabPanel>
          {arabicText === "" && <div>אנא הכנס טקסט לתרגום</div>}
          {arabicText !== "" && (
            <Translate
              arabicText={arabicText}
              translateAgain={translateAgain}
            />
          )}
        </TabPanel>
        <TabPanel>
          <p>שלוש</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Outputs;
