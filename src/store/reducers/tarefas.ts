import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tarefa from '../../models/Tarefa';
import * as enums from '../../utils/enums/Tarefa';

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      descricao: 'Estudando objetos e funções em JavaScript'
    },
    {
      id: 2,
      titulo: 'Estudar React',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Estudando hooks em React'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.IMPORTANTE,
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
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
      // tarefaParaEditar = action.payload;
    }
  }
});

export const { remover, editar } = tarefasSlice.actions;
export default tarefasSlice.reducer;
