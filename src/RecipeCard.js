import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Card,Button} from 'react-bootstrap'
class RecipeCard extends React.Component {
    render() {
        // console.log(this.props.recipreItem,"this.props.recipreItem");

        return (
            <div>
             <Row xs={2} md={4} lg={6}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.recipreItem.image} />
          <Card.Body>
            <Card.Title>label:{this.props.recipreItem.label}</Card.Title>
            <Card.Text>
            ingredientLines:{this.props.recipreItem.ingredientLines.map(item=>{
            return    (<li>{item}</li>)
            })}
            </Card.Text>
            <Button variant="primary"  onClick={()=>{this.props.addFunction(this.props.recipreItem)}}>Favorate</Button>
          </Card.Body>
        </Card>  
        </Row>
            </div>
        )
    }
}

export default RecipeCard
