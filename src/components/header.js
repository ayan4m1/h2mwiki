import { Link } from 'gatsby';
import { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import TitleIcon from './titleIcon';

export default function Header() {
  return (
    <Fragment>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">H2M Wiki</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-3">
              <Nav.Link as={Link} to="/faq">
                <TitleIcon icon={faQuestionCircle} title="FAQ" />
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                href="https://discord.com/invite/h2m-mod"
                rel="noopener noreferrer"
              >
                <TitleIcon icon={faDiscord} title="Discord" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
