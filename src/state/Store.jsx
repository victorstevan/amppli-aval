

import React, { useState } from 'react'


const initialState = [{
  "id": "2",
  "cpf_cnpj": "071.871.611-66",
  "inscricao_estadual": "inscr",
  "razao_social": "Razão",
  "NOME FANTASIA": "Starly",
  "cep": 74640040,
  "rua": "Rua 1",
  "numero": 240,
  "complemento": "Lugar",
  "bairro": "Vila",
  "ESTADO": "Goiás",
  "CIDADE": "Goiânia",
  "email": "victor.stevan@email.com",
  "fone_1": "62982858137",
  "fone_2": "62982858137",
  "fone_3": "62982858137",
  "fone_4": "62982858137",
  "DAT CADASTRO": "02/02/1999",
  "STATUS": "Ativo",
  "observacao": "Nenhuma",
}];

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
export default Store;