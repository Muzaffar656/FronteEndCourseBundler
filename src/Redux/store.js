import {configureStore} from '@reduxjs/toolkit'
import { updateProfileReducer, userReducer } from './reducers/userReducer'
import { courseReducer } from './reducers/courseReducer'
const store = configureStore({
    reducer:{
        user : userReducer,
        profile : updateProfileReducer,
        courses : courseReducer
    }
})

export default store

export const server = 'http://localhost:7000/api/v1'
