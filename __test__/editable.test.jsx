import renderer from 'react-test-renderer';
import React from 'react';
import Editable from '../app/components/Editable';
import Provider from '../app/components/Provider';
import {DragDropContext} from 'react-dnd';
import ReactTestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import assert from 'assert';
import { shallow } from 'enzyme';


test('Testing Editable - Print input text', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0" editing={true}></NoteContent>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Testing Editable - check id value', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0" editing={true}></NoteContent>).toJSON();
    expect(tree.props.id).toBe("demo");
});

test('Testing Editable - check if rendered type is input', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0" editing={true}></NoteContent>).toJSON();
    expect(tree.type).toBe("input");
});

test('Testing Editable - check if rendered type is input', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0" editing={true}></NoteContent>).toJSON();
    expect(tree.props.className).toBe("edit");
});

test('Testing Editable - check if rendered type is input', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" value="Sample note" editing={true}></NoteContent>).toJSON();
    expect(tree.props.defaultValue).toBe("Sample note");
    expect(tree).toMatchSnapshot();
});

test('Testing Editable - Print Span with editing is zero', () => {
    const NoteContent = wrapInTestContext(Editable);
    const tree = renderer.create(<NoteContent id="demo" isDragging="0" isOver="0" editing={false}></NoteContent>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Testing Editable - Check enter key pressed', () => {
    //const rendererUtil = ReactTestUtils.createRenderer();
    //const component = rendererUtil.render(<Editable id="demo" isDragging="0" isOver="0" editing={true}></Editable>);
    //const result = rendererUtil.getRenderOutput();
    //expect(result).toBe('input');
    //tree.props.onBlur();
    //tree = component.toJSON();
    //expect(tree).toMatchSnapshot();

    //const wrapper = shallow(<Editable id="demo" isDragging="0" isOver="0" editing={true}/>);
    //expect(wrapper.find(Edit)).toBe('edit');

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