import Tarefa from '../../components/Tarefa';
import { Container } from './styles';

import * as enums from '../../utils/enums/Tarefa';

const tarefas = [
  {
    titulo: 'estudar react',
    descricao: 'estudar react na ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar a conta de internet',
    descricao: 'Baixar fatura no gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Treinar perna',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
];

const ListaDeTarefas = () => {
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
