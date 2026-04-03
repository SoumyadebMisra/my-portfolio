import Navbar from '../components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
