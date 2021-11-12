import {Flex,SimpleGrid,Box,Text,theme}from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(()=>import('react-apexcharts'),{
  ssr:false,
})
const options = {
  chart:{
    toolbar:{
      show:false,
    },
    zoom:{
      enabled:false,
    },
    foreColor:theme.colors.gray[500]
  },
  grid:{
    show:false
  },
  dataLabels:{
    enabled:false
  },
  tooltip:{
    enabled:false
  },
  xaxis:{
    type:"datetime",
    axisBorder:{
      color:theme.colors.gray[600]
    },
    axisTicks:{
      color:theme.colors.gray[600]
    },
    categories:[
      '2021-11-04T00:00:00.000Z',
      '2021-11-05T00:00:00.000Z ',
      '2021-11-06T00:00:00.000Z',
      '2021-11-07T00:00:00.000Z',
      '2021-11-08T00:00:00.000Z',
      '2021-11-09T00:00:00.000Z', 
      '2021-11-10T00:00:00.000Z', 
    ]
    
  }
};
const series = [
  {name:"series1",data:[31,120,10,28,58,19,250]}
]
export default function Dashboard (){
  return (
    <Flex direction='column' h="100vh">
      <Header/>
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6">
          <Sidebar/>
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align='flex-start'>
            <Box bg="gray.800" p="8" borderRadius={8} boxShadow="md" rounded="md" pb="4" _hover={{boxShadow:'sm'}}>
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>
              <Chart options={options} series={series} type="area" height={160}  />
            </Box>
            <Box bg="gray.800"p="8" borderRadius="8" boxShadow="md" rounded="md" _hover={{boxShadow:'sm'}}>
              <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            </Box>
          
          </SimpleGrid>
      </Flex>
    </Flex>
 );
}