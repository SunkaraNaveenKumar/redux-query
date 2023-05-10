import { createSlice } from "@reduxjs/toolkit";
const initialState={
    text:''
}
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        setText(state,action){
            state.text=action.payload
        }
    }
})
export const {setText}=userSlice.actions 
export default userSlice.reducer