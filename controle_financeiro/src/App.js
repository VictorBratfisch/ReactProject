import "./App.css";
import {} from "react-icons/di";
import {
  AiFillDollarCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Modal from "./components/modal/modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (newData) => {
    setData([...data, newData]);
    closeModal();
  };
  return (
    <div className="App">
      <header>
        <AiFillDollarCircle size={30} color="white" />
        <h1>Controle de Financias</h1>
        <AiFillDollarCircle size={30} color="white" />
      </header>
      <body className="body">
        <div className="cards">
          <div className="divDecoration">
            <div className="card">
              <div className="row-card">
                <div className="texto">
                  <h2>Entrada</h2>
                </div>
                <div className="icon-arrow">
                  <AiOutlineArrowUp />
                </div>
              </div>

              <div className="num">
                <span>1000</span>
              </div>
            </div>

            <div className="card">
              <div className="row-card">
                <div className="texto">
                  <h2>Saída</h2>
                </div>
                <div className="icon-arrow">
                  <AiOutlineArrowDown />
                </div>
              </div>

              <div className="num">
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="botao-add">
          {!isModalOpen && (
            <button onClick={openModal}>Adicionar Transação</button>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={handleSubmit}
          />

          {/* Renderize os dados inseridos aqui */}
        </div>
        <div className="div-table">
          <div className="tabela">
            <table>
              <tr>
                <th>Item</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Deletar</th>
              </tr>
              <tr>
                <tbody className="tbody"></tbody>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
