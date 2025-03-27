import './ExpCard.css'

function ExpCard() {
  return (
    <div className="ExpCard">
      <h2>Fullstack Developer at <span><a className="DevoLink" href="https://devolab.net"> Devolab</a></span>
      </h2>
      <h3>Job description</h3>
      <br />
      <p>
        My time at Devolab was an amazing experience, indeed I had the chance to work in several different projects which allowed me to learn a lot of new things.
        During this internship, I learnt more deeply how to use <span className="DevoLink">React</span>, <span className="DevoLink">Node.js</span>, <span className="DevoLink">TypeScript</span> but also <span className="DevoLink">Websockets</span>, <span className="DevoLink">Docker</span> and <span className="DevoLink">PostgreSQL</span>.
        This experience was really amazing and got me a total of 16pts out of 20 for my report !
      </p>
      <p>
      </p>
    </div>
  );
};

export default ExpCard