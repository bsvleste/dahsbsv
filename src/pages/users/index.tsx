
import {useQuery} from 'react-query';
import {useBreakpointValue, Text,Box,Flex,Heading,Button,Icon,Table,Thead,Th,Tr,Checkbox,Tbody,Td,Spinner } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link'

export default function UserList (){

  const {data, isLoading,error} = useQuery('users', async ()=>{
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();
    const users = data.users.map(user=>{
      return {
        id:user.id,
        name:user.name,
        email:user.email,
        createAt:new Date(user.createAt).toLocaleDateString('pt-br',{
          day:'2-digit',
          month:'long',
          year:'numeric'
        })
      }
    });
    return users;
  },{
    staleTime:1000 *5
    })
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })
  
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
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>
                <Link  href="/users/create" passHref>
                  <Button
                    as="a"                 
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    bg="pink.500"
                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}  
                    > 
                    Criar Usuário
                  </Button>  
                  </Link>
            </Flex> 
            {isLoading ?
             (
              <Flex justify="center">
                <Spinner/>
              </Flex>
            ):error?
            (
                <Flex justify='center'>
                  <Text>Falha ao listar os usarios</Text>
                </Flex>
              ):
              (
                <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4","4","6"]} color="gray.300" width=" 8">
                        <Checkbox colorScheme="pink"  />
                      </Th>
                      <Th>Usuario</Th>
                      {isWideVersion &&  <Th>Data do Cadastro</Th>}
                      <Th></Th>
                    </Tr>
                  </Thead>
                <Tbody>
                  {data.map(user=>(
                    <Tr key={user.id}>
                      <Td px="6"> <Checkbox colorScheme="pink"  /></Td>
                        <Td> 
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="smal" color="gray.300">{user.email}</Text>
                          </Box>
                       </Td>
                      {isWideVersion && <Td>{user.createAt}</Td>}
                        <Td>
                          <Link href="/users/edit" passHref>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}  
                              > 
                              {isWideVersion ? 'Editar' :' '}
                          </Button>  
                      </Link>
                    </Td>
                  </Tr>
                ))}
                </Tbody>
                </Table>
            <Pagination/>
            </>
              )}
          </Box>
        </Flex>
    </Box>
  );
}