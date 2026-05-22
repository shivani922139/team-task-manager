import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(res.data);

      alert("Registration Successful");
      window.location.href='/login';
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <form
      onSubmit={handleRegister}
      style={{
        width: "350px",
        padding: "30px",
        boxShadow: "0 0 10px gray",
        borderRadius: "10px",
      }}
    >
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
        }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Register
        <p
  onClick={() => window.location.href="/"}
  style={{
    textAlign: "center",
    marginTop: "15px",
    cursor: "pointer",
  }}
>
  Already have an account?
</p>
      </button>
    </form>
  </div>
);
}
export default Register;
  