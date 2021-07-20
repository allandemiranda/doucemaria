import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const CustomerInfo = props => {
  const { endereco, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <Table>
          <TableBody>            
            <TableRow selected>
              <TableCell>Rua</TableCell>
              <TableCell>{endereco.rua}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nº</TableCell>
              <TableCell>{endereco.numero}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Bairro</TableCell>
              <TableCell>{endereco.bairro}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cep</TableCell>
              <TableCell>{endereco.cep}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Complemento</TableCell>
              <TableCell>{endereco.bairro}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>      
    </Card>
  );
};

CustomerInfo.propTypes = {
  className: PropTypes.string,
  endereco: PropTypes.object.isRequired
};

export default CustomerInfo;
