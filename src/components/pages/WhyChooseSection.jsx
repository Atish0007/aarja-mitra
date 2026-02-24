import "../../assets/css/WhyChooseSection.css";

export default function WhyChooseSection() {

    const mojaniList = [
        "Ambegaon Mojani",
        "Baramati Mojani",
        "Bhor Mojani",
        "Daund Mojani",
        "Haveli Mojani",
        "Indapur Mojani",
        "Junnar Mojani",
        "Khed Mojani",
        "Maval Mojani",
        "Mulshi Mojani",
        "Purandar Mojani",
        "Shirur Mojani",
        "Velhe Mojani",
        "Pune City Mojani",
        "Pimpri-Chinchwad Mojani"
    ];

    return (
        <section className="why-section py-4">
            <div className="container">
                <div className="why-card">

                    <h3 className="why-title text-center">
                        आपली मोजणी याठिकाणी उपलब्ध आहे
                    </h3>
                    <div className="bar">
                        <div className="bar-fill"></div>
                    </div>

                    <div className="row mt-4">
                        {mojaniList.map((item, i) => (
                            <div className="col-6 col-md-6 col-lg-4 mb-3" key={i}>
                                <div className="why-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span className="cstEngFont fw-bold fst-italic">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
