import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://strange.frozenforest.us${asPath}`;
  const description = frontMatter.description || "Strange Bot Documentation";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/static/logo_white_small.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
    const { asPath } = useRouter();
    const arr = asPath.replace(/[-_]/g, ' ').split('/');
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    if (asPath === "/") {
        return {
            titleTemplate: `Strange Documentation`,
        }
    } 
}


const config: DocsThemeConfig = {
    logo: (
        <div
      style={{
          paddingLeft: '50px',
          lineHeight: '38px',
          background: "url('./static/logo_white_small.png') no-repeat left",
          backgroundSize: '64px',
          fontWeight: 550,
      }}
     >
      <p style={{marginLeft: "20px"}}> Strange Bot Documents</p>
    </div>
    ),
  chat: {
    link: 'https://discord.gg/B8XtAwdeVV',
  },
  head: useHead,
  footer: {
    text: 'Made with love by Darknessbless',
  },
  useNextSeoProps: useNextSeoProps,
}

export default config