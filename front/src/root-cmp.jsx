import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';


import { store } from './store/store.js';
import { About } from './views/about';
import { Home } from './views/home';
import { AppHeader } from './cmps/app-header';
import { Toy } from './views/toy-index';
function App() {

  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <AppHeader />
          <main>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Toy />} path="/toy" />

            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </Provider>
  )
}

export default App;
