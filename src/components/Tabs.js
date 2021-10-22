import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Headers from "./Headers";
import Body from "./Body";
import Response from "./Response"

const Tabs = ({value, setValue, response}) => {

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList value={value} onChange={(evt, newValue) => setValue(newValue)} aria-label="tabs">
            <Tab label="Headers" value="1" />
            <Tab label="Body" value="2" />
            <Tab label="Response" value="3" sx={{ id: "response-tab" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Headers />
        </TabPanel>
        <TabPanel value="2">
          <Body />
        </TabPanel>
        <TabPanel value="3">
          <Response response={response} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Tabs;
