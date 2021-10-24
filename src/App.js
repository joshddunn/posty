import './App.css';

import React, { useState } from 'react';

import TopBar from './components/TopBar';
import Tabs from './components/Tabs';

const App = () => {
  const [type, setType] = useState('GET');
  const [response, setResponse] = useState({ status: null, data: "", headers: []});
  const [value, setValue] = React.useState('1');
  const [headers, setHeaders] = React.useState([]);
  const [body, setBody] = React.useState([]);

  return (
    <div className="App">
      <TopBar
        type={type}
        setType={setType}
        setResponse={setResponse}
        setValue={setValue}
        headers={headers}
        body={body}
      />
      <Tabs
        response={response}
        value={value}
        setValue={setValue}
        headers={headers}
        setHeaders={setHeaders}
        body={body}
        setBody={setBody}
      />
    </div>
  );
}

export default App;
