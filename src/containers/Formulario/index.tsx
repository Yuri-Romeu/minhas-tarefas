import { Form } from './styles';
import { Campo, MainContainer, Titulo } from '../../styles';

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form>
        <Campo type="text" placeholder="Título" />
        <Campo as="textarea" placeholder="Descrição da tarefa" />
        <div>
          <p>Prioridade</p>
          <input type="radio" id="urgente" name="prioridade" />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input type="radio" id="importante" name="prioridade" />{' '}
          <label htmlFor="importante">Importante</label>
          <input type="radio" id="normal" name="prioridade" />{' '}
          <label htmlFor="normal">Normal</label>
        </div>
        <button type="submit">Cadastrar</button>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
