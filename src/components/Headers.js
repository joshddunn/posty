import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import headers from "../constants/headers";

const Headers = () => {
  return (
    <FormControl variant="standard" sx={{ m: 1, marginLeft: 0, marginRight: 0, width: "100%", minWidth: 120, flexDirection: "row", columnGap: "10px", flexGrow: 1}}>
      <Autocomplete
        disablePortal
        variant="standard"
        id="combo-box-demo"
        freeSolo
        options={headers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Header" variant="standard" />}
      />
      <TextField
        id="standard-basic"
        label="Value"
        variant="standard"
        value={""}
        onChange={(evt) => {}}
        sx={{ width: 300 }}
      />
      <Button
        onClick={() => {}}
        color="error"
      >
        <ClearIcon />
      </Button>
    </FormControl>
  );
}

export default Headers;
