import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  Overview,
  FinancialStats,
  EarningsSegmentation,
  TopReferrals,
  MostProfitableProducts,
  CustomerActivity,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  }
}));

const DashboardAnalytics = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Header />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >  
        <Grid
          item
          lg={12}
          xs={12}
        >
          <MostProfitableProducts />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardAnalytics;
