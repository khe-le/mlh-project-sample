import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

export function ResourcesItem(props) {
  const classes = useStyles();
  const { name, url, mediaType, id, clientOnly, onDelete, ...other } = props;

  //GraphQL Mutation query for deleting a resource
  const REMOVE_RESOURCE = gql`
    mutation($targetName: String!) {
      delete_Resources_Data(where: { name: { _eq: $targetName } }) {
        affected_rows
      }
    }
  `;

  //Run query with apollo useMutation hook
  const [removeResourceMutation] = useMutation(REMOVE_RESOURCE);

  const removeResource = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (clientOnly) {
      //Just remove on browser, not in db (for event form)
      onDelete(id);
    } else {
      //Pass variables (target resource) to query
      removeResourceMutation({
        variables: { targetName: name },
        optimisticResponse: true,
      });
    }
  };

  const emptyURL = () => {
    if (url === "") return true;
    else return false;
  };

  return (
    <div className={classes.root}>
      {/* Resource item */}
      <a
        href={emptyURL() ? "javascript:void(0)" : "//" + url}
        target={emptyURL() ? "_self" : "_blank"}
        title={emptyURL() ? "Non-link Resource" : "Resource Link available"}
        className={emptyURL() ? classes.nonLink : classes.link}
      >
        <span
          className={mediaType === "Video" ? classes.videoMedia : classes.media}
        >
          {mediaType}
        </span>
        <span className={emptyURL() ? "" : classes.title}>{": " + name}</span>
      </a>
      {/* Delete button */}
      <div className={classes.deleteIcon} onClick={removeResource}>
        X
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: "#e8e8e8",
    lineHeight: 1.2,
    position: "relative",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "0.9rem",
  },
  nonLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "0.9rem",
    cursor: "default",
  },
  media: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  videoMedia: {
    fontWeight: "bold",
    color: "#7B82BE",
  },
  title: {
    "&:hover": {
      color: "#858585",
    },
  },
  deleteIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "0.8rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
