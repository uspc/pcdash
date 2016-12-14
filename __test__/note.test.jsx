import renderer from 'react-test-renderer';
import React from 'react';
import Note from '../app/components/Note';
import Provider from '../app/components/Provider';
import {DragDropContext} from 'react-dnd';
import {renderIntoDocument} from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import assert from 'assert';

test('Testing Note', () => {

    const test = 'test';
    const NoteContent = wrapInTestContext(Note);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0">{test}</NoteContent>).toJSON();
    expect(tree).toMatchSnapshot();
    //expect(tree.children).toEqual([test]);
});

// Option 1 wrapping using decorator pattern
function wrapInTestContext(DecoratedComponent) {
    @DragDropContext(TestBackend)
    class TestContextContainer extends React.Component {
        render() {
            return <DecoratedComponent {...this.props} />;
        }
    }
    return TestContextContainer;
}

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