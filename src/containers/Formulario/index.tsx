import { Form, Opcoes, Opcao } from './styles';
import {
  BotaoMob,
  BotaoSalvar,
  Campo,
  MainContainer,
  Titulo
} from '../../styles';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cadastrar } from '../../store/reducers/tarefas';
import { useNavigate } from 'react-router-dom';

import * as enums from '../../utils/enums/Tarefa';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                id={prioridade}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                name="prioridade"
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>{' '}
        <BotaoMob
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Voltar para tarefas
        </BotaoMob>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
