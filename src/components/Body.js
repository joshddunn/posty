import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

const Body = () => {
  return (
    <FormControl variant="standard" sx={{ m: 1, marginLeft: 0, marginRight: 0, width: "100%", minWidth: 120, flexDirection: "row", columnGap: "10px", flexGrow: 1}}>
      <TextField
        id="standard-basic"
        label="Field"
        variant="standard"
        value={""}
        onChange={(evt) => {}}
        sx={{ width: 350 }}
      />
      <TextField
        id="standard-basic"
        label="Value"
        variant="standard"
        value={""}
        onChange={(evt) => {}}
        sx={{ width: 350 }}
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

export default Body;
