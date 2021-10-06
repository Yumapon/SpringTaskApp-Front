import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk('fetchTasks', async () => {
    console.log("APIを呼び出します");
    const responce = (await fetch('http://localhost:8080/getall')).json();
    console.log(responce);
    console.log("APIを呼び出しました");
    return responce;
});

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        cleared: true,
        taskList: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.cleared = false;
                state.taskList = action.payload;
            })
    }
});

export default TasksSlice.reducer;

export const seletTasksCleared = (state) => state.tasks.cleared;

export const selectTasks = (state) => state.tasks.taskList;