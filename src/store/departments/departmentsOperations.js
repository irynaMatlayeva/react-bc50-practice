import {postDepartment, getDepartments, updateDepartment, deleteDepartment} from '../../api/departments';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getDeparmentsOperation = createAsyncThunk('departments/getDepartments', async (_, thunkAPI) => {
    try {
        const {data} = await getDepartments();
        return data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.massege)
    }
} );

export const deleteDepartmentOperation = createAsyncThunk('departments/deleteDepartments', async (id, thunkAPI) => {
    try {
        const {data} = await deleteDepartment(id);
        return data.id;
    } catch(error){
        return thunkAPI.rejectWithValue(error.massege)
    }
} );

export const addDepartmentOperation = createAsyncThunk('departments/addDepartments', async (name, thunkAPI) => {
    try {
        const {data} = await postDepartment({name});
        
        return data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.massege)
    }
} );
export const updateDepartmentOperation = createAsyncThunk('departments/updateDepartments', async ({id, name}, thunkAPI) => {
    try {
        const {data} = await updateDepartment(id,{name, id});
        console.log(data)
        return data;
    } catch(error){
        return thunkAPI.rejectWithValue(error.massege)
    }
} );