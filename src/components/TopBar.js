import React, { useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import requestTypes from '../constants/requestTypes';

import { sendResponse, prettifyResponse } from '../lib/helpers';

const requestMenuItems = () => {
  return requestTypes.map((requestType, i) => {
    return <MenuItem key={`top-bar-menu-item-${i}`} value={requestType}>{requestType}</MenuItem>;
  });
}

const TopBar = ({ type, setType, url, setUrl, setResponse, setValue, headers, body }) => {

  const [loading, setLoading] = useState(false);

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
        <LoadingButton
          variant="contained"
          loading={loading}
          sx={{ width: "10%" }}
          onClick={async () => {
            setLoading(true)
            await sendResponse(type, url, headers, body)
              .then(response => {
                setResponse(prettifyResponse(response))
                setValue("3")
                setLoading(false)
              })
          }}
        >
          Send
        </LoadingButton>
      </FormControl>
    </header>
  );
};

export default TopBar;
