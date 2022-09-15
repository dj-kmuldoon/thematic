import { NewsKitProvider, Tag, newskitLightTheme, newskitDarkTheme, CardInset, Stack, Button, Block, Flag, Headline } from 'newskit';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <NewsKitProvider theme={newskitLightTheme} >
        <Tag
          href="http://example.com"
          size="medium">
          Tag Content
        </Tag>

        <CardInset
          href="#"
          media={{
            src: 'static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block spaceStack="space020">
            <Flag
              overrides={{
                spaceInset: 'spaceInsetSquish000',
                stylePreset: 'cardLabel',
                typographyPreset: 'utilityLabel010',
              }}
            >
            </Flag>
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                typographyPreset: 'editorialHeadline030',
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

        </CardInset>
        <Button size="large">Button</Button>
      </NewsKitProvider>
    )
  }
}

const cardSmallTags = () => (
  <Stack flow="horizontal-center" spaceInline="space040">
    <Tag size="small" href="#">
      News
    </Tag>
    <Tag size="small" href="#">
      Sport
    </Tag>
  </Stack>
);