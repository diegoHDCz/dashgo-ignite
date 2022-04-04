import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align='center'
    >
      {
        showProfileData && (
          <Box
            mr='4'
            textAlign='right'
          >
            <Text>Diego Czajka</Text>
            <Text
              color='gray.300'
              fontSize='small'
            >diego.czajka@gmail.com</Text>
          </Box>

        )
      }
      <Avatar size='md' name='Diego Czajka' src='https://github.com/diegoHDCz.png' />
    </Flex>
  )
}