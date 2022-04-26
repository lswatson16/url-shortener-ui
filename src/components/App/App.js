import React, { Component } from 'react';
import './App.css';
import { getUrls, postURL } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
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
        this.setState({ urls: urlData.urls })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'Oops... The team is wroking on resolving the issue' })
      })
  }

  shortenNewURL = (newCard) => {
    this.setState({ urls: [...this.state.urls, newCard] })
    console.log(this.state.urls)
    postURL(newCard)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm shortenNewURL={this.shortenNewURL} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
