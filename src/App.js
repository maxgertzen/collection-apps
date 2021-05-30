import './App.css';
import QuotesApp from './Apps/QuotesApp/QuotesApp';
import DiceApp from './Apps/DiceGame/DiceApp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SliderNav from './components/SliderNav/SliderNav';

function App() {
  return (
    <Router>
      <SliderNav links={['/dice-game', '/quotes-generator']} />
      <Switch>
        <Route exact path="/dice-game" component={DiceApp} />
        <Route exact path="/quotes-generator" component={QuotesApp} />
      </Switch>
    </Router>
  );
}

export default App;
