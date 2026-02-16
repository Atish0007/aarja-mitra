import { useState } from "react";
import "../../assets/css/ContactForm.css";
import bannerImg from "../../assets/images/arjBG.png";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        //message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            alert("कृपया पूर्ण नाव भरा");
            return false;
        }

        if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            alert("कृपया वैध 10 अंकी मोबाईल नंबर भरा");
            return false;
        }

        // if (!formData.message.trim()) {
        //     alert("कृपया संदेश लिहा");
        //     return false;
        // }

        return true;
    };

    //     संदेश:
    // ${formData.message}`;
    const handleWhatsApp = () => {
        if (!validateForm()) return;

        const text = `नमस्कार,\n\nनाव: ${formData.name}\nमोबाईल: ${formData.mobile}`;

        const url = `https://wa.me/917387484615?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (


        <section className="contact-section">
            <div className="row g-0 split-row">

                {/* LEFT IMAGE */}
                <div
                    className="col-lg-6 image-side"
                    style={{ backgroundImage: `url(${bannerImg})` }}
                ></div>

                {/* RIGHT FORM */}
                <div className="col-lg-6 form-side d-flex align-items-center justify-content-center">
                    <div className="contact-card">

                        <h3 className="text-center contact-title mb-3">
                            आमच्याशी संपर्क साधा
                        </h3>

                        <p className="text-center text-muted mb-4">
                            सरकारी मोजणी, गट नंबर, कागदपत्रे याबाबत माहिती मिळवा
                        </p>

                        <form onSubmit={(e) => e.preventDefault()}>

                            <div className="mb-3">
                                <label className="form-label fw-bold">पूर्ण नाव</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control custom-input"
                                    placeholder="तुमचे नाव"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">मोबाईल नंबर</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    className="form-control custom-input"
                                    placeholder="10 अंकी मोबाईल नंबर"
                                    maxLength="10"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>



                            <div className="d-grid gap-2">
                                <button
                                    type="button"
                                    className="btn whatsapp-btn"
                                    onClick={handleWhatsApp}
                                >
                                    <i className="fab fa-whatsapp me-2"></i>
                                    WhatsApp वर पाठवा
                                </button>

                                <a href="tel:7387484615" className="btn call-btn mt-2">
                                    <i className="fa-solid fa-phone me-2 mt-2"></i>
                                    कॉल करा
                                </a>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
