import React from 'react';
import './App.css';
import {Table} from './Table';
import MyForm from './MyForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  insertCharacter = (character) => {
    this.setState({
      data: [...this.state.data, character]
    })
  }

  removeCharacter = (index) => {
    const newCharacters = this.state.data.filter((character, i) => {
      return i !== index;
    })
    this.setState({data: newCharacters})
  }

  render() {

    return (
      <div>
        <Table characterData={this.state.data} removeCharacter={this.removeCharacter}  />
        <MyForm insertCharacter={this.insertCharacter} />
      </div>
    )
  }
}

export default App;
