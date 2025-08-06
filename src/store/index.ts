import { configureStore } from '@reduxjs/toolkit';

import tarefasReducer from './reducers/tarefas';
import filtroReducer from './reducers/filtro';

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
});

store.subscribe(() => {
  const estado = store.getState();
  localStorage.setItem('tarefas', JSON.stringify(estado.tarefas.itens));
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
