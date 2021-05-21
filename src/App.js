import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import List from './components/List';
import fs from './assets/fs.png';
import aws from './assets/aws.png';
import axios from 'axios';
// import axios from 'axios';


function App() {

  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [studentsList, setStudentsList] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudentsList(res.data))

  }, [])

  const handleText = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  const searchText = () => {
    setSearch(text)
  }
  const filteredNames = useMemo(() => studentsList.filter((student) => student.name.toLowerCase().includes(search.toLowerCase())), [search, studentsList])


  const add = useCallback(() => {
    setStudentsList([...studentsList, { id: studentsList.length + 1, name: "Edward CW" }])
  }, [studentsList],
  )


  return (
    <div className="App">
      <Header img={img} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <hr />
      <input type="text" value={text} onChange={handleText} />
      <button onClick={searchText} >Search</button>
      <List students={filteredNames} add={add} />

    </div>
  );
}

export default App;
