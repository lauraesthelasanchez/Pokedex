import { configureStore } from '@reduxjs/toolkit'
import perPageSlice from './slices/perPage.slice'
import usernameSlice from './slices/username.slice'

export default configureStore({
  reducer: {
    perPage: perPageSlice,
    username: usernameSlice,
	}
})