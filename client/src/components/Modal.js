import { useState } from "react";

const Modal = ({ mode, setMode }) => {
  console.log(mode);
  const [form, setForm] = useState({
    line: "",
  });

  console.log(form);
  const createMode = true;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e);
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(name + ":" + value);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className="close-icon" onClick={() => setMode(null)}>
            x
          </div>
          <h1>{createMode ? "Add" : "Edit"} your adventure</h1>
          <h5>Upload a photo of where you have visited</h5>
          <p>Paste a url from the internet</p>

          <div className="multi-input">
            <div class="input-container">
              <label for="line">FIRST LINE</label>
              <input
                id="line"
                placeholder="First Line of Address"
                required
                name="line"
                value={""}
                onChange={handleChange}
              />
            </div>
            <div class="input-container"></div>
            <div class="input-container"></div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
