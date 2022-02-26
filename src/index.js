import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import WorkExperience from './components/experience';
import Education from './components/education';
import Organizations from './components/organizations';
import Projects from './components/projects';
import Seminars from './components/seminars';
import Licenses from './components/licenses';
import Skills from './components/skills';
import CharacterReferences from './components/characterReferences';

import './body.css';


ReactDOM.render(
  <React.StrictMode>

  <div class="container">
    <div class="row">
      <div class="col">
      </div>
    <div class="col-10">
      <Header/>
      <WorkExperience />
      <Education />
      <Organizations />
      <Projects />
      <Seminars />
      <Licenses />
      <Skills />
      <CharacterReferences />
      
    </div>
    <div class="col">
    </div>
    </div>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

