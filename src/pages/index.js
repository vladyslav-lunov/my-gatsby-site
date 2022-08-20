import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Home'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
