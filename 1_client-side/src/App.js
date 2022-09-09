import React from "react";

import Header from "./components//Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import UsersList from "./components/UsersList";

import "./app.css";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <RegistrationForm />
      <UsersList />

      <Footer />
    </div>
  );
}

export default App;
