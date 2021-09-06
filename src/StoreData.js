import React, { Component } from 'react'
import {Row,Card,Button} from 'react-bootstrap'

export class StoreData extends Component {
    render() {
        // console.log(this.props.dataStore,"this.props.dataStore result");
        return (
           
                 <div>
             <Row xs={2} md={4} lg={6}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.dataStore.image} />
          <Card.Body>
            <Card.Title>label:{this.props.dataStore.label}</Card.Title>
            <Card.Text>
            ingredientLines:{this.props.dataStore.ingredientLines.map(item=>{
            return    (<li>{item}</li>)
            })}
            </Card.Text>
            <Button variant="primary"  onClick={()=>{this.props.deletFunction(this.props.index)}}>Delete</Button>
            <Button variant="primary"  onClick={()=>{this.props.updateForm(this.props.index)}} style={{marginLeft:"12%"}}>UpDate</Button>

          </Card.Body>
        </Card>  
        </Row>
            </div>
            
        )
    }
}

export default StoreData
