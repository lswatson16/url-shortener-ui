import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      urlToShorten: ''
    }
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    const newURLCard = { id: Date.now(), title: this.state.title, long_url: this.state.urlToShorten }
    console.log('new', newURLCard)
    this.props.shortenNewURL(newURLCard)
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
