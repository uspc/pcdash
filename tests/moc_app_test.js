import React from 'react';
import expect from 'expect';
import {mount,shallow} from 'enzyme';
import {App} from '../app/components/App.jsx';
import Provider from '../app/components/Provider';
import Lane from '../app/components/Lane';
import LaneActions from '../app/actions/LaneActions';

describe('Testing PC App',()=>{
    it('check footer',()=>{
       const app = mount(<App lanes={[]}/>);
        expect(app.contains(<div className="navbar-fixed-bottom">© 2016 Buildit. All rights reserved.</div>)).toEqual(true);
    });

    it('check add lane',()=>{
        const app = mount(<App lanes={[]} LaneActions={LaneActions}/>);
        app.find('#a1').simulate('click');
    });
})

