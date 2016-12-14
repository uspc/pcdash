//import renderer from 'react-test-renderer';
//import {App} from '../app/components/App.jsx';
//import Lane from '../app/components/Lane';
//import React from 'react';
//
//test('Sample jest invoke testing', () => {
//    expect(1).toBe(1);
//});
//
//test('Link renders correctly', () => {
//    const tree = renderer.create(<App lanes={[]}/>).toJSON();
//    expect(tree).toMatchSnapshot();
//});



import renderer from 'react-test-renderer';
import App from '../app/components/App.jsx';
import Lane from '../app/components/Lane';
import React from 'react';
import Provider from '../app/components/Provider'

test('Sample jest invoke testing', () => {
    expect(1).toBe(1);
});

test('Link renders correctly', () => {
    const tree = renderer.create(<Provider><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});


