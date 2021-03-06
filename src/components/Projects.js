/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import liveSus from "../media/live-sustainably.png";
import meme from "../media/meme.png";
import ss from "../media/ss.png";
import ssg from "../media/ss.gif";
import ls from "../media/ls.gif";
import mb from "../media/mb.gif";


const Projects = () => {
  return (
    <div className="projects columns is-multiline">
      <div className="column is-one-quater">
        <div className="card">
          <div className="card-image">
            <figure id="large-img" className="image is-3by5">
              <img
                src={ssg}
                alt="Placeholder image"
              />
            </figure>
            <figure id="small-img" className="image is-4by3">
              <img src={ss} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Sneaky Snake</p>
              </div>
            </div>
            <div className="about-proj content">
              The classic game of snake
              <hr />
              <div className="columns is-multiline is-mobile">
                <p className="column is-6">HTML</p>
                <p className="column is-6">JavaScript</p>
                <p className="column is-6">Bootstrap</p>
                <p className="column is-6">&nbsp;</p>
                <p className="column is-6">&nbsp;</p>
                <p className="column is-6">&nbsp;</p>
              </div>
              <a
                className="button is-dark"
                href="https://omunoz-89.github.io/Sneaky-Snake/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-quater">
        <div className="card">
          <div className="card-image">
            <figure id="large-img" className="image is-3by5">
              <img
                src={mb}
                alt="Placeholder image"
              />
            </figure>
            <figure id="small-img" className="image is-4by3">
              <img src={meme} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Meme Bank</p>
              </div>
            </div>
            <div className="about-proj content">
              Create and store memes
              <hr />
              <div className="columns is-multiline is-mobile">
                <p className="column is-6">Node</p>
                <p className="column is-6">Express</p>
                <p className="column is-6">Bootstrap</p>
                <p className="column is-6">REST API</p>
                <p className="column is-6">&nbsp;</p>
                <p className="column is-6">&nbsp;</p>
              </div>
              <a
                className="button is-dark"
                href="https://my-meme-bank.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-quater">
        <div className="card">
          <div className="card-image">
            <figure id="large-img" className="image is-3by5">
              <img
                src={ls}
                alt="Placeholder image"
              />
            </figure>
            <figure id="small-img" className="image is-4by3">
              <img src={liveSus} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Live Sustainably</p>
              </div>
            </div>
            <div className="about-proj content">
              Provides gardening information
              <hr />
              <div className="columns is-multiline is-mobile">
                <p className="column is-6">MongoDB</p>
                <p className="column is-6">Express</p>
                <p className="column is-6">React</p>
                <p className="column is-6">Node</p>
                <p className="column is-6">Bulma CSS</p>
                <p className="column is-6">REST API</p>
              </div>
              <a
                className="button is-dark"
                href="https://live-sustainably.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
