import React, { useEffect, useState } from 'react'
import {Container,Input,Button,Heading,VStack, Toast} from '@chakra-ui/react'
import { changepassword } from '../../Redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const ChangePassword = () => {
  const {loading, error,message} = useSelector(state=> state.profile)
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
      e.preventDefault()
      dispatch(changepassword(oldPassword,newPassword))
    }
    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch({type:"clearError"})
      }
      if(message){
        toast.success(message)
        dispatch({type:"clearMessage"})

      }
    },[dispatch,error,message])
  return (
    <Container py="16" minH={'90vh'}>
    <form onSubmit={submitHandler} >
      <Heading
        textTransform={'uppercase'}
        children="Change Password"
        my="16"
        textAlign={['center', 'left']}
      />

      <VStack spacing={'8'}>
        <Input
          required
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
          placeholder="Old Password"
          type={'password'}
          focusBorderColor="yellow.500"
        />

        <Input
          required
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="New Password"
          type={'password'}
          focusBorderColor="yellow.500"
        />

        <Button
          w="full"
          colorScheme={'yellow'}
          type="submit"
          isLoading={loading}
        >
          Change
        </Button>
      </VStack>
    </form>
  </Container>
  )
}

export default ChangePassword