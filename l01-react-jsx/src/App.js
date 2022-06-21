import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const initialValues = { username: "", email: "", password: "", x_val: 0, y_val: 0 };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSum, setIsSum] = useState(false);
  const [additionResult, setAdditionResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleSum = (e) => {
    e.preventDefault();
    setAdditionResult(parseInt(formValues.x_val) + parseInt(formValues.y_val));
    setIsSum(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSum}>
        <h1>Addition Display</h1>
        <div>
          <label>X</label>
          <input
            type="number"
            name="x_val"
            placeholder="Enter X"
            value={formValues.x_val}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Y</label>
          <input
            type="number"
            name="y_val"
            placeholder="Enter Y"
            value={formValues.y_val}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            name="add_submit"
            value="Add X and Y"
          />
        </div>
      </form>

      <div>X + Y is: <p>{(isSum && !isNaN(additionResult)) ? additionResult : ""}</p></div>

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div></div>
        <div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
        </div>
      </form>
      <footer style={{ textAlign: 'center' }}>
        Credits: <h4>Karthik D, 195001047</h4>
      </footer>
    </div>
  );
}

export default App;
