import React, { useState } from "react";
import "./Styles.css";
import { Routes, Route, Link } from "react-router-dom";

// import {Contacts} from './Cont.jsx';

const Main = (props) => {
  const [home, setHome] = useState(false);
  const [feat, setFeat] = useState(false);
  const [contact, setContacts] = useState(false);

  const clickHomeHandler = () => {
    setHome(true);
    setFeat(false);
    setContacts(false);
  };

  const clickFeatHandler = () => {
    setFeat(true);
    setContacts(false);
    setHome(false);
  };

  const clickContactsHandler = () => {
    setContacts(true);
    setFeat(false);
    setHome(false);
  };
  return (
    <>
      <div className="container">
        <h3 className="masthead-brand">Cover</h3>
        <nav>
          <ul className="nav masthead-nav">
            <li
              className={`${home ? "active" : ""}`}
              onClick={clickHomeHandler}
            >
              <Link to="home">Home</Link>
            </li>
            <li
              className={`${feat ? "active" : ""}`}
              onClick={clickFeatHandler}
            >
              <Link to="feat">Features</Link>
            </li>
            <li
              className={`${contact ? "active" : ""}`}
              onClick={clickContactsHandler}
            >
              <Link to="cont">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Routes>
    <Route path="cont" element={<Contacts/>}/>
  </Routes> */}
    </>
  );
};

export default Main;
