import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Waiter.scss';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TableBody } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const Waiter = () => (
  <div className={ styles.component }>
<Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography 
              variant="h6"
              color="primary">
                Table
            </Typography>
          </TableCell>
          <TableCell>
          <Typography 
              variant="h6"
              color="primary">
                Status
            </Typography>
          </TableCell>
          <TableCell>
          <Typography 
              variant="h6"
              color="primary">
                Order
            </Typography>
          </TableCell>
          <TableCell>
          <Typography 
              variant="h6"
              color="primary">
                Action
          </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              lol
            </TableCell>
            <TableCell>
              example
            </TableCell>
            <TableCell>
              tururur
            </TableCell>          
              <TableCell>
              baduum
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              lol
            </TableCell>
            <TableCell>
              example
            </TableCell>
            <TableCell>
              tururur
            </TableCell>          
              <TableCell>
              baduum
            </TableCell>
          </TableRow>
        </TableBody>
    </Table>
    <Grid 
      className={styles.component}
      container
      direction="row"
      justify="center"
      alignItems="center">
    </Grid>
  </Paper>
  <Button color="primary" component = {Link} to = {`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New Order</Button>
  <Button color="primary" component = {Link} to = {`${process.env.PUBLIC_URL}/waiter/order/123`} activeClassName='active'>Single Order</Button>

  </div>
);


export default Waiter; 
