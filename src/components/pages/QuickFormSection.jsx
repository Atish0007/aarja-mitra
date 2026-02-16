
import { useState } from "react";
import "../../assets/css/QuickFormSection.css";
import gatno from "../../assets/images/seva/gatno.svg";
import aadharcard from "../../assets/images/seva/aadharcard.svg";
import sadhekagad from "../../assets/images/seva/sadhekagad.svg";
import phone from "../../assets/images/seva/phone.svg";
import shield from "../../assets/images/seva/shield.svg";

export default function QuickFormSection() {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    const items = [
        { icon: gatno, text: "फक्त गट नंबर सांगा", color: "warning" },
        { icon: aadharcard, text: "आधार कार्ड", color: "success" },
        // { icon: sadhekagad, text: "साधे कागद / कागद", color: "warning" },
        { icon: phone, text: "मोबाईल नंबर", color: "primary" }
    ];

    // Validations for buttons
    const validateForm = () => {
    if (!name.trim()) {
      alert("कृपया पूर्ण नाव भरा");
      return false;
    }

    if (!mobile.trim()) {
      alert("कृपया मोबाईल नंबर भरा");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("कृपया वैध 10 अंकी मोबाईल नंबर भरा");
      return false;
    }

    return true;
  };

  // WhatsApp Handler
  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = `नमस्कार,\n\nनाव: ${name}\nमोबाईल: ${mobile}\n\nमला माझा सरकारी मोजणीसाठी अर्ज भरायचा आहे.`;

    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Call Handler
//   const handleCall = () => {
//     if (!validateForm()) return;

//     // window.location.href = "tel:7387484615";
//     const message = `नमस्कार,
//     नाव: ${name}
//     मोबाईल: ${mobile}

//     मला माझा सरकारी मोजणीसाठी अर्ज भरायचा आहे.`;

//     // Works on Android & iOS
//     const smsUrl = `sms:7387484615?body=${encodeURIComponent(message)}`;
//     window.location.href = smsUrl;

//   };



    return (
        <section className="quick-form-section py-5 pt-4 pt-md-0 pb-4">
            <div className="container">
                <div className="row justify-content-center">

                    {/* LEFT BOX */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="quick-info-box h-100">
                            <h6 className="cstmColor fs-3 fw-bold mb-2 text-start">
                                आवश्यक कागदपत्रे
                            </h6>

                            <ul className="list-unstyled mb-0">
                                {items.map((item, i) => (
                                    <li key={i} className="d-flex align-items-start mb-2">
                                        <img
                                            src={item.icon}
                                            alt="icon"
                                            width="30"
                                            height="30"
                                            className={`me-2 text-${item.color}`}
                                        />
                                        <span className="fs-md-3 fs-5">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border rounded-3 p-2 mt-5 bg-light shadow-sm">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start text-center text-md-start">
                                    <img
                                        src={shield}
                                        alt="Shield"
                                        width="45"
                                        className="me-2"
                                    />
                                    <h6 className="fw-bold mb-0 fs-4">
                                        तुमची सर्व कागदपत्रे सुरक्षित ठेवली जातील
                                    </h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="quick-form-card">

                            <h4 className="form-heading text-center mb-4">
                                सरकारी मोजणीचा अर्ज भरा
                            </h4>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control custom-input"
                                        placeholder="पूर्ण नाव"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control custom-input"
                                        placeholder="मोबाईल नंबर"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        maxLength="10"
                                    />
                                </div>

                                <button type="button" 
                                        className="btn whatsapp-btn w-100 fs-5"
                                        onClick={handleWhatsApp}>
                                    <i className="fab fa-whatsapp fs-4 me-2"></i>
                                    WhatsApp वर अर्ज पाठवा
                                </button>
                                <a href="tel:7387484615"
                                        className="btn call-btn w-100 mt-2 fs-5 text-decoration-none"
                                       >
                                    <i className="fa-solid fa-phone me-1 fs-5 HmIconSize"></i> कॉल करा</a>
                                    {/*  onClick={handleCall} */}
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </section>

        
    );
}
