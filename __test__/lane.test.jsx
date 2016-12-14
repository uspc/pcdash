import React from 'react';
import renderer from 'react-test-renderer';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import Lane from '../app/components/Lane.jsx';
import Provider from '../app/components/Provider';



test('Testing Lane - Initial', () => {
    var laneNotes = [{id:1,notes:"one"},{id:2,notes:"two"}];
    const LaneContent = wrapTestContext(Lane);
    const tree = renderer.create(<Provider><LaneContent lane={laneNotes}/></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});


// Option 2 wrapping using return type
function wrapTestContext(DecoratedComponent){
    return DragDropContext (TestBackend)(
        React.createClass({
            render(){
                return <DecoratedComponent {...this.props} />;
            }
        })
    );
}