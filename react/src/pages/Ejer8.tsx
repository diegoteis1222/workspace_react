import React from "react";

function Ejer8() {
  const [form, setForm] = React.useState({
    title: "",
    body: "",
  });

  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form data:", form);
  }

  return (
    <div>
      <h2>Ejer8</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Body:
            <input
              type="text"
              name="body"
              value={form.body}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <button disabled={loading}>Submit {loading && "...Loading"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
export default Ejer8;
