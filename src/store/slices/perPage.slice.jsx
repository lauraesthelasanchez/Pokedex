import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const perPageSlice = createSlice({
		name: 'perPage',
    initialState: 20,
    reducers: {
      getPerPage: (state, action) => {
        const perPage = action.payload;
        return perPage
    }
    }
})

export const { getPerPage } = perPageSlice.actions;

export default perPageSlice.reducer;