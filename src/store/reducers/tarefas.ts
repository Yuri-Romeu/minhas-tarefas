import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

type TarefasState = {
  items: Tarefa[];
};

const initialState: TarefasState = {
  items: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Estudando objetos e funções em JavaScript'
    },
    {
      id: 2,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Estudando hooks em React'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Estudando interfaces em TypeScript'
    }
  ]
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    }
  }
});

export const { remover } = tarefasSlice.actions;
export default tarefasSlice.reducer;
