import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createTask = createAsyncThunk('createTask', async (task) => {
    console.log("ADDAPIを呼び出します");
    return (await fetch(`/addtask`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })).ok;
})

export const updateTask = createAsyncThunk('updateTask', async (task) => {
    return (await fetch(`/changetask/${task.num}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })).ok;
})

export const deleteTask = createAsyncThunk('deleteTask', async (task) => {
    return (await fetch(`/deletetask/${task.num}`, {
        method: `DELETE`
    })).ok;
})

const initialItem = {
    num: '',
    name: '',
    content: '',
    deadline: '',
    client: ''
}

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        item: initialItem,
    },
    reducers: {
        taskCleared: state => {
            state.item = initialItem;
        },
        taskNameEdited: (state, action) => {
            state.item.taskName = action.payload;
        },
        taskContentsEdited: (state, action) => {
            state.item.taskContents = action.payload;
        },
        deadlineEdited: (state, action) => {
            state.item.deadline = action.payload;
        },
        clientEdited: (state, action) => {
            state.item.client = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createTask.fulfilled, state => {
                state.item = initialItem;
            })
            .addCase(updateTask.fulfilled, state => {
                state.item = initialItem;
            })
            .addCase(deleteTask.fulfilled, state => {
                state.item = initialItem;
            });
    }
});

export default taskSlice.reducer;

export const { taskCleared, taskNameEdited, taskContentsEdited, deadlineEdited, clientEdited } = taskSlice.actions;

export const selectTask = (state) => state.task.item;