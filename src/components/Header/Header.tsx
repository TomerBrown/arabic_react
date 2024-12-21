import { Heading, VStack } from '@chakra-ui/react'

import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (

    <VStack>
    <ThemeToggle />
    <Heading className="title" flexGrow={1} >
      לומדים ערבית עם יפתח ותומר
    </Heading>
  </VStack>
  )
}

export default Header