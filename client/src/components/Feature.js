import React, { Component } from 'react';
import { requireAuth } from './requireAuth';

class FeatureContainer extends Component {
  render() {
    return <div>This is the feature!</div>;
  }
}
const Feature = requireAuth(FeatureContainer);
export { Feature };
