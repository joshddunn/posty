import React from 'react';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';

const statusColor = (status) => {
  if (status <= 199) {
    return "info"
  } else if (status <= 299) {
    return "success"
  } else if (status <= 399) {
    return "secondary"
  } else if (status <= 499) {
    return "warning"
  } else if (status <= 599) {
    return "error"
  } else {
    return "primary"
  }
}

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
          <Typography component="div">
            Information &nbsp;
            {response.status && <Chip color={statusColor(response.status)} label={`Status ${response.status}`} />} &nbsp;
            {response.duration && <Chip color="info" label={`${response.duration} ms`} />}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <TableContainer component={Paper} sx={{ overflowWrap: "break-word", whiteSpace: "wrap", wordBreak: "break-all" }}>
              <Table sx={{ minWidth: "100%", maxWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ width: "33%" }}>Header</TableCell>
                    <TableCell align="left" sx={{ width: "67%" }}>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {response.headers.map((row, index) => (
                    <TableRow
                      key={`row-${index}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left" sx={{ width: "33%" }}>{row[0]}</TableCell>
                      <TableCell align="left" sx={{ width: "67%" }}>{row[1]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
          Save File
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
                  maxRows={14}
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
