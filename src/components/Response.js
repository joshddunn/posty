import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const Response = ({ response }) => {
  return response.type === "Blob" ?
     <Button
      variant="contained"
      onClick={() => {
        const link = document.createElement("a");
        const url = window.URL.createObjectURL(response.parsedResponse);
        link.href = url
        link.download = response.filename;
        link.click();
        link.remove();
      }}
      sx={{ margin: 1 }}
    >
      Save {response.filename}
    </Button> :
    <TextareaAutosize
    color="primary"
    aria-label="empty textarea"
    placeholder="Empty"
    spellCheck="false"
    readOnly={true}
    maxRows={15}
    value={response.parsedResponse}
    style={{ width: "95%", resize: "none", marginTop: 24 }}
  />
}

export default Response
