import {Switch, Route, Redirect} from 'react-router-dom';
import {Films} from "../StarWars/Films/Films";
import {People} from "../StarWars/People/People";
import {Planets} from "../StarWars/Planets/Planets";
import {Starships} from "../StarWars/Starshios/Starships";
import {Film} from "../StarWars/Films/Film";

const Main = () => <div>Главная</div>;




export const RoutesWrapper = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/films' component={Films} />
    <Route path='/films/:id' component={Film} />
    <Route path='/people' component={People} />
    <Route path='/planets' component={Planets} />
    <Route path='/starships' component={Starships} />
    <Route component={() => <div>404</div>} />
  </Switch>
);
