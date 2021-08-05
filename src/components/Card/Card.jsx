import React from 'react';
import '../../styles/Card.scss';
import {Link} from 'react-router-dom'

import {CloseCircleOutlined} from '@ant-design/icons'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
          <div id="closeIcon" className="row">
              <button onClick={onClose}  style={{backgroundColor:'transparent',border:'none'}} ><CloseCircleOutlined style={{color:'red'}} /></button>
          </div>
          <div className="card-body">
            <Link to={`/ciudad/${id}`} style={{textDecoration: 'none'}}>
            <h5 className="card-title" id={id}>{name}</h5>
            </Link>
            <div className="imgN">
                <img className="iconoClima" src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
              </div>
            <div className="row">
              <div  style={{color:'white'}} className="col-sm-4 col-md-4 col-lg-4">
                  <p>Min</p>
                  <p>{min}°</p>
              </div>
              <div style={{color:'white'}} className="col-sm-4 col-md-4 col-lg-4">
                <p>Max</p>
                <p>{max}°</p>
              </div>
            </div>
          </div>
      </div>
    );
};
