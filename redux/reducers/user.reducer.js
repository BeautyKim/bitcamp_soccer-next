import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoading: false,
    userData: null,
    error: null
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        joinRequest(state, action){state.userLoading = true, State.error = null},
        joinSuccess(state, action){state.userLoading = false, State.error = action.payload},
        joinFailure(state, action){state.userLoading = false, State.error = action.payload}
    }
})
export default userSlice.reducer