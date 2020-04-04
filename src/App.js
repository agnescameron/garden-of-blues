import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    console.log('mounted!')
  }

  render() {
    return (

        <Helmet>
          <title>recipe friendship garden</title>
          <meta name="description" content="nancy and semine's diaspora blues" />
          <meta name="keywords" content="recipes, honduras, malaysia" />
        </Helmet>

    );
  }
}
export default App;
