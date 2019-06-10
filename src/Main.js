import React from 'react';
import './scss/main.scss';
import CurveOne from './images/curve-1.svg';
import Navigator from './components/navigator/Navigator';
import Coffee from './pages/coffee/Coffee';
import Tea from './pages/tea/Tea';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className="Main">
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coffee" component={Coffee} />
          <Route exact path="/tea" component={Tea} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div className="Home">
      <header className="header">
        <div className="header__slogan">
          <div className="header__slogan--content">
            Start your day with a classic brewed coffee.
          </div>
          <a href="/menu" className="header__slogan--link">See our menu</a>
        </div>
        <div className="header__illustration" style={{backgroundImage: `url(${CurveOne})`}}></div>
      </header>
      <div className="wrapper">
          <div className="wrapper__container">
              <h1>Home</h1>
              <p>Ohhh shet it's home!</p>
          </div>
      </div>
    </div>
  )
}

export default Main;
