import { forwardRef,ForwardRefRenderFunction } from "react";
import { FormErrorMessage,FormControl,FormLabel,Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps{
  name:string,
  label?:string,
  error?:FieldError
} 
const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps>=({name,label,error = null,...rest},ref)=>{
  return(
    <FormControl isInvalid={!!error}>
      {!! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          id={name}
          name={name}             
          ref={ref}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          borderRadius={8}
          _hover={{
            bgColor:'gray.900'
          }}
          size='lg'
          {...rest}
          />
          {!!error && (
              <FormErrorMessage>
                {error.message}
              </FormErrorMessage>
          )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)