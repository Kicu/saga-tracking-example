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
      <article className="person-page message is-medium">
        <div className="message-header">
          <p>{this.props.person.name}</p>
        </div>
        <table className="table is-striped is-fullwidth is-hoverable">
          <tbody>
            <tr>
              <td>Height</td>
              <td>
                <strong>{this.props.person.height}</strong>
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                <strong>{this.props.person.mass}</strong>
              </td>
            </tr>
            <tr>
              <td>Hair color</td>
              <td>
                <strong>{this.props.person.hair_color}</strong>
              </td>
            </tr>
            <tr>
              <td>Skin color</td>
              <td>
                <strong>{this.props.person.skin_color}</strong>
              </td>
            </tr>
            <tr>
              <td>Eye color</td>
              <td>
                <strong>{this.props.person.eye_color}</strong>
              </td>
            </tr>
            <tr>
              <td>Year of birth</td>
              <td>
                <strong>{this.props.person.birth_year}</strong>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <strong>{this.props.person.gender}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
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
