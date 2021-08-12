import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContextAPI } from "../../Context/userContext";

const bio = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend a libero eu aliquet. Nulla facilisi. Nulla fermentum turpis sit amet ultricies luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pellentesque consectetur purus, eget malesuada eros malesuada et.",
  "Nam purus tortor, pretium eu posuere a, iaculis at neque. Praesent non facilisis felis. Donec suscipit, turpis sit amet dapibus lacinia, eros turpis accumsan risus, ac ultrices velit urna aliquam ipsum.",
  "Sed condimentum tincidunt mauris egestas accumsan. Etiam et condimentum massa, quis ultrices purus. Aliquam risus est, ultricies eu dui blandit, tincidunt feugiat augue.",
  "Fun luctus nisl ac rhoncus tempor. Pellentesque eget est a ligula consequat fermentum ac et dolor. Mauris tempus in urna in tristique. Quisque et lacus ac nibh suscipit laoreet non in augue.",
  "Ut imperdiet semper quam. Ut eu lacus sed velit condimentum venenatis. Morbi rutrum, eros a faucibus posuere, enim lectus finibus arcu, eu fermentum augue justo sit amet nunc.",
];

const Detail = (props) => {
  let history = useHistory();
  const context = useContext(AuthContextAPI);

  const [user, setUser] = useState({});

  const valueID = Math.floor(Math.random() * (4 - 1) + 1);

  function loadUser() {
    if (context.lstUser.length > 0) {
      const user = context.lstUser.find(
        (item) => item.id === history.location.state.id
      );
      setUser(user);
    } else {
      returnHome();
    }
  }

  useEffect(() => {
    loadUser();
  });

  function returnHome() {
    history.push("/");
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Detalhe</h1>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <span>Nome: </span> {user.nome}
        </li>
        <li className="list-group-item">
          <span>Sobrenome: </span> {user.sobrenome}
        </li>
        <li className="list-group-item">
          <span>Idade: </span> {user.idade}
        </li>
        <li className="list-group-item">
          <span>Data: </span> {user.time}
        </li>
        <li className="list-group-item">
          <span>Bio: </span> {bio[valueID]}
        </li>
      </ul>

      <div className="mt-3 d-flex justify-content-end">
        <button type="button" className="btn btn-dark" onClick={returnHome}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Detail;
