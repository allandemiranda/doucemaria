/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button , CardActions } from '@material-ui/core';

import { CustomerEdit } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const customer = {};

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Clientes
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Lista
          </Typography>
        </Grid>
        <Grid item>
          <CardActions className={classes.actions}>
            <Button
              color="primary"
              onClick={handleEditOpen}
              variant="contained"
            >
              Novo Cliente
            </Button>
          </CardActions>
          <CustomerEdit
            customer={customer}
            onClose={handleEditClose}
            open={openEdit}
          />
        </Grid>        
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
