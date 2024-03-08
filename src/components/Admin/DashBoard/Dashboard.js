import React from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const DataBox = ({title,qty,qtypercentage,profit})=>{
  return(
    <Box 
     
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={"8"}
    borderRadius={'lg'}
    >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight="bold" children={qty} />

      <HStack>
        <Text children={`${qtypercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={'Since Last Month'} />
    </Box>
  )
}
const Bar = ({title,value,profit})=>{
  return(
  
        <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" />

    <HStack w="full" alignItems={'center'}>
      <Text children={profit?'0%':`-${value}%`} />

      <Progress w="full" value={profit ? value :0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>

  )
}
const Dashboard = () => {
  return (

    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb="16"
          textAlign={['center', 'left']}
        />
        <Stack
     direction={['column', 'row']}
            minH="24"
            justifyContent={'space-evenly'}
        >
          <DataBox qty={'120'} profit={true} title={"Views"} qtypercentage={"30"} />
          <DataBox qty={'40'} profit={false} title={"Subscription"} qtypercentage={"10"} />
          <DataBox qty={'23'} profit={true} title={"Users"} qtypercentage={"60"} />

        </Stack>
        <Box
          m={['0', '16']}
            borderRadius="lg"
            p={['0', '16']}
            mt={['4', '16']}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
    <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Views Graph"
              pt={['8', '0']}
              ml={['0', '16']}
            />
         
        <LineChart/>
        </Box>

      <Grid 
      templateColumns={['1fr', '2fr 1fr']}
      >
  <Box p={'4'}>
  <Heading
                textAlign={['center', 'left']}
                size="md"
                children="Progress Bar"
                my="8"
                ml={['0', '16']}
              />
              <Box>
                <Bar profit={true} title={"Views"} value={70} />
                <Bar profit={true} title={"Users"} value={70} />
                <Bar profit={true} title={"Subscription"} value={20} />

              </Box>
  </Box>
  <Box p={['0', '16']} boxSizing="border-box" py="4">
              <Heading textAlign={'center'} size="md" mb="4" children="Users" />
      <DoughnutChart/>
            </Box>
      </Grid>


      </Box>
      <Sidebar />
    </Grid>
   
  );
};

export default Dashboard;
