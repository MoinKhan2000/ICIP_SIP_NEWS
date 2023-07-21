
import './App.css';

import React, {  useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
const App = (props) => {
  const pageSize=15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <LoadingBar color='#f11946' height={3}
          progress={progress}
        />
        <Routes><Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" title="general" />} />
        </Routes>
        <Routes><Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" title="business" />} />
        </Routes>
        <Routes><Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" title="entertainment" />} />
        </Routes>
        <Routes><Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" title="general" />} />
        </Routes>
        <Routes><Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" title="health" />} />
        </Routes>
        <Routes><Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" title="science" />} />
        </Routes>
        <Routes><Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" title="sports" />} />
        </Routes>
        <Routes><Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" title="technology" />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App