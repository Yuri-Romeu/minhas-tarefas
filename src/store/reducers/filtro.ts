import * as enums from '../../utils/enums/Tarefa';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type filtroState = {
  termo: string;
  criterio: 'prioridade' | 'status' | 'todas';
  valor?: enums.Prioridade | enums.Status;
};

const initialState: filtroState = {
  termo: '',
  criterio: 'todas'
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    }
  }
});

export const { alteraTermo } = filtroSlice.actions;
export default filtroSlice.reducer;
