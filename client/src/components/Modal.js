import { useState } from "react";

const Modal = () => {
  const [form, setForm] = useState({
    line: "",
  });

  console.log(form);
  const createMode = true;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  return (
    <div className="overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className="close-icon">x</div>
          <h1>{createMode ? "Add" : "Edit"} your adventure</h1>
          <h5>Upload a photo of where you have visited</h5>
          <p>Paste a url from the internet</p>

          <div className="multi-input">
            <div class="input-container">
              <label for="line">FIRST LINE</label>
              <input
                for="line"
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
