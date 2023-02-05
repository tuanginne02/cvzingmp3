import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layouts = DefaultLayout;
          if (route.layout) {
            Layouts = route.layout;
          } else if(route.layout === null) {
            
          }
        })}
      </Routes>
    </div>
  );
}

export default App;
