import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeProvider from './RecipeProvider';
import React from 'react';
import { Helmet } from 'react-helmet';

// routes
import Home from './routes/Home';
import Recipes from './routes/Recipes';
import About from './routes/About';

//components
import Nav from './components/Nav';
import RecipePage from './components/RecipePage';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <RecipeProvider>
        <BrowserRouter>
          <Helmet>
            <title>recipe friendship garden</title>
            <meta name="description" content="nancy and semine's diaspora blues" />
            <meta name="keywords" content="recipes, honduras, malaysia" />
          </Helmet>
                <Nav></Nav>
          <Switch>  
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/recipes" component={Recipes} />
            <Route path="/:id" component={RecipePage} />
          </Switch>

        </BrowserRouter>
      </RecipeProvider>
    );
  }
}
export default App;
