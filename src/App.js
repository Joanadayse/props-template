import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

const nomeProprio ="Joana"

const carro1={
  nomeDoCarro: "Fusca",
  ano: 1970,
  cor:"Azul",
  flex: false
}
const carro2={
  nomeDoCarro: "Brasília",
  ano: 1965,
  cor:"Amarela",
  flex: false
}
const carro3={
  nomeDoCarro: "Opala",
  ano: 1984,
  cor:"Verde",
  flex: false
}
const carro4={
  nomeDoCarro: "Ferrari",
  ano: 1970,
  cor:"Vermelha",
  flex: false
}
const carro5={
  nomeDoCarro: "Mercedes",
  ano: 1965,
  cor:"Amarela",
  flex: false
}
const carro6={
  nomeDoCarro: "Jaguar",
  ano: 1984,
  cor:"Verde",
  flex: false
}

function apresentacao (nomeProprio){
  alert (`bem vindos a garagem ${nomeProprio}`)
}

  return (
    
    <div>
      <Garagem 
     nome={nomeProprio}
     carro1={carro1}
     carro2={carro2}
     carro3={carro3}
     funcao={apresentacao}
     />
     <Garagem
      nome={"Barbosa"}
      carro1={carro4}
      carro2={carro5}
      carro3={carro6}
      funcao={apresentacao}
      />
     
     
       
    </div>
  );
}
