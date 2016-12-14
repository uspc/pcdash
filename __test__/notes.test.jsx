import renderer from 'react-test-renderer';
import React from 'react';
import Notes from '../app/components/Notes';
import Provider from '../app/components/Provider';
import {DragDropContext} from 'react-dnd';
import ReactTestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';



test('Testing Notes - Initial', () => {
    var mapNotes = [{id:1,editing:true,task:"one"},{id:2,editing:true,task:"two"}];
    const NotesContent = wrapTestContext(Notes);
    const tree = renderer.create(<NotesContent notes={mapNotes}></NotesContent>).toJSON();
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