import {useEffect, useState} from 'react';

import './App.css';

import load from './users';
import Profiles from './Profiles';
import Paging from './Paging';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [users, setUsers] = useState([]);

  // useEffect(function, [list of dependencies])
  useEffect(()=>{
    load(currentPage).then(result=>{
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
      setUsers(result.data);
    });
  },[currentPage]);  // re-run the effect when the currentPage is changed

  const handlePageChange = (newPage) => setCurrentPage(newPage);
  return ( 
    <div className = "App" >
      <Paging current = {currentPage} total = {totalPages} onPageChange={handlePageChange}/>
      <Profiles className="profiles" users = {users}/>
    </div >
  );
}

export default App;