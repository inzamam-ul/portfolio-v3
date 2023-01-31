import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import Preloader from "@/components/Pre";
import Footer from "@/components/Footer/Footer";
import Social from "@/components/social";
import Email from "@/components/email";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [load, upadateLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleG = () => {
    const allG = document.querySelectorAll("g");
    if (allG.length > 0) {
      allG.forEach((link) => {
        link.removeAttribute("dataName");
        link.setAttribute("dataname", "Folder On");
      });
    }
  };

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };
  useEffect(() => {
    if (load) {
      return;
    }

    if (router.asPath) {
      const id = router.asPath.substring(2); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [load]);

  return (
    <>
      <Preloader load={load} />

      {!load && (
        <>
          <NavBar />
          <Social isHome={true} />
          <Email isHome={true} />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
