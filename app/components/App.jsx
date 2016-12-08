import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PageHeader from './PageHeader';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { ContextMenu, MenuItem, ContextMenuLayer } from 'react-contextmenu';


// changed export const app to const app.. since we are not importing at app level i.e import {App} from App.js
const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (

      <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">BuildIt</a>
                  </div>
                  <ul className="nav navbar-nav">
                      <li className="active"><a id="a1" href="#" onClick={addLane}>Add Lane</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                  </ul>
              </div>
          </nav>

          <div className="test"/>

          <Lanes lanes={lanes} />

        {/*
         <div className="well-lg" onClick={addLane} >Add Lanes</div>
        <div id="my-context-menu">
            <MyComponent  />
            <MyContextMenu />
        </div>
         */}

        {/* <button className='add-lane' onClick={addLane}>+</button> */}


        <div className="navbar-fixed-bottom">© 2016 Buildit. All rights reserved.</div>
    </div>

  );
};


export default compose(
    DragDropContext(HTML5Backend),
    connect(({lanes}) => ({
      lanes
    }), {
      LaneActions
    })
)(App)





