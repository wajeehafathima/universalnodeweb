import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { HeaderMenu } from '../components/HeaderMenu';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { Footer } from '../components/Footer'
import '@mantine/core/styles.css'; // Import Mantine styles


//https://mantine.dev/colors-generator/?color=C91A25
const theme: MantineThemeOverride = {
  colors: {
    myColor: [
      '#ffeaec',
      '#fdd4d6',
      '#f4a7ac',
      '#ec777e',
      '#e64f57',
      '#e3353f',
      '#e22732',
      '#c91a25',
      '#b31220',
      '#9e0419',
    ],
  },
};



function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const isAppShellRoute = router.pathname.startsWith('/products');
  return (
    <MantineProvider theme={theme}>
      {isAppShellRoute ? (
          <Component {...pageProps} />
        ) : (
          <div>
            <HeaderMenu></HeaderMenu>
            <Component {...pageProps} />
            <Footer></Footer>
          </div>
        )}
    </MantineProvider>
  );
}

export default App;
