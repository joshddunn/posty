import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { scrollBottom, usePrevious } from '../lib/helpers';

const bodyRows = (body, setBody) => {
  return body.map((b, i) => {
    return (
      <FormControl
        key={`header-form-control-header-${i}`}
        variant="standard"
        sx={{ m: 1, margin: 1, width: "calc(100% - 16px)", flexDirection: "row", columnGap: 1, flexGrow: 1, justifyContent: "space-between"}}
      >
        <TextField
          id="standard-basic"
          label="Field"
          variant="standard"
          value={b[0]}
          sx={{ width: "50%" }}
          onChange={evt => {
            body[i] = [evt.target.value || "", body[i][1]]
            setBody([...body])
          }}
        />
        <TextField
          id="standard-basic"
          label="Value"
          variant="standard"
          value={b[1]}
          sx={{ width: "50%" }}
          onChange={evt => {
            body[i] = [body[i][0], evt.target.value]
            setBody([...body])
          }}
        />
        <IconButton
          onClick={() => setBody(body.filter((item, index) => index !== i ))}
          sx={{ borderRadius: 1 }}
          color="error"
        >
          <ClearIcon />
        </IconButton>
      </FormControl>
    );
  });
}

const Body = ({ body, setBody }) => {

  const prevBody = usePrevious(body);
  useEffect(
    () => {
      if (body && prevBody && body.length > prevBody.length) {
        scrollBottom("body")
      }
    },
    [body, prevBody]
  );

  return (
    <div id="body" className="body">
      {bodyRows(body, setBody)}
      <Button sx={{ marginTop: 1 }} onClick={() => { setBody([...body, ["", ""]]); scrollBottom("body")}}>Add Field</Button>
    </div>
  );
}

export default Body;
