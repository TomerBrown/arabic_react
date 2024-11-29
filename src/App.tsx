import { ChakraProvider, Heading } from '@chakra-ui/react'
import './App.css'
import InputText from './components/InputText/InputText'
import Outputs from './components/outputs/Outputs'
import { useState } from 'react'

function App() {

  const [arabicText, setArabicText] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArabicText(e.target.value);
  };
  return (
    <ChakraProvider>
      <Heading className="title">לומדים ערבית עם יפתח ותומר</Heading>
      <InputText arabicText={arabicText} setArabicText={setArabicText}handleOnChange={handleInputChange} />
      <Outputs arabicText={arabicText}/>
    </ChakraProvider>
  )
}

export default App
