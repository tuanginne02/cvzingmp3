import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';


function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map }
      </Routes>
    </div>
  );
}

export default App;
