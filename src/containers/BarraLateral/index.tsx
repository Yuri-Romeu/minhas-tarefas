import FiltroCard from '../../components/FiltroCard';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { alteraTermo } from '../../store/reducers/filtro';
import * as enums from '../../utils/enums/Tarefa';
import { Botao, Campo } from '../../styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  mostrarFiltro: boolean;
};

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { termo } = useSelector((state: RootReducer) => state.filtro);
  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normais"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;
