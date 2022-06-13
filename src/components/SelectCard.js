import { Grid } from '@material-ui/core';
import React from 'react'
import useStyles from "./style";

const SelectCard = () => {
    const classes = useStyles();
  return (
      <>
        <Grid className={classes.selectCard}>SELECT ANY CARD</Grid>
      </>
  )
}

export default SelectCard