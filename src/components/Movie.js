import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>React Router Movie App</h1>
        <h4>Check out some awesome movies!!</h4>
      </div>
    );
  }
}


export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      title: ["Nightmare on Elm Street", "The Notebook", "Avengers"],
      desc: ["very scary movie", "very romantic movie", "very violent movie"],
      year: [1995, 2010, 2015],
      genre: ["horror", "romance", "action"]
    }
  }

  render() {
    return (
      <div style={movieStyles}>
        <div>
          <h3>{this.state.title[0]}</h3>
          <p>{this.state.desc[0]}</p>
          <p>{this.state.year[0]}</p>
          <p>{this.state.genre[0]}</p>
        </div>

        <div>
          <h3>{this.state.title[1]}</h3>
          <p>{this.state.desc[1]}</p>
          <p>{this.state.year[1]}</p>
          <p>{this.state.genre[1]}</p>
        </div>

        <div>
          <h3>{this.state.title[2]}</h3>
          <p>{this.state.desc[2]}</p>
          <p>{this.state.year[2]}</p>
          <p>{this.state.genre[2]}</p>
        </div>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link> |
        <Link to="movie">Movies</Link> 
      </div>
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home} />
          <Route name="Movie" path="/movie" component={Movie} />
        </div>
      </Router>
    );
  }
}


const movieStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}


ReactDOM.render(<Routes />, document.getElementById('root'));