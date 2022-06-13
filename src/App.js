import React, { useEffect, useState } from "react";
import SelectCard from "./components/SelectCard";
import UserCard from "./components/UserCard";
import useStyles from "./style";

import { useGetUsersQuery } from "./service/userListApi";
import { Box, CircularProgress, Grid } from "@material-ui/core";

const App = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetUsersQuery(page);
  const pages = [1, 2];

  const [currentCard, setCurrentCard] = useState(0);
  const [clickedCard, setClickedCard] = useState(0);
  const [showUser, setShowUser] = useState(false);
  const [flagCard, setFlagCard] = useState(false);

  useEffect(() => {
    if (currentCard == clickedCard) {
      setCurrentCard(0);
      setShowUser(false);
    } else {
      setCurrentCard(clickedCard);
      setShowUser(true);
    }
  }, [flagCard]);

  useEffect(() => {
    setCurrentCard(0);
    setShowUser(false);
    setClickedCard(0);
    setFlagCard(false);
  }, [page]);

  if (isFetching) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Grid container>
        <Grid className={classes.navbar}>
          <h1 className={classes.brandText}>Users List</h1>
        </Grid>

        <Grid className={classes.mainSec}>
          <Grid className={classes.mainCard}>
            {showUser == true && currentCard > 0 ? (
              <UserCard currentCard={currentCard} />
            ) : (
              <SelectCard />
            )}
          </Grid>
          <Grid container className={classes.cardsbtns} spacing={3}>
            {data?.data.map((user) => (
              <Grid key={user.id} item xs={4} className={classes.cardNum}>
                <button
                  className={classes.cardbtn}
                  value={user.id}
                  onClick={(e) => {
                    setClickedCard(e.target.value);
                    setFlagCard(!flagCard);
                  }}
                >
                  {user.id}
                </button>
              </Grid>
            ))}
          </Grid>
          <Grid className={classes.pagesbtns}>
            {pages.map((item, key) => (
              <button
                className={classes.pagebtn}
                key={key}
                value={item}
                onClick={(e) => setPage(e.target.value)}
              >
                {item}
              </button>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
