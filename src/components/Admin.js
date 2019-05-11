import React from 'react';
import { withFirebase } from './Firebase';

class Admin extends React.Component {
  state = {
    loading: true,
    users: []
  };

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div className="container">
        <h1>ADMIN PAGE</h1>

        {this.state.loading && <div>Loading...</div>}

        <UserList users={this.state.users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <strong>Username:</strong> {user.username}
        <ul>
          <li>
            <strong>Database ID:</strong> {user.uid}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
        </ul>
      </li>
    ))}
  </ul>
);

export default withFirebase(Admin);
