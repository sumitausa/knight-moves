import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const EditImagesPage = props => {
  return (
    <React.Fragment>
      <h1>Editing Images</h1>
      <p>
        For performance reasons, we want to put our images directly in the
        project directory. Therefore, in order to edit them, we need to do a bit
        of work directly on the command line.
      </p>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Initial (One Time) Setup
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h4>Install Node.js</h4>
              <p>
                Pretty straightforward. Download here:{' '}
                <a href="https://nodejs.org/en/download/">
                  https://nodejs.org/en/download/
                </a>
              </p>
              <p>
                When you're done, open a command line/terminal and type in{' '}
                <code>npm --version</code> and <code>node --version</code> to
                verify the installation.
              </p>
              <h4>Set up Git</h4>
              <p>
                Knight Moves Cafe has been set up with a Github account. To
                interact with it, we need to download a software called Git.
                Download here:
                <a href="https://git-scm.com/downloads">
                  https://git-scm.com/downloads
                </a>
              </p>

              <p>
                Once you've done that, you will need to generate an SSH key
                (this is for securely transferring files). These have a one to
                one relation with the device they are used on, so you will need
                to do this every time you want to edit the site on a new
                computer. Luckily, guides for this already exist. Be sure to use
                knightmovescafe@gmail.com when setting up the key.
              </p>
              <ol>
                <li>
                  <a href="https://help.github.com/en/articles/checking-for-existing-ssh-keys">
                    Make sure you don't already have an existing SSH key.
                  </a>
                </li>
                <li>
                  <a href="https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent">
                    Generate a new SSH key
                  </a>
                </li>
                <li>
                  <a href="https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account">
                    Add the SSH key to your account
                  </a>
                </li>
              </ol>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Get a local copy of the website
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Navigate to the repository on GitHub:{' '}
                <a href="https://github.com/Tyresius92/knight-move">
                  https://github.com/Tyresius92/knight-moves
                </a>
                .
              </p>
              <p>
                On the right hand side, you should see a green button that says,
                "Clone or download". Click the button, and a dropdown will open.
                Make sure it says "Clone with SSH". If it doesn't, click the
                link that says, "Use SSH". Copy the link to your clipboard.
              </p>
              <p>
                If on a Windows computer, open Git Bash, or just the Command
                Line if you didn't download Git Bash. On a Mac or Linux
                computer, open Terminal.
              </p>
              <p>
                In the terminal, first type <code>git --version</code>. If you
                get a message about git not being recognized, return to the
                initial setup. If you get a version number, proceed.
              </p>
              <p>
                Navigate to where you want to copy the files on your computer.
                You can type <code>ls</code> on a Mac/Linux computer, or{' '}
                <code>dir</code> on a PC, to see everything in your current
                directory. To go into a directory, type{' '}
                <code>cd [directory name]</code>. To go up a level, enter{' '}
                <code>cd ..</code>
              </p>
              <p>
                Enter <code>git clone [link we copied from GitHub]</code>.
              </p>
              <p>The files will download.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Changing out images
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                On the command line, navigate to the knight-moves directory, and
                enter <code>git pull</code>. This will pull in the latest
                version of the codebase.
              </p>
              <p>
                In Windows Explorer/Finder, navigate to the folder, and then go
                into <code>public/imgs</code>. You should see all the images on
                your site. You can replace any or all of them.{' '}
                <strong>
                  Be sure that the name of the new files match the old files
                  exactly.
                </strong>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Preview your changes
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                From the root of the project (i.e., from inside the top level
                "knight-moves" directory, type in <code>npm install</code>.
              </p>
              <p>
                Wait for that to finish, then enter <code>npm run start</code>.
                That should open a new window in Chrome/Safari/your default
                browser. Click around and make sure everything still seems to
                work, and looks the way you want it to.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Pushing and verifying your changes
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                Back on the command line, enter <code>git status</code>. You
                should see a list of all the files you changed. Make sure that
                ONLY those files you meant to change have been changed.
              </p>
              <p>
                If an extra file is showing up, type in{' '}
                <code>
                  git checkout [filename, as it appears in the git status list]
                </code>
              </p>
              <p>
                If everything looks correct, type in <code>git add .</code>
              </p>
              <p>
                Then, enter{' '}
                <code>
                  git commit -m "a meaningful message about the change you made"
                </code>
              </p>
              <p>
                Finally, enter{' '}
                <code>git push -u origin master:[branch_name]</code>, where
                [branch_name] is some meaningful description of the work you
                did. These should always be unique. An easy way to do that would
                be to append the date. For instance, if I were updating images,
                I would enter{' '}
                <code>git push -u origin master:update_images_08042019</code>
              </p>
              <p>
                After hitting enter, you'll be given a link in a message saying
                something like, "Create a pull request for [branch_name] on
                GitHub by visiting: [link]" Put that link in your browser, and
                enter any additional details you are asked for, then click
                "Create Pull Request."
              </p>
              <p>
                You will be taken to a page with a few running status checks.
              </p>
              <img
                src="/imgs/statusCheck.jpg"
                alt="CircleCI status integration"
                width="500px"
              />
              <p>
                Wait for them to finish, then click the "Merge Pull Request"
                button. If the status checks fail, click into them using the
                "Details" link, and see what went wrong. Feel free to contact me
                if you have any trouble.
              </p>
              <p>
                The changes will not be deployed until midnight that evening.
                That time can be changed, but just check the changes the
                following morning. If all looked okay when you ran{' '}
                <code>npm run start</code> then everything should go smoothly.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
};

export default EditImagesPage;
