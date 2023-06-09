import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data/Categories";

const initialState = {
    categories: Categories,
    selectedCategorie: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        getCategories: state=> state.categories,

        selectCategorie: (state, action)=>{
            return {
                ...state,
                selectedCategorie: action.payload !== state.selectedCategorie? action.payload : null
            }
        },
        filterCategorie: (state, action) =>{
            const cat = action.payload
            const filtered = state.categories.filter(category=> category.category === cat)
            state.categories = filtered;
        },
        removeFilter: state=> {return initialState}
    }
})

export const {getCategories, selectCategorie, filterCategorie, removeFilter} = categoriesSlice.actions
export default categoriesSlice.reducer