/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import MaterialTable from 'material-table';
import { CustomerInfo } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const { className, clientes, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <MaterialTable
        columns={[
          { title: 'Nº Cartão', field: 'cartao' },
          { title: 'Nome', field: 'nome' },
          { title: 'Telefone', field: 'telefone' },
          { title: 'Compras', field: 'compras' },
          { title: 'Status', field: 'status' },
          { field: 'adicionar' },
          { field: 'editar' },
        ]}
        data={clientes}
        detailPanel={[
          {
            tooltip: 'Endereço',
            render: (rowData) => {
              return  <CustomerInfo
                className={classes.results}
                endereco={rowData.endereco}
              />
            }
          }
        ]}
        options={{
          rowStyle: (rowData) => {
            if (rowData.status === 'Premiado') {
              return { backgroundColor: '#80c904' };
            }
          },
          exportButton: true
        }}
        title="Lista de Clientes"
      />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  clientes: PropTypes.array.isRequired
};

Results.defaultProps = {
  clientes: []
};

export default Results;
