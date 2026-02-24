import "../../assets/css/arjform.css";
import bannerImg from "../../assets/images/arjBG.png";

function ArjForm() {
// WhatsApp Handler
  const handleWhatsApp = () => {
    
    const message = `नमस्कार,\n\nमला माझा सरकारी मोजणीसाठी अर्ज भरायचा आहे.`;
    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


    return (

        <section className="cstmBG">

            <h1 className="MainHeading text-center arj-heading">सेवा माहिती व उपलब्धता</h1>
                        <div className="bar mb-4 mb-md-3">
                            <div className="bar-fill"></div>
                        </div>
                <div className="arj-split-section">
                    <div className="container-fluid p-0 arjFullWidth">
                        <div className="row g-0 align-items-center">

                            {/* LEFT IMAGE */}
                            <div className="col-lg-6 arj-image-side mt-0"
                                style={{ backgroundImage: `url(${bannerImg})` }}
                            ></div>

                            {/* RIGHT SIDE BOX */}
                            <div className="col-lg-6 arj-form-side d-flex align-items-center justify-content-center mt-0">

                                <div className="banner-wrapper-box mt-2 mt-md-0">

                                    <div className="info-header fs-3">
                                        🔶 पुणे जिल्ह्यात सेवा सुरू आहे!
                                    </div>

                                    <ul className="info-list">
                                        <li>महाराष्ट्रातील पुणे जिल्ह्यासाठी अर्ज सुविधा उपलब्ध 🚀</li>
                                        <li>फक्त तुमचा तालुका निवडा आणि लगेच अर्ज करा!</li>
                                    </ul>

                                    <div className="info-stat">📊 55,486+ अर्ज पूर्ण</div>
                                    <div className="info-stat">✅ 98% ग्राहक समाधान</div>
                                    <div className="info-stat">📞 7387484615</div>

                                    <p className="timing">🕒 सकाळी 10 ते सायं 7</p>

                                    <button className="btn apply-btn w-100" onClick={handleWhatsApp}>
                                        👉 अर्ज करा
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
        </section>                  
    )
}

export default ArjForm;