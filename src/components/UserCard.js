import React from "react";
import useStyles from "./style";
import { useGetUserDetailsQuery } from "../service/userListApi";
import { CircularProgress, Grid } from "@material-ui/core";

const UserCard = ({ currentCard }) => {
  const classes = useStyles();
  const { data ,isFetching } = useGetUserDetailsQuery(currentCard);
  if(isFetching || currentCard==undefined) {
      return <CircularProgress />
  }
  return (
    <Grid className={classes.avatarCard}>
      <Grid className={classes.imgbox}>
        <img
          className={classes.img}
          src={data?.data?.avatar}
          alt={data?.data?.email}
        />
      </Grid>
      <Grid className={classes.allDetails}>
        <p className={classes.name}>
          {data?.data?.first_name} {data?.data?.last_name}
        </p>
        <p className={classes.email}>{data?.data?.email}</p>
        <p className={classes.email}>User ID : {data?.data?.id}</p>
      </Grid>
    </Grid>
  );
};

export default UserCard;
