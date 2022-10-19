import React from "react";
function Carro(props) {
  return (
    <div>
      <h2>{props.nomeProprio}</h2>
      <ul>
        <li>Modelo:{props.carro.ano}</li>
        <li>Cor:{props.carro.color}</li>
        <li>Flex?:{props.carro.flex?"sim" :"nao"}</li>
       </ul>
    </div>
  );
}

export default Carro;
