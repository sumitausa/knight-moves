import React from 'react';
import Container from 'react-bootstrap/Container';
import { withFirebase } from './Firebase';

class UsersEditContainer extends React.Component {
  state = {
    users: {},
    isLoading: true
  };

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      const users = snapshot.val();

      this.setState({
        users: users,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
          <Container>
            <h3>Users</h3>
            <p className="font-weight-bold">
              Due to the way authentication works, you are not actually able to
              edit any users from this page.
            </p>
            <p>
              It is provided as a convenience method for your security. You
              should see exactly two users on this page (yourself, and Tyrel).
              If you see more users, you have a security issue, and should
              contact Tyrel immediately. You're not processing any payments or
              anything, so it's not like you would face a lawsuit or anything,
              but no one should be able to sign up. Any one who HAS signed up
              can edit the site.
            </p>
            <ul>
              {Object.keys(this.state.users).map(id => {
                return (
                  <li key={id}>
                    Username: {this.state.users[id].username}
                    <ul>
                      <li>Email: {this.state.users[id].email}</li>
                      <li>User ID: {id}</li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(UsersEditContainer);
