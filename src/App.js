import React, { Suspense, lazy } from 'react';
import Loader from './Components/Loader.jsx';
const LandingSection = lazy(() => import('./Sections/LandingSection'));
const AboutSection = lazy(() => import('./Sections/AboutSection'));
const ProjectSection = lazy(() => import('./Sections/ProjectSection'));
const ContactSection = lazy(() => import('./Sections/ContactSection'));
const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <LandingSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default App;
