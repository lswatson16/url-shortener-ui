import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
// import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
      .then(urlData => {
        this.setState({ urls: urlData })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'Oops... The team is wroking on resolving the issue' })
      })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        {/* <UrlContainer urls={this.state.urls}/> */}
      </main>
    );
  }
}

export default App;
