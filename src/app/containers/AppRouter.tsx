import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home.component';
import PokemonDetail from '../pages/pokemonDetails/PokemonDetail';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pokemon/:pokemonnumber" component={PokemonDetail} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
