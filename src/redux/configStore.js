import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import loadingSlice from './Slice/loadingSlice';
import ticketSlice from './Slice/ticketSlice';

export const store = configureStore({
  reducer: { userSlice, loadingSlice, ticketSlice },
});
