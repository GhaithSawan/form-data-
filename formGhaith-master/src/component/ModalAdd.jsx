import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function MadalAdd({ show, setShow, setdata, data }) {
  const handleClose = () => setShow(false);
  const [crime, setcrime] = useState("");
  const [name, setname] = useState("");
  const [Existing, setExisting] = useState();
  const [validationErrors, setValidationErrors] = useState({});

  let newobj = {
    id: data.length + 1,
    crime,
    name: name.toLowerCase(),
    Existing,
  };
  function addperson() {
    const errors = {};

    if (!crime) {
      errors.crime = "crime Name is required";
    }

    if (!name) {
      errors.name = "name Owner is required";
    }
 

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      setdata([...data, newobj]);
      setcrime("");
      setname("");
      setExisting("");
      handleClose();
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <div style={{ color: "red" }}>
                {validationErrors.name && validationErrors.name}
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <DropdownButton title={newobj.crime ? newobj.crime : "The Crime"}>
                <Dropdown.Item
                  onClick={(e) => {
                    setcrime(e.target.innerHTML);
                  }}
                >
                  Kill
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setcrime(e.target.innerHTML);
                  }}
                >
                  Theft
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    setcrime(e.target.innerHTML);
                  }}
                >
                  Drug Abuse
                </Dropdown.Item>
              </DropdownButton>
              <div style={{ color: "red" }}>
                {validationErrors.crime && validationErrors.crime}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label style={{ display: "block" }}>Existing</Form.Label>
              <input
                type="checkbox"
                id="checkbox_ex"
                style={{ height: "17px", width: "17px", marginLeft: "20px" }}
                onChange={(e) => {
                  setExisting(e.target.checked);
                }}
              />
            
            </Form.Group>1
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addperson()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MadalAdd;
