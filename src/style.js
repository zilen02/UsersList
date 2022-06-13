import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  navbar: {
    width: "100%",
    background: "#16B5EA",
    height: "3.6rem",
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  brandText: {
    fontSize: "1.4rem",
    color: "#ffffff",
    marginLeft: "1.5rem",
    letterSpacing: 3.5,
    textTransform: "uppercase",
    fontWeight: "400",
    ["@media (max-width:700px)"]: {
      fontSize: "1.2rem",
      marginLeft: "1.2rem",
    },
  },
  mainSec: {
    padding: "4rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    ["@media (max-width:700px)"]: {
      padding: "1.5rem",
    },
  },
  cardsbtns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    ["@media (max-width:700px)"]: {
      marginBottom: "1.5rem",
    },
  },
  cardNum: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardbtn: {
    padding: "3rem",
    fontSize: "2rem",
    border: "none",
    borderRadius: "1rem",
    color: "#2e2e2e",
    backgroundColor: "#eeeeee",
    "&:hover": {
      background: "#16B5EA",
      color: "#ffffff",
    },
    ["@media (max-width:600px)"]: {
      padding: "2rem",
      fontSize: "1.6rem",
    },
  },
  pagebtn: {
    padding: "0.5rem",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "0.2rem",
    margin: "1rem",
    color: "#2e2e2e",
    backgroundColor: "#eeeeee",
    "&:hover": {
      background: "#16B5EA",
      color: "#ffffff",
    },
    "&:focus": {
      background: "#16B5EA",
      color: "#ffffff",
    },
  },
}));
