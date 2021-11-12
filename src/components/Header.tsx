import {Flex,Text,Input,Icon,HStack,Box,Avatar} from '@chakra-ui/react'
import {RiNotificationFill, RiSearchLine, RiUserAddLine} from 'react-icons/ri'
export function Header (){
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"      
      px="6"
      align="center"
      bg="gray.700"
      >
         <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64">
           BsvDashBoard
           <Text as="span" ml="1"color="pink.500" >.</Text>  
        </Text>
        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          maxW={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
          >
          <Input 
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar na Plataforma"
            _placeholder={{color:'gray.400'}}  
            />
          <Icon as={RiSearchLine} fontSize={24}/>
        </Flex>
        <Flex
         align="center"
         ml="auto"
         >
           <HStack 
            spacing="4"
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.500"
           >
            <Icon as={RiNotificationFill} fontSize="20"/>
            <Icon as={RiUserAddLine } fontSize="20"/>
           </HStack>
          <Flex align='center'>
              <Box mr='4' textAlign="right">
                <Text>Bruno de Souza Valeiro</Text>
                <Text color="gray.300" fontSize="small">bvaleiro@gmail.com</Text>
              </Box>
              <Avatar size="md" name="Bruno Souza"/>
          </Flex>
        </Flex>          
    </Flex>
  );
}