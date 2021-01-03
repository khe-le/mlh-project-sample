import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ResourcesList } from "./ResourcesList";
import { AddResource } from "./AddResource";

export function ResourcesDiv(props) {
  const classes = useStyles(props);
  const [addEnabled, setEnabled] = useState(false);

  const toggleAdd = () => {
    setEnabled(!addEnabled);
  };

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="row">
        {/* Inactive question tab */}
        <div className={classes.questionsTab}>
          <Typography className={classes.tabLabel}>Group Questions </Typography>
          <div className={classes.upperTriangle}>
            <div className={classes.innerTriangleRight}></div>
          </div>
        </div>
        {/* Resources tab */}
        <div className={classes.resourcesTab}>
          <Typography className={classes.tabLabel}>Resources</Typography>
          <div className={classes.centerTabOuterTriangleLeft}>
            <div className={classes.innerTriangleLeft}></div>
          </div>
          <div className={classes.centerTabOuterTriangleRight}>
            <div className={classes.innerTriangleRight}></div>
          </div>
        </div>
      </Box>
      {!addEnabled ? ( // Display published resources
        <div>
          <div className={classes.resourcesContainer}>
            <div className={classes.resourcesList}>
              <ResourcesList
                resources={props.resources}
                onDelete={props.onDelete}
                clientOnly={props.clientOnly}
              ></ResourcesList>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.addButton}
              onClick={toggleAdd}
            >
              Add New Resource
            </Button>
          </div>
        </div>
      ) : (
        // Switch to new tab to add resources
        <div>
          <AddResource toggleAdd={toggleAdd} />
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "55em",
    textAlign: "left",
    width: "100%",
    minWidth: 450,
    color: theme.palette.secondary.main,
    fontSize: "0.75rem",
  },
  tabLabel: {
    zIndex: 100,
  },
  resourcesList: (props) => ({
    maxWidth: "100%",
    maxHeight: "35em",
  }),
  upperTriangle: {
    position: "absolute",
    left: 134,
    top: 1,
    width: 0,
    height: 0,
    marginTop: 1,
    borderBottom: "29px solid black",
    borderRight: "14.5px solid transparent",
    borderLeft: "14.5px solid transparent",
  },
  innerTriangleRight: {
    position: "relative",
    width: 1,
    height: 0,
    zIndex: 2,
    borderBottom: `35px solid ${theme.palette.background.default}`,
    borderRight: `17.5px solid transparent`,
    borderLeft: `17.5px solid transparent`,
    right: 18.25,
    top: 0,
  },
  innerTriangleLeft: {
    position: "relative",
    width: 1,
    height: 0,
    zIndex: 2,
    borderBottom: `35px solid ${theme.palette.background.default}`,
    borderRight: `17.5px solid transparent`,
    borderLeft: `17.5px solid transparent`,
    right: 16,
    top: 0,
  },
  centerTabOuterTriangleLeft: {
    position: "absolute",
    left: 165,
    top: 1,
    width: 0,
    height: 0,
    marginTop: 1,
    borderBottom: "29px solid black",
    borderRight: "14.5px solid transparent",
    borderLeft: "14px solid transparent",
  },
  centerTabOuterTriangleRight: {
    position: "absolute",
    left: 256,
    top: 1,
    width: 0,
    height: 0,
    marginTop: 1,
    borderBottom: "29px solid black",
    borderRight: "14.5px solid transparent",
    borderLeft: "14.5px solid transparent",
  },
  questionsTab: {
    zIndex: 0,
    paddingTop: 5,
    textAlign: "center",
    height: 35,
    display: "flex",
    width: 150,
    top: 1,
    flexDirection: "row",
    backgroundColor: theme.palette.background.default,
    paddingLeft: 10,
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  resourcesTab: {
    zIndex: 10,
    paddingTop: 5,
    textAlign: "center",
    height: 31,
    display: "flex",
    top: 1,
    flexDirection: "row",
    backgroundColor: theme.palette.background.default,
    paddingLeft: 10,
    paddingRight: 10,
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 28,
  },
  resourcesContainer: {
    zIndex: 1,
    position: "relative",
    top: -5,
    display: "flex",
    flexDirection: "column",
    height: "30em",
    maxWidth: "80em",
    textAlign: "left",
    paddingTop: "10%",
    paddingRight: "4%",
    paddingLeft: "4%",
    paddingBottom: "3%",
    border: "1px solid black",
    borderBottom: "1px solid transparent",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "auto",
  },
  buttonContainer: {
    marginTop: "-5px",
    padding: "35px 0 35px",
    border: "1px solid black",
    borderTop: "1px solid #ccc",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButton: {
    display: "block",
    margin: "0 auto",
  },
}));
