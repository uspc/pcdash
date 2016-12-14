import React from 'react';
import expect from 'expect';
import {mount,shallow} from 'enzyme';
import {App} from '../app/components/App.jsx';

import LaneActions from '../app/actions/LaneActions';

describe('Testing PC App',()=>{

    it('check if app mounder',()=>{
       const app = mount(<App lanes={[]}/>);
        //expect(app.prototype.componentDidMount.calledOnce).to.equal(true);
    });


    it('check footer',()=>{
       const app = mount(<App lanes={[]}/>);
        expect(app.contains(<div className="navbar-fixed-bottom">© 2016 Buildit. All rights reserved.</div>)).toEqual(true);
    });

    it('check add lane',()=>{
        const app = mount(<App lanes={[]} LaneActions={LaneActions}/>);
        app.find('#a1').simulate('click');
    });
})

