import "../../assets/css/about.css";
import aplimojaniAbt from "../../assets/images/apli_mojani_abt.png";

function About() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">

                        <h1 className="MainHeading text-center pt-5"><span className="cstEngFont fw-bold">Aapli Mojani</span> म्हणजे काय ?</h1>

                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>

                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center py-4">

                            <div className="col-12 col-lg-6 col-xl-5">
                                <img src={aplimojaniAbt} className="img-fluid rounded" alt="Apli Mojani" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">

                                <h5><span className="cstEngFont fw-bold">Aapli Mojani</span> ही नागरिकांसाठी असलेली सहाय्य सेवा आहे जी
                                    शासकीय मोजणी अर्ज प्रक्रिया समजून घेणे व योग्य अर्ज भरण्यास मदत करते.
                                </h5>

                                <p className="font-weight-bold fs-5 fst-italic text-danger">
                                    <i className="fa-solid fa-triangle-exclamation fs-5"></i>आम्ही शासकीय संस्था नाही. फक्त अर्ज व प्रक्रियेसाठी मार्गदर्शन करतो.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;