import { Theme, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      gap: theme.spacing(0.5),
    },
  });

export default styles;
