import { createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState: {
      isLoading: true,
      numbers: []
  },
  reducers: {
    setNumbersLoading: (state) => {
        state.isLoading = true;
        state.isError = false;
    },
    setNumbersSuccess: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.numbers = action.payload;
    },
    setNumbersAdd: (state, action) => {
        state.numbers = action.payload;
    },
  },
});

const { setNumbersLoading, setNumbersSuccess } = numbersSlice.actions;

export const availableNumbers = () => async (dispatch) => {
    dispatch(setNumbersLoading())
    const response = await api.get('numbers');
    if (response.status === 200) {
       
        dispatch(setNumbersSuccess(response.data))
    }else {
        alert('Error, try again!');
    }
}

export const addNumber = (payload) => async (dispatch) => {
    const response = await api.post('numbers', payload);
    if (response.status === 201) {
        dispatch(availableNumbers())
    }else {
        alert('Error, try again!');
    }
}

export const editNumber = (data) => async (dispatch) => {
    const response = await api.put(`numbers/${data.id}`, data);

    if (response.status === 200) {
        dispatch(availableNumbers());
    }else {
         alert('Error, try again!');
    }
}

export const deleteNumber = (data) => async (dispatch) => {
    const response = await api.delete(`numbers/${data}`);

    if (response.status === 200) {
        dispatch(availableNumbers());
    }else {
         alert('Error, try again!');
    }
}

export default numbersSlice.reducer;
