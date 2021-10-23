import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import headersConst from "../constants/headers";
import { scrollBottom, usePrevious } from '../lib/helpers';

const headerRows = (headers, setHeaders) => {
  return headers.map((header, i) => {
    return (
      <FormControl
        key={`header-form-control-header-${i}`}
        variant="standard"
        sx={{ m: 1, margin: 1, width: "calc(100% - 16px)", flexDirection: "row", columnGap: 1, flexGrow: 1, justifyContent: "space-between" }}
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
          sx={{ width: "50%" }}
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
          sx={{ width: "50%" }}
          onChange={evt => {
            headers[i] = [headers[i][0], evt.target.value]
            setHeaders([...headers])
          }}
        />
        <IconButton
          onClick={() => setHeaders(headers.filter((item, index) => index !== i))}
          sx={{ borderRadius: 1 }}
          variant="contained"
        >
          <ClearIcon size="medium" />
        </IconButton>
      </FormControl>
    );
  });
}

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
      <Button sx={{ marginTop: 1 }} onClick={() => { setHeaders([...headers, ["", ""]]); scrollBottom("headers")}}>Add Header</Button>
    </div>
  );
}

export default Headers;
