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
      <div className="people-list">
        <div className="panel is-size-5">
          <p className="panel-heading">Characters</p>
          {this.props.people.map(p => (
            <Link key={p.id} className="panel-block" to={`/person/${p.id}`}>
              <span className="panel-icon">
                <i className="fas fa-user" aria-hidden="true" />
              </span>
              {p.name}
            </Link>
          ))}
        </div>
      </div>
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
