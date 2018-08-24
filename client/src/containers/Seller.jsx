import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ProductsDisplay from '../components/ProductsDisplay.jsx';
import axios from 'axios';
const mapStateToProps = store => ({
  productList: store.products.productList
})

const mapDispatchToProps = dispatch => ({
  getInventory: () => dispatch(actions.getAllInventory())
});

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

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

  componentDidMount() {
    this.props.getInventory()
  }

  render() {
    console.log('product list ====> ', this.props.productList)
    return(
      <div className="innerbox">
    <h1>Add An Item</h1> 
    <br /> <br />
    <ul>
  <li>
    <label for="expiration">Item Name: </label>
    <input id="expiration"/>
  </li>

<li>
  <label for="zip2">Description: </label>
  <input id="zip" />
</li>
<li>
  <label for="zipca2">Quantity: </label>
  <input id="zipca"/>
</li>
<li>
  <label for="tel2">Category: </label>
  <input id="tel"/>
</li>
<li>
  <label for="cc">Credit Card Number</label>
  <input id="cc"/>
</li>
</ul>
  <input type="file" onChange={this.fileSelectedHander}/>>
        <button onClick={this.fileUploadHandler}>Submit</button>
      </div>
    )
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
