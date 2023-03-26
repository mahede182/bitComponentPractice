/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import ViewPractice from '../components/BasicComponentPractice';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('render view component.',()=>{
  renderer.create(<ViewPractice />);
})