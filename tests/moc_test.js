import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PageHeader from '../app/components/PageHeader'


function setup(){
    let renderer = TestUtils.createRenderer();
    renderer.render(<PageHeader/>);
    let output = renderer.getRenderOutput();

    return{
        output,
        renderer
    }
}

describe('testcase', function() {
    it('testing expect default', function() {
        expect(null).toNotExist();
    });


    it('testing component pageheader',()=>{
           const {output} = setup();
            expect(output.type).toBe('div');
        });
});
