import { useEffect } from "react";
import { Carousel } from "bootstrap";
import '../../assets/css/home.css';
import mojaniLG from "../../assets/images/mojniLG.PNG";
import graminLG from "../../assets/images/graminLG.png"

function Home(){

    useEffect(() => {
        const el = document.getElementById("homeBrandCarousel");
        if (el) {
            new Carousel(el, {
            interval: 3000,
            ride: "carousel",
            });
        }
    }, []);

    const handleWhatsApp = () => {

    const message = `नमस्कार,\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;
    //const message = `नमस्कार,\n\nनाव: ${//name}\nमोबाईल: ${//mobile}\n\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;

    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

    return(
        <>
        <section className="d-flex align-items-center homeBG">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-8 col-sm-6 text-center p-0">

                        <div
                        id="homeBrandCarousel"
                        className="carousel slide brandWrap animated-label" //carousel slide brandWrap animated-label
                        data-bs-ride="carousel"
                        data-bs-interval="5000"
                        >
                        <div className="carousel-inner">

                            {/* ===== SLIDE 1 : Aapli Mojani ===== */}
                            <div className="carousel-item active">
                                        <h1 className="homeHeading hmheadful hmbar pt-2 pt-md-0">
                                            <img className="mojaniLG" src={mojaniLG} alt="ApliMojani" />
                                            <span className="MainHeading cstEngFont AapliMojaniText F60">
                                            Aapli Mojani
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

                            {/* ===== SLIDE 2 : PM Awas Yojana ===== */}
                             <div className="carousel-item text-start text-sm-center">
                                    <h1 className="hmbar pt-2 pt-md-0">
                                         <img className="graminLG" src={graminLG} alt="ApliMojani" />
                                        <span className="MainHeading cstEngFont AapliMojaniText F40 F2ndSlideMainHdng">प्रधानमंत्री आवास योजना –  तुमच्या स्वतःच्या घराचे स्वप्न आता साकार
                                            </span>
                                    </h1>

                                    <h2 className="homeHeading hmbar tagline fw-bold F25 F2ndSlideSubHdng ms-2 ms-md-0">
                                        ग्रामीण व शहरी लाभार्थ्यांसाठी अर्ज,<br className="d-block d-md-none" /> पात्रता तपासणी व संपूर्ण मार्गदर्शन –
                                        <br className="d-block d-md-none" />
                                        जलद आणि विश्वासार्ह सेवा
                                    </h2>

                                    <h5 className="homeHeading fw-bold F20 F2ndSlideAnudan ms-2 ms-md-0">
                                        सरकारी अनुदान ₹1.20 लाख ते ₹2.50 लाख पर्यंत
                                    </h5>

                                    <small className="fw-bold F15">
                                            <span className="text-success ms-1 ms-md-0">✔</span> ग्रामीण व शहरी दोन्ही योजना उपलब्ध |{" "} <br className="d-block d-md-none" />
                                            <span className="text-success ms-1 ms-md-0">✔</span> अर्ज भरणे + डॉक्युमेंट चेक + फॉलोअप
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

                        {/* <div className="d-flex flex-column flex-sm-row gap-2 mt-3 justify-content-center m-4 m-md-0">
                            <button className="btn btn-success cstEngFont btn-sm px-3 fs-6" onClick={handleWhatsApp}><i className="fa-brands fa-whatsapp me-1 HmIconSize"></i> WhatsApp करा</button>
                            <a href="tel:7387484615" className="btn btn-light text-dark cstEngFont btn-sm px-3 fs-6"><i className="fa-solid fa-phone me-1 HmIconSize"></i> संपर्क करा</a>
                        </div> */}

                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default Home;