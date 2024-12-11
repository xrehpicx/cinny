import React from 'react';
import { Box, config } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import CinnySVG from '../../../../public/res/xclerator.png';

export function WelcomePage() {
  return (
    <Page>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
        <PageHeroSection>
          <PageHero
            icon={<img width="70" height="70" src={CinnySVG} alt="Cinny Logo" />}
            title="Welcome to xcelerator matrix"
            subTitle={<span>Build with the xcelerator matrix community in mind.</span>}
          >
            {/* <Box justifyContent="Center"> */}
            {/*   <Box grow="Yes" style={{ maxWidth: toRem(300) }} direction="Column" gap="300"> */}
            {/*     <Button */}
            {/*       as="a" */}
            {/*       href="https://vtu.xcelerator.co.in" */}
            {/*       target="_blank" */}
            {/*       rel="noreferrer noopener" */}
            {/*     > */}
            {/*       <Text as="span" size="B400" truncate> */}
            {/*         xcelerator */}
            {/*       </Text> */}
            {/*     </Button> */}
            {/*   </Box> */}
            {/* </Box> */}
          </PageHero>
        </PageHeroSection>
      </Box>
    </Page>
  );
}
