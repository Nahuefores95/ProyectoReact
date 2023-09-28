import { Switch, Route } from 'react-router-dom';

import Footer from "./components/Footer"
import Header from  "./components/Header"

import Main from './pages/Main';
import Register from './pages/Register';
import Account from './pages/Account';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Results from './pages/Results';
import Category from './pages/Category';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/productos" component={Products} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/registro" component={Register} />
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/results" component={Results}/>
        <Route path="/category/:id" component={Category}/>
        <Route exact path="/" component={Main} />

      </Switch>
      <Footer /> 
    </div>
    
  );
}

export default App;
