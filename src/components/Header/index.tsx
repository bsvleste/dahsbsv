import {Flex,useBreakpointValue,IconButton,Icon} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Perfil';
import { SearchBox } from './SeachBox';
export function Header (){
  const {onOpen} = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"      
      px="6"
      align="center"
      boxShadow="md" p="6" rounded="md"
      >
        {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"  
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          >

        </IconButton>)}
         <Logo/>
        {isWideVersion && <SearchBox/>}
        <Flex
         align="center"
         ml="auto"
         >
         <NotificationNav/>  
         <Profile showProfileData={isWideVersion}/>
        </Flex>          
    </Flex>
  );
}