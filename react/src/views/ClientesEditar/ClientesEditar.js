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

const ClientesEditar = () => {
  const classes = useStyles();

  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCartoes = () => {
      if (mounted) {
        const dados =
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
          }
        }
        setCliente(dados);
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
      title="Editar Cliente"
    >
      <Header />
      {cliente && (
        <Results
          className={classes.results}
          customer={cliente}
        />
      )}
    </Page>
  );
};

export default ClientesEditar;
