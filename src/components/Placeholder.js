import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Popup from '../components/Popup';
import store from '../store';
class Placeholder extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      data : [],
    }
  }
  popUp =(title,image) =>{
    store.dispatch({
         type:"GET_DATA",
         title:title,
         url:image,
         display:true
       })
  }
  componentWillMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
      .then((result) => {
        this.setState({ 
          data: result.data 
        });
    })
  }
  render() {
  	console.log(this.state.data);
    return (
      <div className="row">
      {
      	this.state.data.map((images)=>{
      		return <div onClick={() => this.popUp(images.title,images.url)} key={images.id} alt={images.title} className="column"><img src={images.thumbnailUrl} style={{width: '100%'}}></img></div>
      	})
      }
      	
      </div>
    );
  }
}

export default Placeholder;
