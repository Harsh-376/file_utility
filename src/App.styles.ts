import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      gap: theme.spacing(1),
      flexDirection: "column",
    },
    contentContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      gap: theme.spacing(1),
    },
  });

export default styles;
