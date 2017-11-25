import React from 'react';
import { Link, Router } from 'react-router-dom';
import NavigationHeader from './navigation_header';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(NavigationHeader);