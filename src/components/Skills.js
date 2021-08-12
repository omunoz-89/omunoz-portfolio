import React from "react";

const Skills = () => {
  return (
    <div className="content">
      <h3 className="skill-title title">Programming Languages</h3>
      <hr />

      <div className="columns is-multiline">
        <div className="column is-3">
          <i className="skill devicon-html5-plain column is-12" />
          <p>HTML</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-javascript-plain column is-12"></i>
          <p>JavaScript</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-css3-plain column is-12"></i>
          <p>CSS</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-python-plain column is-12"></i>
          <p>Python</p>
        </div>
      </div>

      <h3 className="skill-title title">Libraries & Frameworks</h3>
      <hr />
      <div className="columns is-multiline">
        <div className="column is-2 is-offset-1">
          <i className="skill devicon-nodejs-plain column is-12"></i>
          <p>Node</p>
        </div>

        <div className="column is-2">
          <i className="skill devicon-express-original column is-12"></i>
          <p>Express</p>
        </div>

        <div className="column is-2">
          <i className="skill devicon-react-original column is-12"></i>
          <p>React</p>
        </div>

        <div className="column is-2">
          <i className="skill devicon-bootstrap-plain column is-12"></i>
          <p>Bootstrap</p>
        </div>

        <div className="column is-2">
          <i className="skill devicon-bulma-plain column is-12"></i>
          <p>Bulma</p>
        </div>
      </div>

      <h3 className="skill-title title">Databases</h3>
      <hr />
      <div className="columns is-multiline">
        <div className="column is-3">
          <i className="skill devicon-postgresql-plain column is-12"></i>
          <p>PostgreSQL</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-sequelize-plain column is-12"></i>
          <p>Sequelize</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-mongodb-plain column is-12"></i>
          <p>MongoDB</p>
        </div>

        <div className="column is-3">
          <i className="skill devicon-django-plain column is-12"></i>
          <p>Django</p>
        </div>
      </div>
      <div className="columns">
        <h3 className="more column is-12">More to come..</h3>
      </div>
    </div>
  );
};

export default Skills;
