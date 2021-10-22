import './App.css';

import React, { useState } from 'react';

import TopBar from './components/TopBar';
import Tabs from './components/Tabs';

const App = () => {
  const [url, setUrl] = useState("https://google.com");
  const [type, setType] = useState('GET');
  const [response, setResponse] = useState();
  const [value, setValue] = React.useState('1');

  return (
    <div className="App">
      <TopBar
        url={url}
        setUrl={setUrl}
        type={type}
        setType={setType}
        setResponse={setResponse}
        setValue={setValue}
      />
      <Tabs
        response={response}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
