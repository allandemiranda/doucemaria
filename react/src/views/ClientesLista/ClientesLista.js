/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
// import axios from 'utils/axios';
import { Page } from 'components';
import { Header, Results } from './components';
import AddBox from '@material-ui/icons/AddBox';
import Edit from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const ClientesLista = () => {
  const classes = useStyles();

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCartoes = () => {
      if (mounted) {
        const dados = [
          {
            _id: 1,
            cartao: 1,
            nome: 'Teste Allan',
            telefone: '84 991151610',
            compras: 5,
            status: 'Faltam 5',
            endereco: {
              _id: 1,
              rua: 'Rua Torres',
              numero: '1010',
              bairro: 'Alecrim',
              cidade: 'Natal',
              uf: 'RN',
              cep: '59032-160',
              complemento: ''
            },
            adicionar: <Tooltip title="Nova Compra"><AddBox /></Tooltip>,
            editar: <Tooltip title="Editar Cliente"><Edit /></Tooltip>
          },
          {
            _id: 2,
            cartao: 2,
            nome: 'Teste Allan 2',
            telefone: '84 991151612',
            compras: 10,
            status: 'Premiado',
            endereco: {
              _id: 2,
              rua: 'Rua TorresA',
              numero: '5',
              bairro: 'Alecrim',
              cidade: 'Natal',
              uf: 'RN',
              cep: '59032-161',
              complemento: 'asd qwe'
            },
            adicionar: <Tooltip title="Nova Compra"><AddBox /></Tooltip>,
            editar: <Tooltip title="Editar Cliente"><Edit /></Tooltip>
          },
          {
            _id: 1,
            cartao: 555,
            nome: 'Teste Allan3',
            telefone: '84 991151610',
            compras: 11,
            status: 'Faltam 9',
            endereco: {
              _id: 1,
              rua: 'Rua Torres',
              numero: '1010',
              bairro: 'Alecrim',
              cidade: 'Natal',
              uf: 'RN',
              cep: '59032-160',
              complemento: ''
            },
            adicionar: <Tooltip title="Nova Compra"><AddBox /></Tooltip>,
            editar: <Tooltip title="Editar Cliente"><Edit /></Tooltip>
          },
        ];
        setClientes(dados);
      }
    };

    fetchCartoes();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Lista de Clientes"
    >
      <Header />
      {clientes && (
        <Results
          className={classes.results}
          clientes={clientes}
        />
      )}
    </Page>
  );
};

export default ClientesLista;
