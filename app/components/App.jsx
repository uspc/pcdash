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


const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div className="container">
        <PageHeader/>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
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





