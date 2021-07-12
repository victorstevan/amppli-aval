import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Grid, TextField } from '@material-ui/core';

import { useForm } from "react-hook-form";

import { Context } from '../../state/Store';




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

export const EditForm = ({ handleClose, item }) => {



  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);


  const [state, setState] = useContext(Context);






 
  const onSubmit = (data) => {


    let items = [...state];
    let item1 = {...items[0]}

    
    item1 = data;

    items[0] = item1;

    setState(items)
   


    

  }



  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={modalStyle} className={classes.paper}>
      <div style={{ backgroundColor: '#0e478c', width: '100%', marginTop: '-100px', padding: '0', textAlign: 'center', color: 'white' }}><h1 style={{ fontWeight: 'lighter' }}>Atualizar Cliente</h1></div>
      <Grid style={{ paddingLeft: '50px', paddingRight: '50px', rowGap: '10px', display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={4}>
          <Grid item xs>
            <TextField {...register('id', {value: item.id})} type="number" defaultValue={item.id} name="id" size="small" width={30} label="ID" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField name="cpf/cnpf" {...register('cpf_cnpj')} defaultValue={item.cpf_cnpj} size="small" label="CPF/CNPJ" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('inscricao_estadual')}  defaultValue={item.inscricao_estadual} label="Inscrição Estadual" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('razao_social')} defaultValue={item.razao_social}  label="Razão Social" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid xs item>
            <TextField size="small" fullWidth {...register('NOME FANTASIA')} defaultValue={item['NOME FANTASIA']} label="Nome Fantasia" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs>
            <TextField size="small" {...register('cep')} label="CEP" defaultValue={item.cep}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth {...register('rua')} size="small" defaultValue={item.rua}  label="Rua" variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={2}>
            <TextField size="small" {...register('numero')} label="Número" defaultValue={item.numero}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('complemento')} label="Complemento" defaultValue={item.complemento}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <TextField fullWidth size="small" {...register('bairro')} label="Bairro" defaultValue={item.bairro}   variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth size="small" {...register('CIDADE', {defaultValue: 'Teste'})} label="Estado" defaultValue={item['CIDADE']}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField fullWidth size="small" {...register('ESTADO')} label="Cidade" defaultValue={item['ESTADO']}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>

        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <TextField fullWidth size="small"  {...register('email')} label="E-mail" defaultValue={item.email}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_1')} label="Fone 1" defaultValue={item.fone_1}  variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_2')} label="Fone 2" defaultValue={item.fone_2} variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_3')} label="Fone 3" defaultValue={item.fone_3} variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item xs>
            <TextField size="small" {...register('fone_4')} label="Fone 4" defaultValue={item.fone_4} variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid style={{justifyContent: 'center'}} container spacing={2}>
          <Grid item >
            <TextField size="small"  {...register('DAT CADASTRO')} defaultValue={item['DAT CADASTRO']} label="Data de Cadastro" required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
          <Grid item >
            <TextField size="small" {...register('STATUS')} label="Status" defaultValue={item.STATUS} required variant="outlined" InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <TextField fullWidth {...register('observacao')} label="Observação" variant="outlined" defaultValue={item.observacao} multiline rows={5} InputLabelProps={{
              shrink: true,
            }} />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', columnGap: '40px' }}>
        <Button onClick={handleClose} type="abort" color="primary" variant="contained">
          Voltar
        </Button>
        <Button type="submit" style={{ backgroundColor: '#007F00', color: "white" }} variant="contained">
          Salvar
        </Button>
        <Button style={{ backgroundColor: '#C13437', color: "white" }} variant="contained">
          Cancelar
        </Button>
      </div>

    </form>
  )
}
