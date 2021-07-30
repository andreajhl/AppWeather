import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
          <div id="closeIcon" className="row">
              <button onClick={onClose}  style={{borderRadius:'100%'}} className="btn btn-sm btn-danger">X</button>
          </div>
          <div className="card-body">
            <Link to={`/ciudad/${id}`} style={{textDecoration: 'none'}}>
            <h5 className="card-title" id={id}>{name}</h5>
            </Link>
            <div className="row">
              <div  style={{color:'#141E61'}} className="col-sm-4 col-md-4 col-lg-4">
                  <p>Min</p>
                  <p>{min}°</p>
              </div>
              <div style={{color:'#141E61'}} className="col-sm-4 col-md-4 col-lg-4">
                <p>Max</p>
                <p>{max}°</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
              </div>
            </div>
          </div>
      </div>
    );
};
