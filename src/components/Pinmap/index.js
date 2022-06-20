import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import L from "leaflet";
import { Button, Form, InputGroup, Row, Col,} from "react-bootstrap";
import Navbar from '../../layouts/Navbar'

let myIcondiv = L.divIcon({
  className: "icon__img",
  html: `<img src='${process.env.PUBLIC_URL}/images/pin.png'/>`,
});


const Mappin = () => {
  const [position, setPosition] = useState(null);
  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        //console.log(e.latlng);
        setPosition(e.latlng);
      },
    });

    return position == null ? null : (
      <Marker position={position} icon={myIcondiv}></Marker>
    );
  };

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="map">
          <MapContainer
            className="map-container"
            center={[13, 100]}
            zoom={6}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HandleClickMap />
          </MapContainer>
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text id="name">Station name</InputGroup.Text>
          <Form.Control type="text" placeholder="Station name ..." />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="lat">Latitude</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="0.000000"
            value={position == null ? null : position.lat}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="lng">Longitude</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="0.000000"
            value={position == null ? null : position.lng}
          />
        </InputGroup>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="success mb-2" >Save</Button>{" "}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Mappin;
