import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Headers from "./Headers";
import Body from "./Body";
import Response from "./Response"

const Tabs = ({value, setValue, response, headers, setHeaders, body, setBody}) => {

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ margin: 1, width: "calc(100% - 16px)", borderBottom: 1, borderColor: 'divider' }}>
          <TabList value={value} onChange={(evt, newValue) => setValue(newValue)} aria-label="tabs">
            <Tab label="Headers" value="1" />
            <Tab label="Body" value="2" />
            <Tab label="Response" value="3" sx={{ id: "response-tab" }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 1, paddingTop: 0 }}>
          <Headers headers={headers} setHeaders={setHeaders} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 1, paddingTop: 0}}>
          <Body body={body} setBody={setBody} />
        </TabPanel>
        <TabPanel value="3" sx={{ padding: 1, paddingTop: 0 }}>
          <Response response={response} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
