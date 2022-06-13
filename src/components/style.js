import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  selectCard: {
    padding: "3rem",
    fontSize: "2rem",
    backgroundColor: "#eeeeee",
    marginBottom: "2rem",
    borderRadius: "1rem",
    color: "#2e2e2e",
    ["@media (max-width:600px)"]: {
      padding: "2rem",
      fontSize: "1.4rem",
    },
  },
  avatarCard: {
    padding: "2rem",
    backgroundColor: "#eeeeee",
    marginBottom: "2rem",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ["@media (max-width:600px)"]: {
      padding: "1rem",
      fontSize: "1.2rem",
      flexDirection: "column",
    },
  },
  imgbox: {
    width: "7rem",
    height: "7rem",
    marginRight: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ["@media (max-width:600px)"]: {
      width: "4rem",
      height: "4rem",
      margin: 0,
      marginBottom: "0.8rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },
  allDetails: {
    ["@media (max-width:600px)"]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  name: {
    fontSize: "2rem",
    marginBottom: "0.6rem",
    ["@media (max-width:600px)"]: {
      fontSize: "1.5rem",
    },
  },
  email: {
    marginBottom: "0.4rem",
    ["@media (max-width:600px)"]: {
      fontSize: "1rem",
    },
  },
}));
