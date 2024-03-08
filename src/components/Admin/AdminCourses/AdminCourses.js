import React from 'react'
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useDisclosure
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal';
const courses = [
  {
    _id:"dfsdf",
    title:"React Course",
    category:"Web Development",
    poster:{
      url:"https://lovo.ai/_next/image?url=%2Fimage%2Fai-art-generator%2Fcarousel-gallery-image-6.jpg&w=384&q=75"
    },
    createBuy:"Muzaffar",
    views:1235,
    numOfVideos:12
  }
]

const deleteButtonHandler = (id)=>{
  console.log(id)
}
const AdminCourses = () => {
  const {isOpen,onClose,onOpen} = useDisclosure()
  const courseDetailsHandler = (id)=>{
    onOpen()
  }
  const deleteButtonLecturesHandler= (courseId,lectureId)=>{
    console.log(courseId)
    console.log(lectureId)

  }
  const addLectureHandler = (e,courseId,title,description,video)=>{
    e.preventDefault()
  }
  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available Courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Posters</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses &&
                courses.map(item => (
                  <Row
                   
                    key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal isOpen={isOpen} onClose={onClose} id={'#jkll'} deleteButtonHandler={deleteButtonLecturesHandler}
          addLectureHandler={addLectureHandler}
          coursetitle= {'React Course'}
        />
      </Box>

      <Sidebar />
    </Grid>
  );
};

 

function Row({ item, courseDetailsHandler,deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td> 
      <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>

      <Td >{item.createBuy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>


      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
         
          >
            View Courses
          </Button>

          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
export default AdminCourses