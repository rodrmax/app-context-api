import React, { useContext, useState } from "react";
import { AuthContextAPI } from "../../Context/userContext";
import { Link } from "react-router-dom";

const INITIAL_VALUE = {
  nome: "",
  sobrenome: "",
  perfil: "",
  idade: 0,
};

function App() {
  const context = useContext(AuthContextAPI);
  const [_user, _setUser] = useState(INITIAL_VALUE);

  const handleSave = async () => {
    if (!(_user.nome === "" || _user.sobrenome === "" || _user.perfil === "")) {
      await context.handleUpdade(_user);
      _setUser(INITIAL_VALUE);
    } else window.alert("Favor preencher todos os campos!");
  };

  const handleDelete = () => {
    const ret = window.confirm("Deseja realmente apagar os dados?");
    if (ret) {
      context.handleResetData();
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <h1>Register Page - Using Context API</h1>
      </div>

      <div className="row">
        {/* Lista cadastro */}
        <div className="col-6">
          {context.lstUser.length <= 0 ? (
            <div className="alert alert-warning mt-3" role="alert">
              Nenhum dado cadastrado!
            </div>
          ) : (
            context.lstUser.map((item, index) => (
              <div className="list-group mt-3" key={index}>
                <div className="list-group-item list-group-item-action flex-column align-items-start text-decoration">
                  <div className="d-flex w-100 justify-content-between flex-row">
                    <h5 className="mb-1">UserID: {index}</h5>
                    <small>{item.time}</small>
                  </div>

                  <p className="mb-1">
                    {item.nome} {item.sobrenome}
                    {" - "}
                    <span>Idade: {item.idade}</span>
                  </p>

                  <span>Perfil: {item.perfil}</span>
                  <Link
                    className="text-decoration"
                    to={{
                      pathname: "/detail",
                      state: { id: item.id },
                    }}
                  >
                    <div className="d-flex justify-content-center text-decoration-none">
                      <small className="text-decoration">Detalhe</small>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Formulario */}
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Nome: </label>
              <input
                className="form-control"
                type="text"
                name="nome"
                value={_user.nome}
                onChange={(e) => _setUser({ ..._user, nome: e.target.value })}
              />
              <small id="emailHelp" hidden className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Sobrenome: </label>
              <input
                className="form-control"
                type="text"
                name="nome"
                value={_user.sobrenome}
                onChange={(e) =>
                  _setUser({ ..._user, sobrenome: e.target.value })
                }
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Perfil: </label>
              <input
                className="form-control"
                type="text"
                name="nome"
                value={_user.perfil}
                onChange={(e) => _setUser({ ..._user, perfil: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Idade: </label>
              <input
                className="form-control"
                type="number"
                name="nome"
                value={_user.idade}
                onChange={(e) => _setUser({ ..._user, idade: e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-end">
              <div className="d-flex flex-row">
                <button
                  type="button"
                  className="btn btn-danger mt-3 me-2"
                  onClick={() => handleDelete()}
                >
                  Limpar lista
                </button>

                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={() => handleSave()}
                >
                  Enviar dados
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
