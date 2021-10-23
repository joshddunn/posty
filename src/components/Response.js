import TextareaAutosize from '@mui/material/TextareaAutosize';

const Response = ({ response }) => {
  return <TextareaAutosize
    aria-label="empty textarea"
    placeholder="Empty"
    maxRows={15}
    value={response}
    style={{ width: "95%", resize: "none", marginTop: 24 }}
    sx= {{ withspellcheck: false }}
  />
}

export default Response;
