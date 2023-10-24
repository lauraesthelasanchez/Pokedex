import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
		name: 'userName',
    initialState: "",
    reducers: {
        getUsername: (state, action) => {
            const inputName = action.payload;
            return inputName
        }
    }
})

export const { getUsername } = usernameSlice.actions;

export default usernameSlice.reducer;