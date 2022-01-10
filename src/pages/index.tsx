import {Flex,Button,Stack} from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {useForm, SubmitHandler} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

type SignInFormData={
  email:string,
  password:string
}

const signInFormSchema = yup.object().shape({
  email:yup.string().required("E-mail obrigatorio").email('E-mail invalido'),
  password:yup.string().required("Senha obrigatoria").min(6,"A senha deve conter no minimo 6 caracteres"),
})

export default function SignIn() {
  const {register,handleSubmit,formState:{errors,isSubmitting }}= useForm<SignInFormData>({
    resolver:yupResolver(signInFormSchema)
  })

  const handleSingIn:SubmitHandler<SignInFormData>= async (values)=>{
    await new Promise(resolve=>setTimeout(resolve,2000))
    console.log(values)

  }
  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'>    
      <Flex
        as="form"
        flexDir="column"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSingIn)}
      >
        <Stack spacing='4'>
         <Input 
            type="email"
            name="email "
            label="E-mail"
            error={errors.email}         
            {...register("email")}
         />
         <Input 
            type="password"
            name="password"
            label="Senha"
            error={errors.password}         
            {...register('password')}          
         />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
          >          
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
