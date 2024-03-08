import React,{useEffect} from 'react';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home/Home';
import './index.css'
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payment/Subscribe';
import PaymentSuccess from './components/Payment/PaymentSuccess'
import NotFound from './components/Layout/NotFound/NotFound'
import PaymentFail from './components/Payment/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import UpdatePassword from './components/Profile/UpdatePassword';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/DashBoard/Dashboard'
import User from './components/Admin/Users/User';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import { useSelector,useDispatch } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast'
import {loadUser} from './Redux/actions/user'
import Loader from './components/Layout/Loader/Loader';


function App() {

  const {isAuthenticate,user,error,message,loading} = useSelector(state => state.user)

  const dispatch = useDispatch()


  useEffect(()=>{
    if(message){
      toast.success(message)
      dispatch({type:"clearMessage"})

    }
    if(error){
      toast.error(error)
      dispatch({type:"clearError"})
    }
  },[error,message,dispatch])

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return       (
    <Router>
   {
    loading ? (<Loader/>) : (
      <>
      <Header isAuthenticate={isAuthenticate} user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/course/:id' element={<CoursePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/request' element={<Request/>}/>
        
        <Route path='/updateprofile' element={!isAuthenticate ? <Login/> : <UpdatePassword user={user}/>}/>
        <Route path='/changepassword' element={!isAuthenticate ? <Login/> : <ChangePassword/> }/>
        
  <Route path='/login'  element={ !isAuthenticate ?  <Login/> : <Profile user={user}/>}  />

 
  <Route path="/profile" element={isAuthenticate ? <Profile user={user}/> : <Login/> }/>

        <Route path='/register' element={!isAuthenticate ? <Register/> : <Profile user={user}/>}/>
        <Route path='/forgetpassword' element={!isAuthenticate ? <ForgetPassword/>: <Profile user={user} />}/>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/paymentfail' element={<PaymentFail/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* ADMIN ROUTES */}
        <Route path='/admin/dashboard'  element={user && user.role === 'admin' ? <Dashboard/> : <Login/>}/>
        <Route path='/admin/users'  element={user && user.role === 'admin' ? <User/> : <Login/>}/>
        <Route path='/admin/courses'  element={user && user.role === 'admin' ? <AdminCourses/> : <Login/>}/>
        <Route path='/admin/createcourse'  element={user && user.role === 'admin' ? <CreateCourse/> : <Login/>}/>
        
      </Routes>
      <Footer/>
      <Toaster/>
      </>
    )
   }
    </Router>
  )


}

export default App;
