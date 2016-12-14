import renderer from 'react-test-renderer';
import React from 'react';
import LaneHeader from '../app/components/LaneHeader';
import Provider from '../app/components/Provider';
import {DragDropContext} from 'react-dnd';
import ReactTestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';



test('Testing Notes - Initial', () => {
    //var mapNotes = [{id:1,editing:true,task:"one"},{id:2,editing:true,task:"two"}];

    var laneitem = {editing:true,name:"testing"};
    const tree = renderer.create(<Provider><LaneHeader lane={laneitem}/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
