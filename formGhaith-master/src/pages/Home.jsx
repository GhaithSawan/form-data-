import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MadalAdd from "../component/ModalAdd";
import Deletemember from "../functions/deletemember";
import Form from "react-bootstrap/Form";
import DataNotFound from "../component/DataNotFound";
const Home = () => {
  const [show, setShow] = useState(false);
  const [searchvaribel, setsearchvaribel] = useState([]);
  const clickadd = () => setShow(true);
  const [data, setdata] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <MadalAdd setShow={setShow} show={show} data={data} setdata={setdata} />
      <div
        style={{
          backgroundColor: "white",
          height: "16%",
          width: "100%",
          position: "fixed",
          bottom: 0,
          boxShadow: "0px 0 5px black",
        }}
      >
        <div div className="search">
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="searsh"
                placeholder="searsh"
                onChange={(Item) => {
                  setsearchvaribel(
                    data.filter((e) => e.name == Item.target.value)
                  );
                }}
              />
            </Form.Group>
          </Form>
        </div>

        <div className="shownumberofperson">
          <span>
            Number of prisoners{" "}
            <span style={{ color: "rgb(74, 125, 255)" }}>{data.length}</span>{" "}
          </span>
        </div>
        <div className="add" onClick={() => clickadd()}>
          <span>+</span>
        </div>
        <div className="deletAll" onClick={() => setdata([])}>
          <span>-</span>
        </div>
      </div>
      <div className="container col-10 mt-5 mytable">
        {data.length ? (
          <Table
            responsive="sm"
            style={{ textAlign: "center", marginBottom: "14%" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>the crime</th>
                <th>Existing</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {searchvaribel.length
                ? searchvaribel.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td className="padding-top10">{e.id}</td>
                        <td className="padding-top10">{e.name}</td>
                        <td className="padding-top10">{e.crime}</td>
                        <td className="padding-top10">
                          <input
                            type="checkbox"
                            checked={e.Existing ? true : false}
                            readOnly
                            className="form-check-input"
                          />
                        </td>
                        <td>
                          
                        </td>
                      </tr>
                    );
                  })
                : data.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td className="padding-top10">{e.id}</td>
                        <td className="padding-top10">{e.name}</td>
                        <td className="padding-top10">{e.crime}</td>
                        <td className="padding-top10">
                          <input
                            type="checkbox"
                            checked={e.Existing ? true : false}
                            readOnly
                            className="form-check-input"
                          />
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => Deletemember(e.id, setdata, data)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </Table>
        ) : (
          <DataNotFound />
        )}
      </div>
    </>
  );
};

export default Home;
