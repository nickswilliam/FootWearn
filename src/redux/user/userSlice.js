import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    usersList: [],
    hiddenMenu: true,
    isUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action)=> {
            return{
                ...state,
                currentUser: action.payload
            }
        },
        toggleHiddenMenu: state=> {
            return{
                ...state,
                hiddenMenu: !state.hiddenMenu
            }
        },
        loginUser: (state, action) =>{
            const email = action.payload.email
            const password = action.payload.password
            return{
                ...state,
                currentUser: state.usersList.find(user=>user.email === email && user.password === password )
            }
        },
        addNewUser: (state, action)=> {
            return{
                ...state,
                isUser: !state.isUser,
                usersList: [...state.usersList, action.payload]
            }
        },
        userExist: (state, action)=>{
            const email = action.payload
            const userLog = state.usersList.some(user=> user.email === email)
            console.log('userlog', userLog);
            return{
                ...state,
                isUser: userLog
            }
        }
    }
})

export const {setCurrentUser, toggleHiddenMenu, loginUser, addNewUser, userExist} = userSlice.actions
export default userSlice.reducer