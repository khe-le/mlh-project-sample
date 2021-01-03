import React, { useState } from "react";
import {
  Button,
  Select,
  Box,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

//GraphQL Mutation query for adding a new resource
const ADD_RESOURCE = gql`
  mutation($nameInput: String!, $urlInput: String, $mediaInput: String!) {
    insert_Resources_Data(
      objects: { name: $nameInput, url: $urlInput, mediaType: $mediaInput }
    ) {
      affected_rows
    }
  }
`;

export function AddResource(props) {
  const classes = useStyles(props);
  let [name, setName] = useState("");
  let [url, setUrl] = useState("");
  let [mediaType, setMedia] = useState("");
  // Some states to help with form control - may shorten later
  let [n, setN] = useState(0); // name field
  let [m, setM] = useState(0); // media type field
  let [btnState, setButton] = useState(0); // is 2 if name + media are filled

  //Check if required fields are empty
  const updateName = (e) => {
    setName(e.target.value);
    if (e.target.value !== "" && n === 0) {
      setN(1);
      setButton(btnState + 1);
    } else if (e.target.value === "") {
      setN(0);
      setButton(btnState - 1);
    }
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  const updateMedia = (e) => {
    setMedia(e.target.value);
    if (e.target.value !== "" && m === 0) {
      setM(1);
      setButton(btnState + 1);
    } else if (e.target.value === "") {
      setM(0);
      setButton(btnState - 1);
    }
  };

  //Run query with apollo useMutation hook
  const [addResource] = useMutation(ADD_RESOURCE);

  //Submit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mediaType === "") return;
    addResource({
      variables: { nameInput: name, urlInput: url, mediaInput: mediaType },
    });
    resetInput();
  };

  //Reset input fields
  const resetInput = () => {
    setName("");
    setUrl("");
    setMedia("");
    setN(0);
    setM(0);
    setButton(0);
  };

  return (
    <div>
      <form autoComplete="off" className={classes.formContainer}>
        <Box>
          <p className={classes.label}>
            Name<b className={classes.required}>*</b>
          </p>
          <TextField
            id="name-input"
            variant="outlined"
            color="secondary"
            size="small"
            onChange={updateName}
            value={name}
            multiline
            rowsMax={1}
            className={classes.textfield}
            InputProps={{ style: { height: 30 } }}
          />
        </Box>
        <Box>
          <p className={classes.label}>URL (optional)</p>
          <TextField
            id="url-input"
            variant="outlined"
            type="url"
            color="secondary"
            onChange={updateUrl}
            value={url}
            multiline
            rowsMax={1}
            className={classes.textfield}
            InputProps={{ style: { height: 30 } }}
          />
        </Box>
        <Box>
          <p className={classes.label}>
            Media type (ex. Book, Video, Article)
            <b className={classes.required}>*</b>
          </p>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Media Type</InputLabel>
            <Select
              onChange={updateMedia}
              label="Media type"
              value={mediaType}
              MenuProps={{ style: { padding: 8 } }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Book">Book</MenuItem>
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="Article">Article</MenuItem>
              <MenuItem value="Slides">Slides</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>

      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={classes.addButton}
          disabled={btnState === 2 ? false : true}
        >
          Add New Resource
        </Button>
        <Button
          variant="contained"
          onClick={() => props.toggleAdd()}
          className={classes.backButton}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    marginBottom: theme.spacing(1),
    padding: "2px",
    width: "100%",
  },
  formContainer: {
    zIndex: 1,
    position: "relative",
    top: -5,
    display: "flex",
    flexDirection: "column",
    height: "23em",
    maxWidth: "80em",
    textAlign: "left",
    paddingTop: "5%",
    paddingRight: "7%",
    paddingLeft: "7%",
    paddingBottom: "7%",
    border: "1px solid black",
    borderBottom: "1px solid transparent",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "scroll",
    fontSize: "1rem",
  },
  required: {
    color: "red",
  },
  label: {
    marginBottom: 5,
    marginTop: 25,
  },
  textfield: {
    width: "100%",
  },
  selectOption: {
    padding: 8,
  },
  buttonContainer: {
    marginTop: "-5px",
    padding: "35px 0 5px",
    border: "1px solid black",
    borderTop: "1px solid #ccc",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButton: {
    display: "block",
    margin: "0 auto 5px",
    "&:disabled": {
      color: "#fff",
      background: "#C9B6BE",
    },
  },
  backButton: {
    display: "block",
    margin: "0 auto",
    height: 25,
    lineHeight: 1,
    background: "#7B82BE",
    "&:hover": {
      background: "#676da1",
    },
  },
}));
