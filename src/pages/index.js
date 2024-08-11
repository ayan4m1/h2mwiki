import { Container } from 'react-bootstrap';

import SEO from 'components/seo';
import Layout from 'components/layout';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" description="Home page for H2MWiki" />
      <Container>
        <h4 className="display-4">Welcome to H2MWiki!</h4>
        <p>
          For now, please read the <Link to="/faq">FAQ</Link> page for all
          pertinent information.
        </p>
      </Container>
    </Layout>
  );
}
