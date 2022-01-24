import './App.css';
import InfoForm from './components/InfoForm';
import InfoCard from './components/InfoCard';
import {
BrowserRouter,
Switch,
Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={InfoForm}/>
          <Route exact path="/:option/:id">
            <InfoForm/>
            <InfoCard/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
