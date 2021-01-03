import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import { ResourcesDiv } from "../components/Resources";
import presentation from "../assets/talk.svg";
import { gql } from "@apollo/client";
import { useSubscription } from "@apollo/client";

//GrapphQL Subscription query to get realtime data
const SUBSCRIBE_RESOURCES = gql`
  subscription {
    Resources_Data {
      name
      url
      mediaType
    }
  }
`;

export function ResourcesPageContent(props) {
  const classes = useStyles();
  const { resourcesData } = props;
  let resources = resourcesData;

  return (
    <div className={classes.root}>
      <Box paddingTop={5}>
        <Typography variant="h2" color="secondary" align="left">
          {"Workshop: How To Manage School and Work"}
        </Typography>
        <Typography variant="h5" color="secondary" align="left">
          <em>Host: Jayden Smith</em>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" paddingTop={10}>
        <Box width="70%" display="flex" flexDirection="column" paddingRight={5}>
          {/* Image placeholders - ignore */}
          <div>
            <img
              className={classes.placeholder}
              src={presentation}
              alt="Presentation Slide"
            ></img>
          </div>
          <Grid container className={classes.btnArea}>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.btn}
                disabled
              >
                Ask For Help
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.btn}
                disabled
              >
                Leave Event
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Resources Tab */}
        <Box position="relative" width="450" minWidth="450">
          <ResourcesDiv
            resources={resources}
            clientOnly={false}
            onDelete={() => {}}
          />
        </Box>
      </Box>
    </div>
  );
}

//Run query with apollo useSubscription hook
export default function ResourcesPage() {
  const { loading, error, data } = useSubscription(SUBSCRIBE_RESOURCES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <ResourcesPageContent resourcesData={data.Resources_Data} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "80em",
    height: "100%",
    textAlign: "center",
    padding: 10,
  },
  placeholder: {
    width: 700,
    height: "auto",
  },
  video: {
    padding: 10,
  },
  timeLeft: {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    marginLeft: 20,
    padding: 5,
  },
  btnArea: {
    marginTop: "3rem",
  },
  btn: {
    padding: "8px 50px",
  },
}));
