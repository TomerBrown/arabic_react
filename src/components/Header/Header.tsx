import { Heading, HStack } from '@chakra-ui/react'

import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <HStack>
    <Heading className="title" flexGrow={1} >
      לומדים ערבית עם יפתח ותומר
    </Heading>
    <ThemeToggle />
  </HStack>
  )
}

export default Header