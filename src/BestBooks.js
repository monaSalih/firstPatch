import axios from 'axios';
import React from 'react';
// import {Card,Row} from 'react-bootstrap'
import {withAuth0} from '@auth0/auth0-react'
import RecipeCard from './RecipeCard';
// import {Card,Button,Row} from 'react-bootstrap'
// import bookResult from './Component/bookResult';
// import BookResult from './BookResult'
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksDetail: [],
      dataRecepiStore:[],
      showRecipe:false,
    }
  }

componentDidMount=async()=>{
const dataRecipe=await axios.get(`${process.env.REACT_APP_SERVER}/getRecipe?ingredient=rice`)

console.log(dataRecipe.data);
this.setState({
  showRecipe:true,
  dataRecepiStore:dataRecipe.data
})
}

addFunction=async(item)=>{
console.log(item,"result item from RecipeCard");
    await axios.post(`${process.env.REACT_APP_SERVER}/addRecipetoDataBase`,item)
}

  render() {

    /* TODO: render user's books in a Carousel */
 const {  isAuthenticated,user } = this.props.auth0;
    return (
     
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.showRecipe && 
        this.state.dataRecepiStore.map((recipreItem,idx)=>{
        return(
         <RecipeCard recipreItem={recipreItem}
         addFunction={this.addFunction}/>
        )
       
        })
       
         }
           
        {/* updateOnrecipe={this.updateOnrecipe} */}
     
      </>
    )
  }
}

export default withAuth0(BestBooks);
