import TextareaAutosize from '@mui/material/TextareaAutosize';

const Response = ({ response }) => {
  return <TextareaAutosize
    color="primary"
    aria-label="empty textarea"
    placeholder="Empty"
    maxRows={15}
    value={response}
    style={{ width: "95%", resize: "none", marginTop: 24 }}
    sx={{ spellcheck: false, readonly: true }}
  />
}

export default Response
