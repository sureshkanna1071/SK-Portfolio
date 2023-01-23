import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import { Layout } from './components/layout/Layout';
import { Section } from './styles/GlobalComponents';
import Theme from './styles/theme';

function App() {
  return (
      <Theme>
        <Layout>
          <Section grid>
            <Hero />
          </Section>
          <Technologies />
          <Projects />
          <Timeline />
        </Layout>
      </Theme>
  );
}

export default App;
