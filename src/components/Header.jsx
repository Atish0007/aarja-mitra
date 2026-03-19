import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import apli_mojaniLogo from "../assets/images/apli_mojaniLogo.png";
import "../assets/css/header.css";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";


function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const offcanvasRef = useRef(null);
  const offcanvasInstance = useRef(null);


  const handleWhatsApp = () => {

    // Google Ads Conversion Trigger
    // if (window.gtag) {
    //   window.gtag('event', 'conversion', {
    //     'send_to': 'AW-17963207181/AbCdEf123'
    //   });
    // }

    const message = `नमस्कार,\n\nमला माझा सरकारी मोजणीसाठी अर्ज भरायचा आहे.`;
    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 300 && !hasTriggered) {
        setIsSticky(true);
        setHasTriggered(true);
      }

      if (currentScroll <= 300) {
        setIsSticky(false);
        setHasTriggered(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasTriggered]);

  //toggler btn
  const collapseInstance = useRef(null);

  useEffect(() => {
    const collapseEl = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler.d-lg-none");

    if (!collapseEl || !toggler) return;

    // Create Bootstrap Collapse instance
    collapseInstance.current = new Collapse(collapseEl, {
      toggle: false,
    });

    const handleShown = () => {
      toggler.classList.add("active");
      toggler.setAttribute("aria-expanded", "true");
    };

    const handleHidden = () => {
      toggler.classList.remove("active");
      toggler.setAttribute("aria-expanded", "false");
    };

    collapseEl.addEventListener("shown.bs.collapse", handleShown);
    collapseEl.addEventListener("hidden.bs.collapse", handleHidden);

    return () => {
      collapseEl.removeEventListener("shown.bs.collapse", handleShown);
      collapseEl.removeEventListener("hidden.bs.collapse", handleHidden);
    };
  }, []);



  /* ================= Init Offcanvas ONCE ================= */
  useEffect(() => {
    if (offcanvasRef.current) {
      offcanvasInstance.current = new Offcanvas(offcanvasRef.current, {
        backdrop: true,
        scroll: false,
      });
    }
  }, []);

  /* ================= Close sidebar on route change ================= */
  useEffect(() => {
    if (offcanvasInstance.current) {
      offcanvasInstance.current.hide();
    }

    // Force remove leftover backdrop
    document.querySelectorAll(".offcanvas-backdrop").forEach(el => el.remove());
    document.body.classList.remove("offcanvas-backdrop", "modal-open");
  }, [location]);

  const openSidebar = () => {
    offcanvasInstance.current?.show();
  };

  const closeSidebar = () => {
    offcanvasInstance.current?.hide();
  };

  useEffect(() => {
    // Close mobile collapse properly
    collapseInstance.current?.hide();

    // Close desktop sidebar
    offcanvasInstance.current?.hide();

  }, [location]);


  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar navbar-bg ${isSticky ? "sticky-nav" : ""}`}>
        <div className="container">

          {/* LOGO */}
          <Link className="aplimojani-brand text-decoration-none" to="/">
            <img src={apli_mojaniLogo} className="" alt="Apli-Mojani" height="90" />
          </Link>

          {/* TOGGLER + CALL BUTTON WRAPPER */}
          <div className="d-flex align-items-center gap-3 ms-auto">

            {/* CALL BUTTON */}
            <button type="button"
              className="btn btn-success btn-md align-items-center px-2 px-lg-4 py-1 py-lg-2 fs-6 fs-lg-6" //d-none d-sm-inline-flex
              onClick={handleWhatsApp}
            >
              <i className="fa-solid fa-phone mb-1 me-2"></i> अर्ज करा
            </button>

            <button
              className="navbar-toggler custom-toggler d-lg-none"
              type="button"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => collapseInstance.current?.toggle()}
            >
              <div className="toggler-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>


            {/* DESKTOP TOGGLER (NEW) */}
            <button
              className="navbar-toggler custom-toggler d-none d-lg-block"
              type="button"
              onClick={openSidebar}
            >
              <div className="toggler-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* MOBILE MENU (SAME AS BEFORE) */}
          <div className="collapse navbar-collapse d-lg-none ms-4" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link to="/" className={isActive("/")}>मुखपृष्ठ</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className={isActive("/about")}>आपली मोजणी</Link>
              </li>

              <li className="nav-item">
                <Link to="/whoapply" className={isActive("/whoapply")}>अर्जदार</Link>
              </li>

              <li className="nav-item">
                <Link to="/problems" className={isActive("/problems")}>समस्या</Link>
              </li>

              <li className="nav-item">
                <Link to="/contactform" className={isActive("/contactform")}>संपर्क</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* DESKTOP SIDEBAR (NEW) d-none d-lg-block */}

      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-start cstmSideBarColr" /* Menu set left right = start end*/
        tabIndex="-1"
        id="desktopSidebar"
      >
        <div className="offcanvas-header text-white">
          <h5 className="offcanvas-title ms-5"></h5> {/* मेनू*/}
          <button
            type="button"
            className="btn-close bg-white"
            onClick={closeSidebar}
          ></button>
        </div>

        <div className="offcanvas-body ms-5">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/" className={isActive("/")} onClick={closeSidebar}>
                मुखपृष्ठ
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className={isActive("/about")} onClick={closeSidebar}>
                आपली मोजणी
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/whoapply" className={isActive("/whoapply")} onClick={closeSidebar}>
                अर्जदार
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/problems" className={isActive("/problems")} onClick={closeSidebar}>
                समस्या
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contactform" className={isActive("/contactform")} onClick={closeSidebar}>
                संपर्क
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
