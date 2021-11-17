import{Box,Avatar,Flex,Text} from '@chakra-ui/react'
interface ProfilesProps{
  showProfileData:boolean
}
export function Profile({showProfileData =true}:ProfilesProps){
  return(
    <Flex align='center'>
      {
        showProfileData &&(
        <Box mr='4' textAlign="right">
          <Text>Bruno de Souza Valeiro</Text>
          <Text color="gray.300" fontSize="small">bvaleiro@gmail.com</Text>
        </Box>
      )
    }
      <Avatar size="md" name="Bruno Souza"/>
    </Flex>
  )
}