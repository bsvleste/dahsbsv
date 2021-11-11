import {Flex,Input,Button,Stack ,FormLabel,FormControl} from '@chakra-ui/react'
export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'>    
      <Flex as="form"
      flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing='4'>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email" 
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                borderRadius={8}
                _hover={{
                  bgColor:'gray.900'
                }}
                size='lg'
                />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  size='lg'
                  _hover={{
                    bgColor:'gray.900'
                  }}
                  borderRadius={8}
                  variant="filled"
                  bgColor="gray.900"
                  focusBorderColor="pink.500"
                  />
            </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
