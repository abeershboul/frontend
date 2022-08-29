import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class App extends React.Component{

  constructor(prop){
    super(prop);
    this.state={
      display_name:''}
    }



  getLocation =async (event) =>{
    event.preventDefault();
    const cityName=event.target.city.value;
    const url ='http://localhost:3000/getweather?city_name=${citynamew}'
    try{
      const result = await axios.get(url);


    }
catch{


  
}
  
  
  
  }
   


render(){

return(
<>
<Form onSubmit={this.getLocation } style={{ width:'500px' ,borderRadius:"15%" , borderStyle:"solid",borderWidth:'1px'}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>search city weathar</h2> </Form.Label>
        <Form.Control type="text" placeholder="search location" name="city" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


</>


);


}



}
export default App;