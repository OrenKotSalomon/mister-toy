
import './assets/css/main.css'

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';


import { store } from './store/store.js';
import { About } from './views/about';
import { Home } from './views/home';
import { AppHeader } from './cmps/app-header';
import { Toy } from './views/toy-index';
import { ToyEdit } from './views/toy-edit';
import { ToyDetails } from './views/toy-detail';
import { Dashboard } from './views/Dashboard';
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
              <Route element={<Toy />} path="/toy" >
                <Route element={<ToyEdit />} path='/toy/edit' />
                <Route element={<ToyEdit />} path='/toy/edit/:toyId' />
              </Route>
              <Route element={<ToyDetails />} path="/toy/details/:toyId" />

              <Route element={<Dashboard />} path="/dashboard" />



            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </Provider>
  )
}

export default App;
