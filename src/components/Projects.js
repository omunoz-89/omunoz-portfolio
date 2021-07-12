/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import liveSus from '../media/live-sustainably.png'
import meme from '../media/meme.png'
import ss from '../media/ss.png'

const Projects = () => {
    return (
        <div className="projects columns">


    <div className='column is-one-quater'>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={ss} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Sneaky Snake</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
    </div>
  </div>
</div>
    </div>
    <div className='column is-one-quater'>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={meme} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Meme Bank</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
    </div>
  </div>
</div>
    </div>
    <div className='column is-one-quater'>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={liveSus} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Live Sustainably</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
    </div>
  </div>
</div>
    </div>

        </div>
    )
}

export default Projects
