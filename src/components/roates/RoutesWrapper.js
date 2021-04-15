import {Switch, Route, Redirect} from 'react-router-dom';
import {Films} from "../StarWars/Films/Films";
import {Peoples} from "../StarWars/Peoples/Peoples";
import {Planets} from "../StarWars/Planets/Planets";
import {Starships} from "../StarWars/Starships/Starships";
import {Film} from "../StarWars/Films/Film";
import {People} from "../StarWars/Peoples/People";
import {Planet} from "../StarWars/Planets/Planet";
import {Starship} from "../StarWars/Starships/Starship";
import '../../App.css'


const Main = () => <div className="main">Star Wars</div>;




export const RoutesWrapper = () => (
  <Switch >
    <Route exact path='/' component={Main} />
    <Route exact path='/films' component={Films} />
    <Route path='/films/:id' component={Film} />
    <Route exact path='/people' component={Peoples} />
    <Route path='/people/:id' component={People} />
    <Route exact path='/planets' component={Planets} />
    <Route path='/planets/:id' component={Planet} />
    <Route exact path='/starships' component={Starships} />
    <Route path='/starships/:id' component={Starship} />
    <Route component={() => <div>404</div>} />
  </Switch>
);
