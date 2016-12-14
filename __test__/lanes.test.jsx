import renderer from 'react-test-renderer';
import React from 'react';
import Lanes from '../app/components/Lanes.jsx';
import Provider from '../app/components/Provider'
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';

        test('Testing Lanes - Initial', () => {
                var lanesmap = [{id:1,editing:true,name:"testing"}];
                const LanesContent = wrapTestContext(Lanes);
                const tree = renderer.create(<Provider><LanesContent lanes={lanesmap}/></Provider>).toJSON();
                expect(tree).toMatchSnapshot();
        });


function wrapTestContext(DecoratedComponent){
        return DragDropContext (TestBackend)(
            React.createClass({
                    render(){
                            return <DecoratedComponent {...this.props} />;
                    }
            })
        );
}