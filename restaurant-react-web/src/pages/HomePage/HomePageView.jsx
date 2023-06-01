import React from 'react';
import { WelcomeSection, AboutUsSection } from 'components/layout/Home';
import { PageWrapper } from 'components/modules/wrapper';
function HomePageView() {
  return (
    <>
      <PageWrapper>
        <div>
          <WelcomeSection />
          <AboutUsSection />
        </div>
      </PageWrapper>
    </>
  );
}

export default HomePageView;
