import React from 'react'
import { VStack,Heading , Button  , Container , Text,Box} from '@chakra-ui/react'
const Subscribe = () => {
  return (
   <Container h={'90vh'} p={'5'}>
    <Heading children={'Welcome'} my="8" textAlign={'center'}/>
    <VStack boxShadow={'lg'}
    borderRadius={'lg'}>
    <Box bg="yellow.400" w={'full'} p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
      <Text children={'Pro Pack - ₹299.00'}/>
    </Box>
    <Box p={'4'}>
      <VStack textAlign={'center'} px="8" mt={'4'} spacing="4">
        <Text children={'Join pro pack and get access to all content.'}/>
        <Heading  size="md" children={'₹299 Only'}/>
      </VStack>
      <Button  w='full'        my="8"
            colorScheme={'yellow'}
      >
      Buy Now 
      </Button>
    </Box>
   
    
    <Box p={'2'} bg="blackAlpha.600" w='full'>
          <Heading
            color={'white'}
            textTransform="uppercase"
            size="sm"
            children={'100% refund at cancellation'}
          />

          <Text
            fontSize={'xs'}
            color="white"
            children={'*Terms & Conditions Apply'}
          />
        </Box>
    </VStack>
   </Container>
  )
}

export default Subscribe