import React from 'react';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Response = ({ response, ...props }) => {

  return (
    <div id="response" className="response">
      <Accordion sx={{ textAlign: "left" }}>
        <AccordionSummary
          disabled={!response.status}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Additional Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Status: {response.status}<br />
            <br />
            {response.headers.map(header => {
              return (
                <>
                  {header[0]}: {header[1]}<br />
                </>
              )
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {response.type === "Blob" ?
        <Button
          variant="contained"
          onClick={() => {
            const link = document.createElement("a");
            const url = window.URL.createObjectURL(response.data);
            link.href = url
            link.download = response.filename;
            link.click();
            link.remove();
          }}
          sx={{ margin: 1 }}
        >
          Save {response.filename}
        </Button> :
        <>
          <Accordion>
            <AccordionSummary
              disabled={!response.data}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Response</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <TextareaAutosize
                  color="primary"
                  aria-label="empty textarea"
                  placeholder="Empty"
                  spellCheck="false"
                  readOnly={true}
                  maxRows={15}
                  value={response.data}
                  style={{ width: "95%", resize: "none", marginTop: 4 }}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>}
    </div>
  )
}

export default Response
