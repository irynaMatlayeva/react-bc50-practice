import { createSlice } from '@reduxjs/toolkit';
import { addDepartmentOperation, deleteDepartmentOperation, getDeparmentsOperation, updateDepartmentOperation } from './departmentsOperations';
 
const initialState = {departmentsItems: []};
const convertDepartments = ({id, name}) => {
    return {id, text:name, rel:'departments'};
}
const departmentsSlice = createSlice({
    name: "departments",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getDeparmentsOperation.fulfilled, (state, {payload}) =>{
            state.departmentsItems = payload.map(convertDepartments);
        })
        .addCase(deleteDepartmentOperation.fulfilled, (state, {payload}) => {
            state.departmentsItems = state.departmentsItems.filter(department => department.id !== payload);
        })
        .addCase(addDepartmentOperation.fulfilled, (state, {payload}) => {
            const newDepartment = convertDepartments(payload);
          state.departmentsItems.some(elem => elem.text.toLowerCase() === newDepartment.text.toLowerCase())
           ? alert(`${newDepartment.text} is already in list`)
            : state.departmentsItems.push(newDepartment);
           
        }) 
        .addCase(updateDepartmentOperation.fulfilled, (state, {payload}) =>{
            const newDepartment = convertDepartments(payload);
           state.departmentsItems = state.departmentsItems.map(el => el.id === payload.id ? newDepartment : el);

        })
    }
})

export const departmentsReducer = departmentsSlice.reducer;