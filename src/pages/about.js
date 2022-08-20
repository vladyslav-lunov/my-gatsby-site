import * as React from 'react';
import Layout from '../components/layout';

const About = () => (
  <main>
    <Layout pageTitle='About'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  </main>
);

export const Head = () => <title>About Me</title>;

export default About;
