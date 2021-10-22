import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTask, updateTask, deleteTask } from "./Task"

export const fetchTasks = createAsyncThunk('fetchTasks', async () => {
    console.log("APIを呼び出します");
    const responce = (await fetch('/getall')).json();
    console.log(responce);
    console.log("APIを呼び出しました");
    return responce;
});

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        cleared: true,
        items: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.cleared = false;
            state.items = action.payload;
        })
        .addCase(createTask.fulfilled, state => {
            state.cleared = true;
            state.items = [];
        })
        .addCase(updateTask.fulfilled, state => {
            state.cleared = true;
            state.items = [];
        })
        .addCase(deleteTask.fulfilled, state => {
            state.cleared = true;
            state.items = [];
        });
    }
});

export default TasksSlice.reducer;

export const seletTasksCleared = (state) => state.tasks.cleared;

export const selectTasks = (state) => state.tasks.items;