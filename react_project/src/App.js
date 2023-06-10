import logo from './logo.svg';
import './App.css';
import Voos from './Voos';



function Titulo() {
  return(
    <h1>
      <span>Olá </span>
      <strong>Mundo!</strong>
    </h1>
    
  )

}

function MyButton(props) {
  const handleClick = () => {
    console.log('Clicou')
  };
  const label = 'Aperte na mosca';
  return(
    <button onClick={handleClick} type="button">{label}</button>

  )
}

function PessoaDeMaior() {
  return(
    <strong>Maior idade</strong>
  )
}

function Pessoa(props) {

  if(props.idade <= 10) {
    return(
      <h3>Área restrita</h3>
    )
  }

  return(
    <section>
      Você é {props.idade >= 18 ? <PessoaDeMaior /> : 'menor idade'}
    </section>
  )
}

const ListaItem = ({ label }) => {
  return(
    <li><strong>{label}</strong></li>
  )
}

const Lista = () => {

  const passos  = [
    'Number One',
    'Number Two',
    'Number Three',
    'Number Four'
  ];

  return(
    <ul>
      <ListaItem label="Número 1" />
      <ListaItem label="Número 2" />
      {passos.map(function(valor, index) {
        return <ListaItem key={index} label={valor} />
      })}
    </ul>
  )
}


function App() {

  return (
    <div className="App">
      <Titulo />   
      <MyButton />      
      <p>Para chamar uma função usa-se uma tag: com o nome dela.</p>
      <h2>Vamos lá!</h2>
      <p>Para criação do projeto, seque a mesma lógica do HTML, criando tags e colocando o conteúdo nelas.</p>
      <p>É só o começo!</p>
      <Voos />
      <Lista />
      <Pessoa idade={18} />
      <Pessoa idade={12} />
      <Pessoa idade={24} />
      <Pessoa idade={8} />
      <article>
        <h2>Subtítulo</h2>
        <p>Para criar outro componente é necessário criar uma função ou class.</p>
      </article>
      <MyButton />
      <p>Para iniciar o projeto, escreva npm start!</p>
    </div>
    
  );
}

export default App;
