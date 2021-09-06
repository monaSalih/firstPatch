//  getBook=async(event)=>{
// event.preventDefualt();
//  console.log("bookResult function");
//  let bookN=event.target.nameBo.value
// let bookData=await axios.get(`${process.env.REACT_APP_SERVER}/getData?bookName=${bookN}`)
// this.setState({
//   books:bookData.data
// })
//   }
componentDidMount=async()=>{
  console.log("bookResult function");
     let bookData=await axios.get(`${process.env.REACT_APP_SERVER}/getData?bookName=${this.props.auth0.user.email}`)
     console.log(bookData,"axios result");
 this.setState({
  dataBookStore:bookData.data
 })
console.log(this.props.dataBookStore);

}


  <Row>
{this.state.dataBookStore.map ((book,index)=>{return (<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{book.bookName}</Card.Title>
    <Card.Text>
    book discription:{book.bookDesc}<br></br>
    page Number:{book.pageNumber}<br></br>
    book number:{book.pageNumber}
    book email:{book.email}
    </Card.Text>
   
  </Card.Body>
</Card>)
})}
       
</Row>

 {/* <BookResult getBook={this.getBook}/> */}
       {/* <BookResult getBook={this.state.booksDetail}/> */}
     

        {/* {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )} */}



        updateOnrecipe=async(event)=>{
//   // const dataRecipeFavorat= 
//   event.preventDefualt()
//   console.log("Ya rab work");
  
// let bookNew={
//    label:event.target.label.value,
//     :event.target.ingrediant.value
// } 
//   let newRecip= await axios.post(`${process.env.REACT_APP_SERVER}/updateRecipe`,{bookNew})
  
//   console.log(newRecip);


// }