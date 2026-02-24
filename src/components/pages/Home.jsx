import { useEffect } from "react";
import { Carousel } from "bootstrap";
import '../../assets/css/home.css';
import mojaniLG from "../../assets/images/mojniLG.PNG";

function Home() {


    useEffect(() => {
        const el = document.getElementById("homeBrandCarousel");
        if (!el) return;

        const carousel = new Carousel(el, {
            interval: 5000,
            ride: "carousel",
            pause: false, // IMPORTANT: disable default hover pause
        });

        /* ===== DESKTOP EVENTS ===== */
        el.addEventListener("mouseenter", () => carousel.pause());
        el.addEventListener("mouseleave", () => carousel.cycle());

        /* ===== MOBILE EVENTS ===== */
        el.addEventListener("touchstart", () => carousel.pause(), { passive: true });
        el.addEventListener("touchend", () => carousel.cycle());
        el.addEventListener("touchcancel", () => carousel.cycle());

        return () => {
            carousel.dispose();
        };
    }, []);


    const handleWhatsApp = () => {

        const message = `नमस्कार,\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;
        const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <section className="d-flex align-items-center homeBG">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-md-8 col-sm-6 text-center p-0">

                            <div id="homeBrandCarousel" className="carousel slide brandWrap animated-label">
                                <div className="carousel-inner">

                                    {/* ===== SLIDE 1 : Aapli Mojani ===== */}
                                    <div className="carousel-item active">
                                        <h1 className="homeHeading hmheadful hmbar pt-2 pt-md-0">
                                            <img className="mojaniLG" src={mojaniLG} alt="ApliMojani" />
                                            <span className="MainHeading cstEngFont AapliMojaniText F60">
                                                आपली मोजणी
                                            </span>
                                        </h1>

                                        <h2 className="homeHeading hmbar tagline F40">
                                            शासकीय मोजणी अर्जासाठी विश्वासार्ह सहाय्य
                                        </h2>

                                        <p className="fw-bold F25">
                                            शेतजमीन | प्लॉट | वडिलोपार्जित जमीन
                                        </p>

                                        <h5 className="homeHeading tagline F20">
                                            Online अर्ज • कागदपत्र मार्गदर्शन • Status सहाय्य
                                        </h5>

                                        <small className="fw-bold F15">
                                            <span className="text-success">✔</span> Citizen Assistance Service |{" "}
                                            <span className="text-success">✔</span> Maharashtra Wide
                                        </small>
                                    </div>

                                </div>
                            </div>

                            <div className="row justify-content-center mt-3 d-none d-sm-block">
                                <div className="col-12 col-md-10 col-lg-8">
                                    <div className="d-flex flex-column flex-md-row gap-2 justify-content-center m-4 m-md-0">
                                        <button className="btn btn-success cstEngFont btn-sm px-4 fs-6" onClick={handleWhatsApp}>
                                            <i className="fa-brands fa-whatsapp me-1 HmIconSize"></i>
                                            WhatsApp करा
                                        </button>
                                        <a href="tel:7387484615" className="btn btn-light text-dark cstEngFont btn-sm px-4 fs-6">
                                            <i className="fa-solid fa-phone me-1 HmIconSize"></i>
                                            संपर्क करा
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;