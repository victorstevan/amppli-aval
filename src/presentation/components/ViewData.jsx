


import { makeStyles } from '@material-ui/core';
import React from 'react'

function getModalStyle() {

  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    overflow: 'scroll',
    flexDirection: 'row',
    columnGap: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '75%',

  };
}

const useStyles = makeStyles((theme) => ({
  paper: {

    position: 'absolute',
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: '20px',
    borderRadius: '16px',

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 0, 1),

  },
}));

export const ViewData = ({ data }) => {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);



  return (
    <form style={modalStyle} className={classes.paper}>

      <div>
        <p><strong>Informações Pessoais</strong></p>
        <p>ID: {data.id}</p>
        <p>CPF/CNPJ: {data.cpf_cnpj}</p>
        <p>Inscrição Estadual: {data.inscricao_estadual}</p>
        <p>Razão Social: {data.razao_social}</p>
        <p>Nome Fantasia: {data["NOME FANTASIA"]}</p>
      </div>
      <div>
        <p>CEP: {data.cep}</p>
        <p>Rua: {data.rua}</p>
        <p>Numero: {data.numero}</p>
        <p>Complemento: {data.complemento}</p>
        <p>Bairro: {data.bairro}</p>
        <p>Estado: {data.ESTADO}</p>
        <p>Cidade: {data.CIDADE}</p>
      </div>
      <div>
        <p>Email: {data.email}</p>
        <p>Fone 1: {data.fone_1}</p>
        <p>Fone 2: {data.fone_2}</p>
        <p>Fone 3: {data.fone_3}</p>
        <p>Fone 4: {data.fone_4}</p>
      </div>

      <div>
        <p>Data de Cadastro: {data["DAT CADASTRO"]}</p>
        <p>Status: {data.STATUS}</p>
        <p>Observação: {data.observacao}</p>
      </div>

    </form>
  )
}
