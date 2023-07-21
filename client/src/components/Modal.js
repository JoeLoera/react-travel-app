import { useState } from "react";

const Modal = ({ mode, setMode, currentPost }) => {
  console.log(currentPost);
  const [form, setForm] = useState({
    title: currentPost?.data.title || "",
    description: currentPost?.data.description || "",
    line: currentPost?.data.line || "",
    town: currentPost?.data.town || "",
    reion: currentPost?.data.region || "",
    country: currentPost?.data.country || "",
    longitude: currentPost?.data.address.coords[0] || undefined,
    latitude: currentPost?.data.address.coords[1] || undefined,
    photo: currentPost?.data.photo || "",
    website: currentPost?.data.website || "",
    nature: currentPost?.data.tags.includes("nature") || false,
    mountains: currentPost?.data.tags.includes("mountains") || false,
    hiking: currentPost?.data.tags.includes("hiking") || false,
    beach: currentPost?.data.tags.includes("beach") || false,
    sun: currentPost?.data.tags.includes("sun") || false,
  });

  console.log(form);
  const createMode = mode === "create";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            <div className="image-preview">
              {form.photo && (
                <img src={form.photo} alt="uploaded photo preview" />
              )}
            </div>
            <div className="main-inputs">
              <div className="input-container">
                <label htmlFor="photo">PHOTO</label>
                <input
                  id="photo"
                  name="photo"
                  placeholder="Photo URL goes here"
                  required
                  value={form.photo}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="title">TITLE</label>
                <input
                  id="photo"
                  name="photo"
                  placeholder="Photo URL goes here"
                  required
                  value={form.photo}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="website">WEBSITE</label>
                <input
                  id="website"
                  name="website"
                  placeholder="Website URL goes here"
                  required
                  value={form.photo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="description">DESCRIPTION</label>
            <input
              id="description"
              name="description"
              required
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="multi-input">
            <div className="input-container">
              <label htmlFor="line">FIRST LINE</label>
              <input
                id="line"
                placeholder="First Line of Address"
                required
                name="line"
                value={form.line}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="country">COUNTRY</label>
              <input
                id="country"
                name="country"
                placeholder="The Country"
                required
                value={form.country}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="town">TOWN/CITY</label>
              <input
                id="town"
                name="town"
                placeholder="Town (or city"
                required
                value={form.town}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="multi-input">
            <div className="input-container">
              <label htmlFor="longitude">LONGITUDE</label>
              <input
                type="longitude"
                id="longitude"
                name="longitude"
                required
                value={form.longitude}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="latitude">LATITUDE</label>
              <input
                type="number"
                id="latitude"
                name="latitude"
                required
                value={form.latitude}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="region">REGION</label>
              <input
                type="region"
                id="region"
                name="region"
                required
                value={form.region}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="multi-input">
            <div className="input-container">
              <label htmlFor="nature-checkbox">Nature</label>
              <input
                id="nature-checkbox"
                type="checkbox"
                name="nature"
                checked={form.nature}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="mountains-checkbox">Mountains</label>
              <input
                id="mountains-checkbox"
                type="checkbox"
                name="mountains"
                checked={form.mountains}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="hiking-checkbox">Hiking</label>
              <input
                id="hiking-checkbox"
                type="checkbox"
                name="hiking"
                checked={form.hiking}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="beach-checkbox">Beach</label>
              <input
                id="beach-checkbox"
                type="checkbox"
                name="beach"
                checked={form.beach}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="sun-checkbox">Sun</label>
              <input
                id="sun-checkbox"
                type="checkbox"
                name="sun"
                checked={form.sun}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="multi-input">
            <div className="input-container">
              <label for="nature-checkbox">Nature</label>
              <input
                id="nature-checkbox"
                type="checkbox"
                name="nature"
                checked={form.nature}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <input type="submit" value="Submit for review →" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
