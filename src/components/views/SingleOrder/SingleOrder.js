import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styles from './SingleOrder.scss';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
    padding: 2,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const menu = [
  { id: 1, dish: 'Pizza', options: ['Olives', 'Red peppers', 'Mushrooms', 'Fresh basil', 'Salami'] },
  { id: 2, dish: 'Coffee', options: ['Latte', 'Cappucino', 'Espresso', 'Macchiato', 'Americana'] },
  { id: 3, dish: 'Salad', options: ['Cucumber', 'Tomatoes', 'Olives', 'Feta cheese', 'Fresh herbs'] },
];

const NewOrder = () => {
  const classes = useStyles;

  const [values, setValues] = useState({
    table: '',
    order: [],
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <Grid container spacing={ 4 }>
      <Grid item lg={ 8 } md={ 12 } xl={ 9 } xs={ 12 }>
        <Card className={classes.root}>
          <CardHeader 
            title = 'Single order'/>
          <CardContent className={ classes.content }>
            <div className={ classes.inner }>
              <form autoComplete='off' noValidate className={ classes.form }>
                <Grid container spacing={ 2 } alignItems='center'>
                  <Grid item md={ 4 } xs={ 12 }>
                    <TextField
                      label='Table Number'
                      name='table'
                      onChange={ handleChange }
                      required
                      select
                      value={ values.table }
                      variant='outlined'
                      fullWidth
                    >
                      { [1, 2, 3].map(option => (
                        <option key={ option } value={ option }>
                          { option }
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Table>
                    <TableBody>
                      { menu.map(row => (
                        <TableRow 
                          key={ row.id } 
                          className={ styles.tableRow }>
                          <TableCell>
                            <Typography 
                              variant="h6"
                              color="primary">
                              { row.dish }
                            </Typography>
                          </TableCell>
                          { row.options.map(option => (
                            <TableCell
                              key={ option }>{ option }
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </form>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewOrder;