import { useSelector } from 'react-redux';

import Tarefa from '../../components/Tarefa';
import { Container } from './styles';

import { RootReducer } from '../../store';

const ListaDeTarefas = () => {
  const { items } = useSelector((state: RootReducer) => state.tarefas);

  return (
    <Container>
      <p>
        Duas tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;
      </p>
      <ul>
        {items.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              //poderia colocar apenas {...t}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListaDeTarefas;
