import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Dialog, Grid, TextField, IconButton, InputAdornment } from '@material-ui/core';

import { useForm } from "react-hook-form";

import { Context } from '../../state/Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons';



function getModalStyle() {

  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
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
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '20px',
    borderRadius: '16px',
    paddingTop: '120px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 0, 1),

  },
}));

export const DataForm = ({ handleClose }) => {



  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);


  const [state, setState] = useContext(Context);

  const [open, setOpen] = useState(false)


  const [cep, setCep] = useState('');


  const [address, setAddress] = useState(
    {
      rua: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: '',
    }
  );

  const searchLocCode = async (cep)  => {
    const webData = await (await fetch('http://viacep.com.br/ws/'+ cep +'/json/')).json();
    
    const loadedAddress = {
      rua: webData.logradouro,
      complemento: webData.complemento,
      cidade: webData.localidade,
      estado: webData.uf,
      bairro: webData.bairro,

    };

    setAddress(loadedAddress);

    console.log(loadedAddress);


  }

  const onSubmit = (data) => {
    const newItem = data;
    setState([...state, newItem]);
    handleClose()

  }

  const handleInputChange = (e) =>{
    console.log('hey');
  }



  const [content, setContent] = useState({});

  const { register, handleSubmit } = useForm();

  return (
    <form content={content} onSubmit={handleSubmit(onSubmit)} style={modalStyle} className={classes.paper}>
      <div style={{ backgroundColor: '#0e478c', width: '100%', marginTop: '-100px', padding: '0', textAlign: 'center', color: 'white' }}><h1 style={{ fontWeight: 'lighter' }}>CADASTRO CLIENTE</h1></div>
      <Grid style={{ paddingLeft: '50px', paddingRight: '50px', rowGap: '10px', display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={4}>
          <Grid item xs>
            <TextField {...register('id')} type="number" name="id" size="small" width={30} label="ID" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField name="cpf/cnpf" {...register('cpf_cnpj', { required: true })} size="small" label="CPF/CNPJ" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('inscricao_estadual')} label="Inscrição Estadual" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('razao_social', { required: true })} label="Razão Social" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid xs item>
            <TextField size="small" fullWidth {...register('NOME FANTASIA', { required: true })} label="Nome Fantasia" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <TextField size="small" {...register('cep')} onChange={(e) => setCep(e.target.value)} InputProps={{
              endAdornment: <InputAdornment position="start">
                <IconButton onClick={(e) => searchLocCode(cep)}>
                  <FontAwesomeIcon size="xs" icon={faSearch}></FontAwesomeIcon>
                </IconButton>
              </InputAdornment>,
            }} label="CEP" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth {...register('rua', {value: address.estado})} size="small" value={address.rua} label="Rua" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={2}>
            <TextField size="small" {...register('numero')} label="Número" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('complemento',  {value: address.complemento})} value={address.complemento}  label="Complemento" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <TextField fullWidth size="small" {...register('bairro' , {value: address.bairro})} value={address.bairro}  label="Bairro" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth size="small" {...register('ESTADO', {value: address.estado})} value={address.estado}  label="Estado" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth size="small" {...register('CIDADE', {value: address.cidade})} value={address.cidade}  label="Cidade" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>

        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <TextField fullWidth size="small"  {...register('email')} label="E-mail" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_1')} label="Fone 1" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_2')} label="Fone 2" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_3')} label="Fone 3" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_4')} label="Fone 4" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid style={{ justifyContent: 'center' }} container spacing={2}>
          <Grid item >
            <TextField size="small" type="date" {...register('DAT CADASTRO', { required: true })} label="Data de Cadastro" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item >
            <TextField size="small" {...register('STATUS', { required: true })} label="Status" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField fullWidth {...register('observacao')} label="Observação" variant="outlined" multiline rows={5} InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', columnGap: '40px' }}>
        <Button onClick={(e) => window.confirm("Tem certeza?") ? handleClose() : null} type="abort" color="primary" variant="contained">
          Voltar
        </Button>
        <Button type="submit" style={{ backgroundColor: '#007F00', color: "white" }} variant="contained">
          Salvar
        </Button>
        <Button onClick={(e) => window.confirm("Tem certeza?") ? handleClose() : null} style={{ backgroundColor: '#C13437', color: "white" }} variant="contained">
          Cancelar
        </Button>

      </div>
      <Dialog open={open} onClose={handleClose} />


    </form>
  )
}
