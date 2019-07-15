import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from  './actions/user-actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser() {
    this.props.onUpdateUser('Sammy');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sup</h1>
          <div onClick={this.onUpdateUser}><p>Update user</p></div>
          <br/>
          {this.props.user}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {

};

export default connect(mapStateToProps)(App);
