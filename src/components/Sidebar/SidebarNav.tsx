import { Box,Stack,Text,Link,Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiDatabase2Line, RiGitMergeLine, RiInputMethodLine, RiNotificationFill } from "react-icons/ri";
import { Navlink } from "./Navlink";
import { Navsection } from "./Navsection"
export function SidebarNav(){
  return(
    <Stack spacing="12" align='flex-start'> 
        <Navsection title="GERAL">
          <Navlink icon={RiDashboardLine}>
            Dashboard
          </Navlink>
          <Navlink icon={RiContactsLine}> 
            Usuários
          </Navlink>
        </Navsection>
       <Navsection title="AUTOMOÇÃO">
       <Navlink icon={RiInputMethodLine}>
         Formulario
       </Navlink>
        <Navlink icon={RiGitMergeLine}>
          Automação
        </Navlink>
       </Navsection>
      </Stack>
  )
}