import TextareaAutosize from '@mui/material/TextareaAutosize';

const Response = ({ response }) => {
  return <TextareaAutosize
    color="primary"
    aria-label="empty textarea"
    placeholder="Empty"
    spellcheck="false"
    readonly={true}
    maxRows={15}
    value={response}
    style={{ width: "95%", resize: "none", marginTop: 24 }}
  />
}

export default Response
