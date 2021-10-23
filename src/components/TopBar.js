import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import requestTypes from '../constants/requestTypes';

import { sendResponse } from '../lib/helpers';

const requestMenuItems = () => {
  return requestTypes.map((requestType, i) => {
    return <MenuItem key={`top-bar-menu-item-${i}`} value={requestType}>{requestType}</MenuItem>;
  });
}

const TopBar = ({ type, setType, url, setUrl, setResponse, setValue, headers, body }) => {
  return (
    <header className="App-header">
      <FormControl
        id="top-bar-form-control"
        variant="standard"
        sx={{ m: 1, margin: 1, width: "calc(100% - 16px)", minWidth: 120, flexDirection: "row", columnGap: 1, flexGrow: 1, justifyContent: "space-between"}}
      >
        <InputLabel id="demo-simple-select-filled-label">Method</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(evt) => setType(evt.target.value)}
          label="Method"
          sx={{ width: "20%" }}
        >
          {requestMenuItems()}
        </Select>
        <TextField
          label="URL"
          variant="standard"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
          sx={{ width: "70%" }}
        />
        <Button
          variant="contained"
          sx={{ width: "10%" }}
          onClick={async () => await sendResponse(type, url, headers, body).then(response => { setResponse(response); setValue("3"); })}
        >
          Send
        </Button>
      </FormControl>
    </header>
  );
};

export default TopBar;
