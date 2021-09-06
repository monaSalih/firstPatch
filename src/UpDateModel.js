import React from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
class UpDateModel extends React.Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
              <Form onSubmit={this.props.updateCurrentData}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>recipe Nmae</Form.Label>
    <Form.Control type="text" name="recName" defaultValue={this.props.chosenOne.label} placeholder="Enter name" />
    <Form.Text className="text-muted">
     plz update your data here
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image Link</Form.Label>
    <Form.Control type="text" defaultValue={this.props.chosenOne.image} name="recUrl" placeholder="img Url" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>  
<Modal.Footer>
    <Button variant="secondary" onClick={this.props.closeModule}>Close</Button>
    {/* <Button variant="primary">Save changes</Button> */}
  </Modal.Footer>
       </Modal.Dialog>  
          </div>
        )
    }
}

export default UpDateModel
