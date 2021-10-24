import React, { useEffect } from 'react';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import AttachFile from '@mui/icons-material/AttachFile';

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
          value={b.field}
          sx={{ width: "50%" }}
          onChange={evt => {
            body[i].field = evt.target.value || ""
            setBody([...body])
          }}
        />
        <TextField
          id={`body-value-${i}`}
          label={!!b.file ? "File" : "Value"}
          variant="standard"
          value={b.value}
          sx={{ width: "50%" }}
          onChange={evt => {
            body[i].value = evt.target.value || ""
            setBody([...body])
          }}
          disabled={!!b.file}
        />
        <IconButton
          component="label"
          sx={{ borderRadius: 1 }}
          color={b.file ? "success" : "default"}
        >
          <AttachFile />
          <input
            type="file"
            onChange={(evt) => {
              body[i].file = evt.target.files[0]
              body[i].value = body[i].file.name
              setBody([...body])
            }}
            hidden
          />
        </IconButton>
        <IconButton
          onClick={() => setBody(body.filter((item, index) => index !== i ))}
          sx={{ borderRadius: 1 }}
        >
          <Delete />
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
      <Button sx={{ marginTop: 1 }} onClick={() => { setBody([...body, { field: "", value: "", file: null}]); scrollBottom("body")}}>Add Field</Button>
    </div>
  );
}

export default Body;
