import React from 'react';
// import { useState } from 'react';
import './Landing.css';

const Landing: React.FC = () => {
    return (
        <div className='MiddlePage'>
          <div className="Container">
            <ul className="Items">
              <li className="Element" id="desc">
                <h1><span style={{"color": "#88A4E6"}}>Léo-Paul DOAT</span></h1>
                <p>
                  Junior French <span> <img className="Icon" src="./svg/france.svg"/></span> web developer.
                </p>
                <p>
                  After studying for 4 years, I am now currently working on project such as this website while looking for a new job.
                </p>
                <p>
                  If you are interested by my profile, don't hesitate to contact me on <a className='Linked' href='https://www.linkedin.com/in/léo-paul-doat'>  LinkedIn</a> or by e-mail (leopauldoat@gmail.com).
                  You can also find the code of this website on my <a className="Linked" href='https://github.com/leopdoat/Leopdoat'>GitHub</a>.
                </p>
              </li>
              <hr className="separator" id='separator'/>
              <li className='Element' id='skills'>
                <h1><span style={{"color": "#88A4E6"}}>Skills</span></h1>
                </li>
                <li className="SkillElement" id='frontend'>
                <h2>
                  Frontend
                </h2>
                  <a className='Linked' href='https://react.dev'>- React <img className='Icon' src="./svg/react.svg" /></a>
                  <a className='Linked' href='https://developer.mozilla.org/en-US/docs/Web/CSS'>- CSS <img className='Icon' src="./svg/css.svg" /></a>
                  <a className='Linked' href='https://www.typescriptlang.org'>- TypeScript <img className='Icon' src="./svg/typescript.svg" /></a>
                </li>
                <li className="SkillElement" id='backend'>
                  <h2>
                    Backend
                  </h2>
                  <a className='Linked' href='https://nodejs.org/en'>- Node.js <img className='Icon' src="./svg/node.svg" /></a>
                  <a className='Linked' href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'>- WebSockets <img className='Icon' src="./svg/websocket.svg" /></a>
                  <a className='Linked' href='https://www.typescriptlang.org'>- TypeScript <img className='Icon' src="./svg/typescript.svg" /></a>
                </li>
                <li className="SkillElement" id='organization'>
                  <h2>
                    Organization
                  </h2>
                  <a className='Linked' href='https://nodejs.org/en'>- Notion <img className='Icon' src="./svg/notion.svg" /></a>
                  <a className='Linked' href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'>- Trello <img className='Icon' src="./svg/trello.svg" /></a>
                  <a className='Linked' href='https://www.typescriptlang.org'>- Teams <img className='Icon' src="./svg/teams.svg" /></a>
                </li>
                <li className="SkillElement" id='others'>
                  <h2>
                    Others
                  </h2>
                  <a className='Linked' href='https://github.com/leopdoat'>- GitHub <img className='Icon' src="./svg/github.svg" /></a>
                  <a className='Linked' href='https://github.com/leopdoat'>- Docker <img className='Icon' src="./svg/docker.svg" /></a>
                  <a className='Linked' href='https://github.com/leopdoat'>- PostgreSQL <img className='Icon' src="./svg/postgresql.svg" /></a>
                </li>
              <hr className="separator" id='separator2'/>
              <li className='Element' id='experiences'>
                <h1><span style={{"color": "#88A4E6"}}>Experiences</span></h1>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default Landing;