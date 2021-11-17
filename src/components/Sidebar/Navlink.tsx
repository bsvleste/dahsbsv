import {ElementType} from 'react'
import{Link,Icon,Text, LinkProps as ChakraLinkProps} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  icon:ElementType
  children:string
}
export function Navlink({icon,children,...rest}:NavLinkProps){
  return(
    <Link href="/dashboard" display="flex" align="center" color="pink.400" {...rest}>
      <Icon as={icon}fontSize="20" />
      <Text ml="4"fontWeight="medium">{children}</Text>
    </Link>
  )
}