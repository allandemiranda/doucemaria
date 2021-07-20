/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  CardActions,
  Button
} from '@material-ui/core';

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
  const { customer, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...customer
  });

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardContent>
          <Grid
            className={classes.container}
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleFieldChange}
                value={formState.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                onChange={handleFieldChange}
                value={formState.nome}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefone"
                name="telefone"
                onChange={handleFieldChange}
                value={formState.telefone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Rua"
                name="rua"
                onChange={handleFieldChange}
                value={formState.rua}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nº"
                name="numero"
                onChange={handleFieldChange}
                value={formState.numero}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Bairro"
                name="bairro"
                onChange={handleFieldChange}
                value={formState.bairro}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="CEP"
                name="cep"
                onChange={handleFieldChange}
                value={formState.cep}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Complemento"
                name="complemento"
                onChange={handleFieldChange}
                value={formState.complemento}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
          >
            Sair
          </Button>
          <Button
            className={classes.saveButton}
            variant="contained"
          >
            Criar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Results.displayName = 'Results';

Results.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.any
};

export default Results;
