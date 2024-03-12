import React, { useState, useEffect, useRef } from 'react';
//import PageHeader from './PageHeader';
import SlideShow from './SlideShow';
import About from './About';
import Ask from './Ask';
import GetInTouch from './GetInTouch';
import Learn from './Learn';
import Vara from './Vara';

function Dashboard() {

  return (
    <div className="dashboards">
      <div>
        <div>
          <Vara/>
        </div>
        <div>
          <SlideShow />
        </div>
        <div>
          <Ask />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Learn />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
