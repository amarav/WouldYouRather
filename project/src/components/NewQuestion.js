import React from 'react';
import { Col, Form, FormGroup, Label, Input , Button} from 'reactstrap';

const Example = (props) => {
  return (
    <Form className="col-md-4 offset-md-4">      
      <section className="page-section bg-light">
            <div className="container-fluid">
              <div className="text-center">
                <h3 className="section-heading text-uppercase">
                  Create new question
                </h3>
                <h3 className="section-subheading text-muted">
                  Complete the question
                </h3>                
              
                <h3 className="section-heading">
                  Would You Rather...
                </h3>
                </div>
            </div>
    <br/>
      <FormGroup row>
        <Col className="offset-md-1" sm={10}>
          <Input type="email" name="email" id="exampleEmail"  placeholder="Enter Option one text here" />
        </Col>
      </FormGroup>
      <Label className="text-center offset-md-5" >OR</Label>
      <FormGroup row>
        <Col className="offset-md-1" sm={10}>
          <Input type="email" name="email" id="exampleEmail2" placeholder="Enter Option two text here" />
        </Col>
      </FormGroup>
<br/>
         <Button color="secondary" size="lg" block>Submit</Button>
          </section>

    </Form>
  );
}

export default Example;