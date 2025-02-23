import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisitTable from './components/VisitTable';
import FileUpload from './components/VisitTable';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [visits, setVisits] = useState([]);

  const fetchVisits = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/appointment/visit/');
      setVisits(response.data.data);
    } catch (error) {
      console.error('Error while fetching visits:', error);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <div className="App">
      <h1>Patient Records</h1>
      <FileUpload onUpload={fetchVisits} />
      <VisitTable visits={visits} />
    </div>
  );
};

export default App;
