import {Button, Box,Flex,Heading ,Divider,VStack,SimpleGrid,HStack} from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import {Input} from '../../components/Form/Input';
import Link from 'next/link'
export default function CreateUser (){
  return (
    <Box>
      <Header/>
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6">
          <Sidebar/>
          <Box flex="1" borderRadius={8} bg="gray.800" p={["10","8"]}>
           <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
           <Divider my="6" borderColor="gray.700" />
           <VStack spacing="8" >
              <SimpleGrid minChildWidth="300px" spacing="8" w="100%">
                <Input name="nome" type='text' label="Nome" />
                <Input name="email" type='email' label="E-mail" />               
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" type='password' label="Senha" />
                <Input name="password_confirm" type='password' label="Confirme a Senha" />               
              </SimpleGrid>
           </VStack>
           <Flex mt="8" justify="flex-end">  
            <HStack spacing="4">
            <Link href="/users" passHref>
              <Button  as="a" colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
              <Button colorScheme="pink" bgColor="pink.500">Salvar</Button>
            </HStack>
           </Flex>
          </Box>
        </Flex>
    </Box>
  );
}