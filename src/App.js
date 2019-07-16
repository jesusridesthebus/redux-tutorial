import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from  './actions/user-actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sup</h1>
          <p className="App-intro">edit <code>src/App.js</code> and save to reload.</p>
          <input onChange={this.onUpdateUser} />
          {this.props.user}
          <br/>
          </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} {$props.aRandomProps}`
  }
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
