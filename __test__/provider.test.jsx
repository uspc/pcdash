import renderer from 'react-test-renderer';
import Provider from '../app/components/Provider'
import React from 'react';


test('Create provider instance', () => {
    const tree = renderer.create(<Provider></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
    //expect(tree).toContain('flux');
});