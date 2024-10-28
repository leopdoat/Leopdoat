import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <div className='App'>
        <Nav />
        <div className='MiddlePage'>
          <div className="Container">
            <ul className="Items">
              <li className="Element" id="un">
                <img className="ProfilePic"  src="/Photo gros plan.jpg" />
              </li>
              <li className="Element" id="deux">
                <h1> Hey, I am <span style={{"color": "#88A4E6"}}>Léo-Paul DOAT</span></h1>
                <p>
                  I am Junior French<span> <img className="FranceLogo" src="/france.svg"/></span> web developer.
                  After studying for 4 years, I am now looking for professional opportunities in my favourite field.
                </p>
                <p>
                  On this website, you will find all my skills about programming but also my hobbies besides working on a computer.
                </p>
                <p>
                  If you are interested by my profile, don't hesitate to contact me on <a className='Linked' href='https://www.linkedin.com/in/léo-paul-doat'>  LinkdIn</a> or by e-mail (leopauldoat@gmail.com).
                  You can also find the code of this website on my <a className="Linked" href='https://github.com/leopdoat/Leopdoat'>GitHub</a>.
                </p>
                <button></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
