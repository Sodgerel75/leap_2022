import React, { useEffect, useState } from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import data from "./data";

function App() {
  // const url = "https://course-api.com/react-tabs-project";
  console.log(data);

  const [show, setShow] = useState(true)
  const [data2, setData] = useState([])


  useEffect(() => {
    setData(data.filter(el => el.company == 'TOMMY'))
  }, [])



  // let data2 = []
  function handleShow(name) {
    setData(data.filter(el => el.company == name))
    console.log(data);
    console.log("ID = ", name);
    setShow(true)
  }


  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <a onClick={() => {
            handleShow('TOMMY')

            console.log('Clicked');
          }}>  <h4>TOMMY</h4></a>
          <a onClick={() => {
            handleShow('BIGDROP')

            console.log('Clicked');
          }}>  <h4>BIGDROP</h4></a>
          <a onClick={() => {
            handleShow('CUKER')

            console.log('Clicked');
          }}>  <h4>CUKER</h4></a>
        </div>
        {show ? data2.map((el, index) => {
          return (
            <div key={index} className="company-content">
              <h2 className="job-title">{el.title}</h2>
              <p className="company-name">{el.company}</p>
              <p className="date">{el.dates}</p>
              {el.duties.map((el) => {
                return (
                  <div className="text">
                    <AiFillCaretRight />
                    <p>{el}</p>
                  </div>
                )
              })}

            </div>
          )
        }) : <div>TEST</div>}
      </div>
    </section>
  );
}

export default App;
