import { Box,Stack,Text,Link,Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiDatabase2Line, RiGitMergeLine, RiInputMethodLine, RiNotificationFill } from "react-icons/ri";
import { Navlink } from "./Navlink";
import { Navsection } from "./Navsection"
export function SidebarNav(){
  return(
    <Stack spacing="12" align='flex-start'> 
        <Navsection title="GERAL">
          <Navlink icon={RiDashboardLine} href="/dashboard">
            Dashboard
          </Navlink>
          <Navlink icon={RiContactsLine} href="/users"> 
            Usuários
          </Navlink>
        </Navsection>
       <Navsection title="AUTOMOÇÃO">
       <Navlink icon={RiInputMethodLine} href="/forms">
         Formulario
       </Navlink>
        <Navlink icon={RiGitMergeLine} href="/automation">
          Automação
        </Navlink>
       </Navsection>
      </Stack>
  )
}