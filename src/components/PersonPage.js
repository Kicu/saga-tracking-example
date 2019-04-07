import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPeople } from '../redux/actions';

class PersonPage extends Component {
  componentDidMount() {
    this.props.fetchPeople(this.props.personId);
  }

  render() {
    if (!this.props.person) {
      return null;
    }

    return (
      <div>
        <div>
          <span>Name:</span>
          {this.props.person.name}
        </div>
        <div>
          <span>Height: </span>
          {this.props.person.height}
        </div>
        <div>
          <span>Weight: </span>
          {this.props.person.mass}
        </div>
        <div>
          <span>Hair color: </span>
          {this.props.person.hair_color}
        </div>
        <div>
          <span>Skin color: </span>
          {this.props.person.skin_color}
        </div>
        <div>
          <span>Eye color: </span>
          {this.props.person.eye_color}
        </div>
        <div>
          <span>Year of birth: </span>
          {this.props.person.birth_year}
        </div>
        <div>
          <span>Gender: </span>
          {this.props.person.gender}
        </div>
      </div>
    );
  }
}

PersonPage.propTypes = {
  personId: PropTypes.string,
  person: PropTypes.object
};

function mapState(state, ownProps) {
  const {
    match: { params }
  } = ownProps;

  const person = state.people.find(p => p.id === params.id);

  return {
    personId: params.id,
    person
  };
}

export default connect(
  mapState,
  { fetchPeople }
)(PersonPage);
