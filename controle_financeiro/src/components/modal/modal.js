import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [item, setItem] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ item, value, date });
    onClose();
  };

  return isOpen ? (
    <div classitem="modal">
      <div classitem="modal-content">
        <span classitem="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div classitem="form-group">
            <label htmlFor="item">Nome:</label>
            <input
              type="text"
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>
          <div classitem="form-group">
            <label htmlFor="value">Valor:</label>
            <input
              type="number"
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </div>
          <div classitem="form-group">
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default Modal;
