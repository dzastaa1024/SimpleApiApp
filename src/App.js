import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    data: [],
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then(response => this.setState({data: response,}))

  }

  render() {
    console.log(this.state.data)
      return (
        <>
        {this.state.data.length ? <div>
          <ul>
            {this.state.data.map(it => {
              return (
                <li key={it.id}>
                  <p>Name : {it.name}</p>
                  <p>E-mail: {it.email}</p>
                </li>
              )
            })}
          </ul>
       
        </div>: <div>Loading..</div>}
        </>

      )
  }
}

export default App;



