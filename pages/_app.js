import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
