import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPeople } from '../redux/actions';

class ListPage extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <ul>
        {this.props.people.map(p => (
          <li key={p.id}>
            <Link to={`/person/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

ListPage.propTypes = {
  people: PropTypes.array
};

function mapState(state) {
  return { people: state.people };
}

export default connect(
  mapState,
  { fetchPeople }
)(ListPage);
