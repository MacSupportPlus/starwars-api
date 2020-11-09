import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import {Router, navigate} from '@reach/router';

const cats = ["","films","people","planets","spaceships","species","vehicles"]

function App() {

  const [id,setId] = useState("")
  const [category, SetCategory] = useState(cats[0]);


  const handleQuery = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
    SetCategory(cats[0]);
    setId("");
  }




  return (
    <div className="App">
      <form className="col-3 mx-auto" onSubmit={handleQuery}>
        <div className="form-group">
          <label>Category: </label>
            <select value={category} className="form-control" onChange={(e)=> SetCategory(e.target.value)}>
              {
                cats.map((cat,i) => <option value={cat} key={i}>{ i === 0 ? "--select ID--":    cat}</option>)
              }
            </select>
          </div>
        <div className="form-group">
          <label>Id Number: </label>
          <input className="form-control" type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
            <input type="submit" value="Find Your Star Wars Fact" className="btn btn-primary"/>
      </form>
      <Router>
        <Display path= "/:category/:id" />
      </Router>
      
    </div>
  );
}

export default App;
