import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router, Link, Switch, Route
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import ProductsDisplay from './components/ProductsDisplay';

class App extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHander = event => {
    console.log(event.target.files[0], "event")
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  fileUploadHandler = () => {
    console.log(this.state.selectedFile)
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('https://us-central1-hatte-latte.cloudfunctions.net/uploadFile', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%') // given by http xml behind the scnes
      }
    })
      .then( res =>{
        console.log(res);
      }) 
  }
  render() {
    return (
      <Router> 
      <div className="App">

        <input type="file" onChange={this.fileSelectedHander}/>>
        <button onClick={this.fileUploadHandler}>Upload</button>
        <header className="App-header">
          <img src="https://png.pngtree.com/element_origin_min_pic/17/08/27/76d8d7c08330161cd2bf84e3f163ae5c.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Hatte Latte Shop</h1>
        </header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={ProductsDisplay} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
