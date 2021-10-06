import { createSlice } from "@reduxjs/toolkit";

const initialItem = {
    id: "",
    taskName: "",
    taskContents: "",
    deadline: "",
    client: ""
}

const taskSlice = createSlice({
    name: "task",
    initialState: {
        item: initialItem,
    },
    reducers: {
        id: (state, action) => {
            state.item.id = action.payload;
        },
        taskName: (state, action) => {
            state.item.taskName = action.payload;
        },
        taskContents: (state, action) => {
            state.item.taskContents = action.payload;
        },
        deadline: (state, action) => {
            state.item.deadline = action.payload;
        },
        client: (state, action) => {
            state.item.client = action.payload;
        }
    },
});

export default taskSlice.reducer;

export const { id, taskName, taskContents, deadline, client } = taskSlice.actions;

export const selectTask = (state) => state.task.item;