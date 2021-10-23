import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import { scrollBottom, usePrevious } from '../lib/helpers';

const bodyRows = (body, setBody) => {
  return body.map((b, i) => {
    return (
      <FormControl
        key={`header-form-control-header-${i}`}
        variant="standard"
        sx={{ m: 1, marginLeft: 0, marginRight: 0, width: "100%", minWidth: 120, flexDirection: "row", columnGap: "10px", flexGrow: 1}}
      >
        <TextField
          id="standard-basic"
          label="Field"
          variant="standard"
          value={b[0]}
          onChange={evt => {
            body[i] = [evt.target.value || "", body[i][1]]
            setBody([...body])
          }}
          sx={{ width: 350 }}
        />
        <TextField
          id="standard-basic"
          label="Value"
          variant="standard"
          value={b[1]}
          onChange={evt => {
            body[i] = [body[i][0], evt.target.value]
            setBody([...body])
          }}
          sx={{ width: 350 }}
        />
        <Button
          onClick={() => setBody(body.filter((item, index) => index !== i ))}
          color="error"
        >
          <ClearIcon />
        </Button>
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
      <Button sx={{ marginTop: 2 }} onClick={() => { setBody([...body, ["", ""]]); scrollBottom("body")}}>Add Field</Button>
    </div>
  );
}

export default Body;
