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
const Request = () => {
    const [email,setEmail] = useState('')
    const [course,setCourse] = useState('')
    const [name,setName] = useState('')
  return (
    <Container h={'100vh'} mt={'0'}>
      <VStack h={'full'} justifyContent="center" >
        <Heading textTransform={'uppercase'} ml={['4','0']} children={'Request For Course'} />

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
          <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="message"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain Your Course..."

              focusBorderColor="yellow.500"
            />
          </Box>


          <Button my={'1'}  colorScheme={'yellow'} type="submit">
  Send Email
          </Button>
          <Box my="4">
            See available Courses!{' '}
            <Link to="/courses">
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

export default Request