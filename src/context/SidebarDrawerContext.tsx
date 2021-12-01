/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect}from 'react'
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext,ReactNode,useContext } from "react";
interface SidebarDrawerProviderProps{
  children:ReactNode
}
type SidebarDrawerContextData= UseDisclosureReturn
const SideBarDrawerContext = createContext({}as UseDisclosureReturn);

export function SideBarDrawerProvider({children}:SidebarDrawerProviderProps){
  const disclosure = useDisclosure()
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose()
  },[router.asPath])
    
  return (
    <SideBarDrawerContext.Provider value={disclosure} >
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = ()=>useContext(SideBarDrawerContext)