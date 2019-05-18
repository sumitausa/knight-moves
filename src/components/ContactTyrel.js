import React from 'react';

const ContactTyrel = () => {
  return (
    <React.Fragment>
      <h3>Contact Tyrel for Edits</h3>
      <p>
        If you would like a new feature for the website, please contact Tyrel at
        your earliest convenience.
      </p>
      <p>
        He can be reached at{' '}
        <a href="mailto:tyrelclayton92@gmail.com">tyrelclayton92@gmail.com</a>.
      </p>
      <p>
        If he's still living in the States, his number should still be
        (386)-965-8338
      </p>
      <p>
        If he's been hit by a bus, or is just not responding, you should look
        for a software engineer who knows the following technologies. These
        should be enough for someone to get up and running. React and Firebase
        are the most important, while the third is more of a "nice to have."
      </p>
      <ul>
        <li>
          React
          <ul>
            <li>
              This is a frontend JavaScript framework, in which the entire front
              end is built.
            </li>
          </ul>
        </li>
        <li>
          Firebase
          <ul>
            <li>
              This is a backend as a service platform owned by Google. It
              contains the database and all hosting except the domain (which is
              on eNom).
            </li>
          </ul>
        </li>
        <li>
          React-Bootstrap
          <ul>
            <li>
              This is a secondary React framework which provides a number of
              pre-built React components. Anyone who knows React can pick it up
              in 5 minutes.
            </li>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ContactTyrel;
