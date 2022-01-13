import {Button, Box,Flex,Heading ,Divider,VStack,SimpleGrid,HStack} from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import {Input} from '../../components/Form/Input';
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm,SubmitHandler } from 'react-hook-form';
import {useMutation} from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData={
  name:string,
  email:string,
  password:string
  password_confirm:string
}

const createUserFormSchema = yup.object().shape({
  name:yup.string().required("Nome é obrigatorio"),
  email:yup.string().required("E-mail obrigatorio").email('E-mail invalido'),
  password:yup.string().required("Senha obrigatoria").min(6,'Senha Deve conter no minimo 6 caracteres'),
  password_confirm:yup.string().oneOf([
    null,yup.ref('password')
  ],"As senha precisam ser iguais")
})

export default function CreateUser (){
  const router = useRouter();
  const createUser = useMutation(async(user:CreateUserFormData)=>{
    const res = await api.post('users',{
      user:{
        ...user,
        create_at:new Date(),
      }
    })
    return res.data.user
  },{
    onSuccess:()=>{
      queryClient.invalidateQueries('users');
    }
  });

  const {register,handleSubmit,formState:{errors,isSubmitting}} =useForm({
    resolver:yupResolver(createUserFormSchema)
  })

  const handleCreateUser:SubmitHandler<CreateUserFormData> = async(values)=>{
    await createUser.mutateAsync(values);
    router.push('/users')
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
          <Box
            as = 'form'
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["10","8"]}
            onSubmit={handleSubmit(handleCreateUser)}
            >
           <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
           <Divider my="6" borderColor="gray.700" />
           <VStack spacing="8" >
              <SimpleGrid minChildWidth="300px" spacing="8" w="100%">
                <Input
                  name="name"
                  type='text'
                  label="Nome"
                  error={errors.name}         
                  {...register("name")}
                  />
                <Input
                  name="email"
                  type='email'
                  label="E-mail" 
                  error={errors.email}         
                  {...register("email")}
                  />               
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  name="password"
                  type='password'
                  label="Senha" 
                  error={errors.password}         
                  {...register("password")}
                  />
                <Input
                  name="password_confirm"
                  type='password'
                  label="Confirme a Senha"
                  error={errors.password_confirm}         
                  {...register("password_confirm")}
                  />               
              </SimpleGrid>
           </VStack>
           <Flex mt="8" justify="flex-end">  
            <HStack spacing="4">
            <Link href="/users" passHref>
              <Button  as="a" colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
              <Button type="submit"  isLoading={isSubmitting} colorScheme="pink" bgColor="pink.500">Salvar</Button>
            </HStack>
           </Flex>
          </Box>
        </Flex>
    </Box>
  );
}