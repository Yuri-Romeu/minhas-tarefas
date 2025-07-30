import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar JavaScript na EBAC',
      1
    ),
    new Tarefa(
      'Estudar Ingles',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Estudar Ingles vendo video',
      2
    ),
    new Tarefa(
      'Ir para academia',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Fazer esteira e treinar perna',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload);
    }
  }
});

export const { remover } = tarefasSlice.actions;
export default tarefasSlice.reducer;
