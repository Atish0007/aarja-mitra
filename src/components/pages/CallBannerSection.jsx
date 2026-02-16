
import "../../assets/css/CallBannerSection.css";

export default function CallBannerSection() {

const handleWhatsApp = () => {

    const message = `नमस्कार,\nमला माझा सरकारी मोजणीसाठी अर्ज भरायचा आहे.`;
    //const message = `नमस्कार,\n\nनाव: ${//name}\nमोबाईल: ${//mobile}\n\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;

    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  

  return (
    <section className="official-call-section py-4 pt-1">
      <div className="container">
        <div className="official-card text-center">

          {/* Top Strip */}
          <div className="official-top-strip fs-2">
            फक्त गट नंबर सांगा, आम्ही मोजणी अर्ज करून देऊ !
          </div>

          {/* Main Body */}
          <div className="official-body">

            <div className="call-heading fs-3 fw-bold">कॉल</div>
            <div className="call-number mt-0">7387484615</div>

            <div className="divider-line"></div>

            <p className="service-text fs-4 fw-bold">
              झटपट, सोयीस्कर, विश्वासार्ह सेवा !
            </p>

            <div className="row g-3 mt-3">
              <div className="col-md-6 col-12">
                <button type="button"
                  className="btn whatsapp-btn w-100 fs-4" 
                  onClick={handleWhatsApp}
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  गट नंबर पाठवा
                </button>
              </div>

              <div className="col-md-6 col-12">
                <a
                  href="tel:7387484615"
                  className="btn call-btn w-100 fs-4"
                >
                  <i className="fas fa-phone me-2"></i>
                  आम्हाला कॉल करा
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
