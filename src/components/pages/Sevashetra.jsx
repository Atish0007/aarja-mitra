import "../../assets/css/Sevashetra.css";
import gatno from "../../assets/images/seva/gatno.svg";
import aadharcard from "../../assets/images/seva/aadharcard.svg";
import sadhekagad from "../../assets/images/seva/sadhekagad.svg";
import phone from "../../assets/images/seva/phone.svg";

function Sevashetra() {

    const items = [
        { icon: gatno, text: "गट नंबर मागा", color: "warning" },
        { icon: aadharcard, text: "आधार कार्ड", color: "success" },
        { icon: sadhekagad, text: "साधे कागद / कागद", color: "warning" },
        { icon: phone, text: "मोबाईल नंबर", color: "primary" }
    ];

    return (

        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-12">
                        <h1 className="MainHeading text-center pt-5">सेवा माहिती व उपलब्धता</h1>
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>

                        <div className="premium-wrapper">

                            <div className="row g-3">

                                {/* LEFT BOX */}

                            </div>

                            <div className="row g-4 pt-5">

                                <div className="col-12 col-lg-6">
                                    <div className="premium-card">
                                        <div className="accent-strip"></div>

                                        <div className="card-content">
                                            <h3 className="cstmColor fs-3 fw-bold">सेवा उपलब्ध वेळ</h3>
                                            <h2 className="phone">80102 80102</h2>
                                            <p className="timing">सकाळी 9 ते सायं 7 (सोम - शनि)</p>

                                            <div className="price-badge">₹300 शुल्क</div>

                                            <ul className="feature-list">
                                                <li><span className='text-success'>✔</span> थेट संपर्क - दलाल नाही</li>
                                                <li><span className='text-success'>✔</span> संपूर्ण मार्गदर्शन</li>
                                                <li><span className='text-success'>✔</span> Receipt दिली जाईल</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="premium-card">
                                        <div className="accent-strip blue"></div>

                                        <div className="card-content">
                                            <h3 className="cstmColor fs-3 fw-bold">ग्राहक सहाय्य</h3>
                                            <h2 className="phone">80102 80102</h2>
                                            <p className="timing">24x7 सपोर्ट उपलब्ध</p>

                                            <div className="price-badge secure">सुरक्षित सेवा</div>

                                            <ul className="feature-list">
                                                <li><span className='text-success'>✔</span> सरकारी प्रमाणित सेवा</li>
                                                <li><span className='text-success'>✔</span> त्वरित प्रतिसाद</li>
                                                <li><span className='text-success'>✔</span> डेटा सुरक्षितता</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>


    );
}

export default Sevashetra;
