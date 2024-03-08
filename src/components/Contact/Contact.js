import React, { useState } from 'react'
import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
const Contact = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [message,setMessage] = useState()
  return (
    <Container h={'100vh'} mt={'0'}>
      <VStack h={'full'} justifyContent="center" >
        <Heading textTransform={'uppercase'} ml={['4','0']} children={'Contact Us'} />

        <form  style={{ width: '100%' }}>
     
    <Box>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

 
          <Box>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box >
          <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message..."

              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={'1'}  colorScheme={'yellow'} type="submit">
  Send Email
          </Button>
          <Box my="4">
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>


      
        </form>
      </VStack>
    </Container>
  )
}

export default Contact