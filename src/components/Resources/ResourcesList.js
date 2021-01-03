import { Box } from "@material-ui/core";
import React from "react";
import { ResourcesItem } from "./ResourcesItem";

export function ResourcesList(props) {
  const renderItem = (resource, index) => {
    return (
      <ResourcesItem
        name={resource.name}
        url={resource.url}
        mediaType={resource.mediaType}
        id={index}
        clientOnly={props.clientOnly}
        onDelete={props.onDelete}
      />
    );
  };

  return (
    <div>
      <Box overflow="scroll" width="100%" justifyContent="center">
        <Box display="flex" width="100%" flexDirection="column" flexWrap="wrap">
          {props.resources.map((el, index) => renderItem(el, index))}
        </Box>
      </Box>
    </div>
  );
}
