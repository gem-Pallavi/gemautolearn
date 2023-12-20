import React, { useState, useEffect, useRef } from 'react';
import '../../css/dashboard/dashboard.css';
import SideNav from './SideNav';
import DataTile from './DataTile';
import Leaderboard from './Leaderboard';

export default function Dashboard(props) {
  const [selectedTechnology, setSelectedTechnology] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='row'>
      <div className='col-md-3'>
        <SideNav />
      </div>
      <div className='col-md-9 dashboard'>
        <div className='container dashboard-data'>
          <DataTile userName={"Developer"} data={50} data1={25} data2={25} data3={50 + '%'} />
          </div>
          <div className='row leaderboard-row'>
            <div className='col-md-9 leaderboard'>
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
  );
}
