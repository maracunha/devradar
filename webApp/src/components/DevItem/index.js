import React from 'react';
import './styles.css';

function DevItem({ dev, removeDev },) {

  return (
    <li className="dev-item">
        <button>
          <i className="material-icons update">drag_indicator</i>
        </button>
        <button>
          <i className="material-icons garbage">delete_forever</i>
        </button>
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(',')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`http://github.com/${dev.github_username}`}>Acessar o Perfil do Github</a>
    </li>
  );
};

export default DevItem;
