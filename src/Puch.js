import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaCreativeCommonsBy } from "react-icons/fa6";
import Table from 'react-bootstrap/Table';

function Punch() {
  const [punchin, setpunchIn] = useState('');
  const [punchout, setpunchout] = useState("");
  const [displaypunch, setdisplaypunch] = useState("");

  const adddin = () => {
    const currentDate = new Date();
    const options = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const intime = currentDate.toLocaleTimeString("en-US", options);
    setpunchIn(intime);
    console.log(punchin);
    alert('Punch in')
  };

  const addout = () => {
    const currentDate1 = new Date();
    const options = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const outtime = currentDate1.toLocaleTimeString("en-US", options);
    setpunchout(outtime);
    console.log(outtime);
  };
  
  // function diff()
  // {
  //   if(currentDate<currentDate1)
  //   {

  //   }
  // }

  return (
    //<div className="box" style={{ top:'50%',left: '50%',backgroundColor:'gray'}}>
    <>
      <Card style={{ top:'100%',left: '30%'}}>
      <Card style={{ width: "35rem", height: 140, backgroundColor: "pink"}}>
        <Container>
            <Col xs={6} md={4}>
              <FaCreativeCommonsBy
                style={{ fontSize: "70px", marginTop: "25", marginLeft: "200" }}
              />
            </Col>
            <Card.Title style={{textAlign:"center"}}>Puja_Chopade</Card.Title>
        </Container>
      </Card>
      <Row lg={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Body style={{ position: "relative" }}>
            <Card.Title>Log in </Card.Title>
            <Card.Text>Pun in time : {punchin}</Card.Text>
            <Button variant="primary" onClick={adddin}>
              In
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Log out </Card.Title>
            <Card.Text>punch out time :{punchout}</Card.Text>
            <Button variant="primary" onClick={addout}>
              Out
            </Button>
          </Card.Body>
          {/* <Button variant="primary" onClick={diff}>
              diff
            </Button> */}
        </Card>
      </Row>
      </Card>
      {/* <div className="container-fluid mt-5">
        <div className="row text-center">
              <div>
                <div className="col-10 col-md-4 mt-5">
                  <div class="card p-2">
                    <div class="d-flex align-items-center">
                      <div class="image">
                        <img
                          src='C:\Users\v-pchopade\Desktop\digi\attendance\src\comp\img\user.jpg'
                          class="rounded"
                          width="155"
                        />
                      </div>
                      <div class="ml-3 w-100">
                        <h4 class="mb-0 mt-0 textLeft">hi</h4>
                        <span className="textLeft">hi puja</span>
                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between">
                          <div class="d-flex flex-column">
                            <span class="articles">mi</span>
                            <span class="number1">hiop</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
        </div>
      </div> */}
    </>
  );
}

export default Punch;
