import React from "react";

import { Button, Row, Container, Col, Form, Table } from "react-bootstrap";

function Client() {
  const [tasks, setTasks] = React.useState([]);

  const [newTask, setnewTask] = React.useState({
    nom: "",
    prenom: "",
    mail: "",
    numero: "",
  });
  //look useeffect adduser

  const { nom, prenom, mail, numero } = newTask;
  const [updateTask, setupdateTask] = React.useState({
    nom: "",
    prenom: "",
    mail: "",
    numero: "",
  });

  React.useEffect(() => {
    const readTasks = () => {
      if (sessionStorage.getItem("tasks")) {
        setTasks(JSON.parse(sessionStorage.getItem("tasks")));
      }
    };
    readTasks();
  }, []);
  const onInputChange = (e) => {
    setnewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const onInputChange2 = (e) => {
    setupdateTask({ ...updateTask, [e.target.name]: e.target.value });
  };

  const onCreate = () => {
    tasks.push(newTask);
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
    setnewTask({
      nom: "",
      prenom: "",
      mail: "",
      numero: "",
    });
  };

  function onDelete(task) {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
    setnewTask({
      nom: "",
      prenom: "",
      mail: "",
      numero: "",
    });

    setTasks(JSON.parse(sessionStorage.getItem("tasks")));
  }

  const onUpdate = (task) => {
    let index = tasks.indexOf(task);
    let tasks2 = JSON.parse(sessionStorage.getItem("tasks"));
    tasks2[index] = updateTask;
    sessionStorage.setItem("tasks", JSON.stringify(tasks2));
    setTasks(JSON.parse(sessionStorage.getItem("tasks")));
  };

  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Test rek boy</Navbar.Brand>
      </Navbar> */}
      <br></br>
      <Container>
        <Row>
          <Col>
            <h2>Ajouter un Contact</h2>
            <Form>
              <Form.Group>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Entrer votre nom"
                  className="form-control form-control-lg"
                  name="nom"
                  value={nom}
                  onChange={(e) => onInputChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Entrer votre prenom"
                  className="form-control form-control-lg"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => onInputChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Entrer votre mail"
                  className="form-control form-control-lg"
                  name="mail"
                  value={mail}
                  onChange={(e) => onInputChange(e)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Entrer votre numero de telephone"
                  className="form-control form-control-lg"
                  name="numero"
                  value={numero}
                  onChange={(e) => onInputChange(e)}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={onCreate}>
                Ajouter
              </Button>
            </Form>
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Mail</th>
                  <th>Numero</th>
                  <th>Supprimer</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => (
                  <tr key={i}>
                    <td>
                      <input
                        type="text"
                        className=" "
                        name="nom"
                        onChange={(e) => onInputChange2(e)}
                        placeholder={task.nom}
                      ></input>
                    </td>

                    <td>
                      <input
                        type="text"
                        className=" "
                        name="prenom"
                        onChange={(e) => onInputChange2(e)}
                        placeholder={task.prenom}
                      ></input>
                    </td>

                    <td>
                      <input
                        type="text"
                        className=" "
                        name="mail"
                        onChange={(e) => onInputChange2(e)}
                        placeholder={task.mail}
                      ></input>
                    </td>

                    <td>
                      <input
                        type="text"
                        className=" "
                        name="numero"
                        onChange={(e) => onInputChange2(e)}
                        placeholder={task.numero}
                      ></input>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => onDelete(task)}>
                        Supprimer
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="text-white ml-4"
                        variant="warning"
                        onClick={() => onUpdate(task)}
                      >
                        Modifier
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Client;
