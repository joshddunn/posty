import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import headersConst from "../constants/headers";

const headerRows = (headers, setHeaders) => {
  return headers.map((header, i) => {
    return (
      <FormControl
        key={`header-form-control-header-${i}`}
        variant="standard"
        sx={{ m: 1, marginLeft: 0, marginRight: 0, width: "100%", minWidth: 120, flexDirection: "row", columnGap: "10px", flexGrow: 1}}
      >
        <Autocomplete
          disablePortal
          variant="standard"
          freeSolo
          value={header[0]}
          options={headersConst}
          onChange={(evt, newValue) => {
            headers[i] = [(newValue && newValue.label) || "", headers[i][1]]
            setHeaders([...headers])
          }}
          sx={{ width: 300 }}
          renderInput={(params) => {
            return <TextField
              {...params}
              label="Header"
              variant="standard"
              onChange={evt => {
                headers[i] = [evt.target.value || "", headers[i][1]]
                setHeaders([...headers])
              }}
            />
          }}
        />
        <TextField
          label="Value"
          variant="standard"
          value={header[1]}
          onChange={evt => {
            headers[i] = [headers[i][0], evt.target.value]
            setHeaders([...headers])
          }}
          sx={{ width: 300 }}
        />
        <Button
          onClick={() => setHeaders(headers.filter((item, index) => index !== i))}
          color="error"
        >
          <ClearIcon />
        </Button>
      </FormControl>
    );
  });
}

const scrollBottom = id => {
  let e = document.getElementById(id);
  e.scrollTop = 1000000;
}

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Headers = ({ headers, setHeaders }) => {

  const prevHeaders = usePrevious(headers);
  useEffect(
    () => {
      if (headers && prevHeaders && headers.length > prevHeaders.length) {
        scrollBottom("headers")
      }
    },
    [headers, prevHeaders]
  );

  return (
    <div id="headers" className="headers">
      {headerRows(headers, setHeaders)}
      <Button sx={{ marginTop: 2 }} onClick={() => { setHeaders([...headers, ["", ""]]); scrollBottom("headers")}}>Add Header</Button>
    </div>
  );
}

export default Headers;
