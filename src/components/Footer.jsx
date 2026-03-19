import "../assets/css/footer.css";

function Footer() {


    const handleCallClick = () => {

        // Google Ads Conversion Fire
        // if (window.gtag) {
        //     window.gtag('event', 'conversion', {
        //         send_to: ''
        //     });
        // }

        // Call redirect
        window.location.href = "tel:7387484615";
    };

    const handleFooterGatNoBtn = () => {

        // Google Ads Conversion Trigger
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-17963207181/AbCdEf123'
            });
        }

        const msg = "नमस्कार,\n\nमला माझा गट नंबरचा मोजणी अर्ज भरायचा आहे.";
        window.open(
            `https://wa.me/917387484615?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
    }

    const data = [
        { title: "संपर्क करा", subtitle: "7387484615", icon: "fas fa-phone strip-icon ftrPhone" },
        { title: "Email", subtitle: "aarjamitra@gmail.com", icon: "fa fa-envelope strip-icon whatsapp" },
        { title: "ऑफिसचा पत्ता", subtitle: "Aapla aarj Office no. 1, Yashodhan Building, Karve Nagar, Pune, Maharashtra – 411052", icon: "fas fa-map-marker-alt strip-icon ftrMap" },
        { title: "Working Hours", subtitle: "Mon–Sat: 10 AM – 7 PM", icon: "fas fa-clock strip-icon ftrForm" },
    ]

    return (
        <div className="footer-strip">
            <div className="container">
                <div className="row text-center text-md-start align-items-center g-4">

                    {data.map((item, i) => (
                        <div className="col-6 col-md-6 col-lg-3" key={i}>
                            <div className="strip-item">
                                <span className="footerIcon"><i className={item.icon}></i></span>
                                <div>
                                    <h6 className={i == 0 || data.length - 2 == i ? "" : "cstEngFont"}>{item.title}</h6>
                                    <p className="cstEngFont">{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* FIXED BUTTONS */}
                    <div className="fixed-btn-wrapper">
                        <button
                            type="button"
                            onClick={handleCallClick}
                            className="fixed-btn fixed-apply fs-6 text-decoration-none callFixedBtn"
                        >
                            <i className="fa-solid fa-phone me-2 fs-6"></i>
                            संपर्क करा
                        </button>
                        <button className="fixed-btn fixed-whatsapp fs-6 whatsappFixedBtn" onClick={handleFooterGatNoBtn}>
                            <i className="fab fa-whatsapp me-2 fs-6"></i>
                            WhatsApp करा
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;