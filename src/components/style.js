import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    marginTop: "10%",
    marginBottom: "5%",
    backgroundColor: "#cad5e6"
  },
  header: {
    display: "flex",
    justifyContent: "Center"
    
  },
  cardTitle: {
    justifyContent: "center",
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    // objectFit: "contain",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardDescription: {
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    // textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    // wordBreak: "break-all",
    textOverflow: "ellipsis",
  },
}));