import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entitis/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('Invalid username or password');
    }
  },
);
