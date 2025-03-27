import React from 'react';
// import { useState } from 'react';
import ExpCard from '../components/ExpCard.tsx';
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
                  After studying for 4 years, I am now currently working on projects such as this website while looking for a new job.
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
                  <a className='Linked' href='https://www.notion.so'>- Notion <img className='Icon' src="./svg/notion.svg" /></a>
                  <a className='Linked' href='https://www.trello.com'>- Trello <img className='Icon' src="./svg/trello.svg" /></a>
                  <a className='Linked' href='https://www.microsoft.com/en-us/microsoft-teams/group-chat-software/'>- Teams <img className='Icon' src="./svg/teams.svg" /></a>
                </li>
                <li className="SkillElement" id='others'>
                  <h2>
                    Others
                  </h2>
                  <a className='Linked' href='https://github.com/leopdoat'>- GitHub <img className='Icon' src="./svg/github.svg" /></a>
                  <a className='Linked' href='https://www.docker.com'>- Docker <img className='Icon' src="./svg/docker.svg" /></a>
                  <a className='Linked' href='https://www.postgresql.org'>- PostgreSQL <img className='Icon' src="./svg/postgresql.svg" /></a>
                </li>
              <hr className="separator" id='separator2'/>
              <li className='Element' id='exp'>
                <h1><span style={{"color": "#88A4E6"}}>Experiences</span></h1>
                <ExpCard />
              </li>
              <hr className="separator" id='separator3'/>
              <li className='Element' id='About1'>
                <h1><span style={{"color": "#88A4E6"}}>More about me</span></h1>
                <p>
                  For the pas few years, I have been studying computer science at <a className='Linked' href='https://www.epitech.eu'>Epitech</a> in Bordeaux.
                  This school is known for its project-based learning, which means that we have to work on projects all year long. 
                  This way of learning has been really helpful for me as I am now able to work on projects by myself.
                  <br />
                  For as long as I remember I have always been passionate about computers and technology, that's why I decided to study computer science. 
                  I was also all my life a big fan of video games and especially Dofus & League of Legends where I even reached the rank Diamond (top 2% of the player base in Europe).
                  Both of those games helped me in their own way, Dofus is a French MMORPG where I learned how to communicate with other players and also how to manage a guild and how to survive through a quite relevent economy system
                  while League of Legends thaught me how to think fast and adapt in every situation.
                </p>
              </li>
              <li className='Element' id='Picture1'>
                <img className='LeagueRank' src='./images/LeagueRank.png' alt='Léo-Paul Doat' />
              </li>
            </ul>
          </div>
        </div>
    );
};

export default Landing;