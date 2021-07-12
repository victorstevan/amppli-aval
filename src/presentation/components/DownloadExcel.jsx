import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import React, {useContext} from "react";
import ReactExport from "react-data-export";
import { Context } from "../../state/Store";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


export const Download = () => {

  const [state, setState] = useContext(Context);

  return (
    <ExcelFile element={<IconButton>
      <FontAwesomeIcon icon={faFileExcel} color='white' />
    </IconButton>}>
      <ExcelSheet  data={state} name="Employees">
        <ExcelColumn label="ID" value="id" />
        <ExcelColumn label="CPF/CNPJ" value="cpf_cnpj" />
        <ExcelColumn label="Inscriação Estadual" value="inscricao_estadual" />
        <ExcelColumn label="Razão Social" value="razao_social" />
        <ExcelColumn label="Nome Fantasia" value="NOME FANTASIA" />
        <ExcelColumn label="CEP" value="cep" />
        <ExcelColumn label="Rua" value="rua" />
        <ExcelColumn label="Número" value="numero" />
        <ExcelColumn label="Complemento" value="complemento" />
        <ExcelColumn label="Bairro" value="bairro" />
        <ExcelColumn label="Estado" value="ESTADO" />
        <ExcelColumn label="Cidade" value="CIDADE" />
        <ExcelColumn label="E-mail" value="email" />
        <ExcelColumn label="Fone 1" value="fone_1" />
        <ExcelColumn label="Fone 2" value="fone_2" />
        <ExcelColumn label="Fone 3" value="fone_3" />
        <ExcelColumn label="Fone 4" value="fone_4" />
        <ExcelColumn label="Data de Cadastro" value="DAT CADASTRO" />
        <ExcelColumn label="Status" value="STATUS" />
        <ExcelColumn label="Observação" value="observacao" />




        
      </ExcelSheet>

    </ExcelFile>
  );
}
