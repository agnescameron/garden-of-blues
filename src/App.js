import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeProvider from './RecipeProvider';
import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <RecipeProvider>
        <Helmet>
          <title>recipe friendship garden</title>
          <meta name="description" content="nancy and semine's diaspora blues" />
          <meta name="keywords" content="recipes, honduras, malaysia" />
        </Helmet>

      </RecipeProvider>
    );
  }
}
export default App;
