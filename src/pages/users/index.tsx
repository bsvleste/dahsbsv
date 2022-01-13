import {useState} from 'react'; 

import {Link,useBreakpointValue, Text,Box,Flex,Heading,Button,Icon,Table,Thead,Th,Tr,Checkbox,Tbody,Td,Spinner } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination/index';
import { Sidebar } from '../../components/Sidebar';
import NextLink from 'next/link'
import { useUsers } from '../../services/hooks/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';

export default function UserList (){
 const [page,setPage] = useState(1);
  const {data, isLoading, isFetching , error} = useUsers(page);
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })
  async function handlePrefetchUser(userId:string){
    await queryClient.prefetchQuery(['user',userId],async()=>{
      const res = await api.get(`users/${userId}`)
      return res.data;
    },{
      staleTime:1000 * 60 * 10
    })
  }
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
              <Heading size="lg" fontWeight="normal">
                  Usuários
                  {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
              </Heading>
                <NextLink  href="/users/create" passHref>
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
                  </NextLink>
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
                  {data.users.map(user=>(
                    <Tr key={user.id}>
                      <Td px="6"> <Checkbox colorScheme="pink"  /></Td>
                        <Td> 
                          <Box>
                            <Link color="purple.400" onMouseEnter={()=>handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
                            <Text fontSize="smal" color="gray.300">{user.email}</Text>
                          </Box>
                       </Td>
                      {isWideVersion && <Td>{user.createAt}</Td>}
                       {/*  <Td>
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
                    </Td> */}
                  </Tr>
                ))}
                </Tbody>
                </Table>
            <Pagination 
              totalCountOfRegister={data.totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
            </>
              )}
          </Box>
        </Flex>
    </Box>
  );
}