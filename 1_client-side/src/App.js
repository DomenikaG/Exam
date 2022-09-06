import React from "react";

import Header from "./components//Header";
import RegistrationForm from "./components/RegistrationForm";
import UsersList from "./components/UsersList";

import "./app.css";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <RegistrationForm />
      <UsersList />
    </div>
  );
}

export default App;
