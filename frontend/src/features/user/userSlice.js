import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import server from '../../utils/axiosInstance.utils.js'

const initialState = {
    name : '',
    email : '',
    mobile : '',
    pass : '',
    isLogedIn : false,
    logedInThroughOauth: false,
    status : 'idle',
    msg : ''
}

export const register = createAsyncThunk('user/login', async() => {
    try {     
        const res = await server.post('/auth/register', initialState);
        return res.data;
    } catch (err) {
        console.log('error in register func : ', err)
    }
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setDataToState : (state, action) => {
            
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.pass = action.payload.pass;
                state.mobile = action.payload.mobile
                state.isLogedIn = true;
                state.logedInThroughOauth = false;
                state.status = 'succeed'
            })
    }
});


export default userSlice.reducer;