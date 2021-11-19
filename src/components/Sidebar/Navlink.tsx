import {ElementType} from 'react'
import{Link as ChakraNavlink,Icon,Text, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'
interface NavLinkProps extends ChakraLinkProps {
  icon:ElementType;
  children:string;
  href:string
}
export function Navlink({icon,children,href,...rest}:NavLinkProps){
  return(
    <ActiveLink href={href} passHref>
      <ChakraNavlink  display="flex" align="center" {...rest}>
        <Icon as={icon}fontSize="20" />
        <Text ml="4"fontWeight="medium">{children}</Text>
      </ChakraNavlink>
    </ActiveLink>
  )
}