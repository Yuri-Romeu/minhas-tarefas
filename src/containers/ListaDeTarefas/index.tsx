import { useSelector } from 'react-redux';

import Tarefa from '../../components/Tarefa';
import { Container } from './styles';

import { RootReducer } from '../../store';

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state);

  return (
    <Container>
      <p>
        Duas tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
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
