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


export const register = createAsyncThunk('user/register', async(data, {rejectWithValue}) => {
    try {     
        const res = await server.post('/auth/register', data);
        console.log(res);
        
        return res.data;
    } catch (err) {
        console.log('error in register func : ', err.response.data)
        return rejectWithValue(err.response.data || {msg : 'Sign-in Failed', success : false})
    }
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        updateFeild : (state, action) => {
            const {field, value} = action.payload;
            state[field] = value
        },
        resetField : (state) => {
            state.name = '',
            state.email = '',
            state.mobile = '',
            state.pass = '',
            state.isLogedIn = false,
            state.logedInThroughOauth = false,
            state.status = 'idle',
            state.msg = ''
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.msg = '';
                state.isLogedIn = false
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                console.log(action);
                
                state.msg = action.payload?.msg,
                state.isLogedIn = action.payload?.success;
                state.logedInThroughOauth = false;
                state.status = 'success'
            })
            .addCase(register.rejected, (state, action) =>  {
                console.log(action);
                state.msg = action.payload?.msg                
                state.status = 'failed'
            })
    }
});

export const {updateFeild, resetField} = userSlice.actions

export default userSlice.reducer;