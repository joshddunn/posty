import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import requestTypes from "../constants/requestTypes"

const sendResponse = (type, url, headers, body) => {
  const mappedHeaders = {
    "Cache-Control": "no-cache",
  }

  headers.forEach(header => {
    if (header[0]) {
      mappedHeaders[header[0]] = header[1]
    }
  });

  const mappedBody = {}

  body.forEach(b => {
    if (b[0]) {
      mappedBody[b[0]] = b[1]
    }
  });

  return fetch(url, {
    type: type,
    headers: mappedHeaders,
    body: JSON.stringify(mappedBody)
  }).then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error("Something Broke");
    }
  })
}

const requestMenuItems = () => {
  return requestTypes.map((requestType, i) => {
    return <MenuItem key={`top-bar-menu-item-${i}`} value={requestType}>{requestType}</MenuItem>;
  });
}

const TopBar = ({ type, setType, url, setUrl, setResponse, setValue, headers, body }) => {
  return (
    <header className="App-header">
      <FormControl id="top-bar-form-control" variant="standard" sx={{ m: 1, marginLeft: 0, marginRight: 0, width: "100%", minWidth: 120, flexDirection: "row", columnGap: "10px", flexGrow: 1}}>
        <InputLabel id="demo-simple-select-filled-label">Method</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(evt) => setType(evt.target.value)}
          label="Method"
          sx={{ width: 110 }}
        >
          {requestMenuItems()}
        </Select>
        <TextField
          label="URL"
          variant="standard"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
          sx={{ width: 420 }}
        />
        <Button
          variant="contained"
          onClick={async () => await sendResponse(type, url, headers, body).then(response => { setResponse(response); setValue("3"); })}
        >
          Send
        </Button>
      </FormControl>
    </header>
  );
};

export default TopBar;
