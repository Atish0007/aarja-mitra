import "../assets/css/footer.css";

function Footer() {

const handleFooterGatNoBtn=()=>{
     const msg = "नमस्कार, मला माझा गट नंबर संदर्भात माहिती हवी आहे.";
        window.open(
            `https://wa.me/917387484615?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
}

    const data = [
        {title:"कॉल करा",subtitle:"7387484615",icon:"fas fa-phone strip-icon ftrPhone"},
        // {title:"WhatsApp",subtitle:"WhatsApp वर चॅट करा",icon:"fab fa-whatsapp strip-icon whatsapp"},
        {title:"Email",subtitle:"aarjamitra@gmail.com",icon:"fa fa-envelope strip-icon whatsapp"},
        {title:"ऑफिसचा पत्ता",subtitle:"Aapla aarj Office no. 1, Yashodhan Building, Karve Nagar, Pune, Maharashtra – 411052",icon:"fas fa-map-marker-alt strip-icon ftrMap"},
        {title:"Working Hours",subtitle:"Mon–Sat: 10 AM – 7 PM",icon:"fas fa-clock strip-icon ftrForm"},
    ]


    return (
        <div className="footer-strip">
            <div className="container">
                <div className="row text-center text-md-start align-items-center g-4">


                {data.map((item,i)=>(
                    <div className="col-6 col-md-6 col-lg-3" key={i}>
                         <div className="strip-item">
                            <span className="footerIcon"><i className={item.icon}></i></span>
                            <div>
                                <h6 className={i==0||data.length-2==i?"":"cstEngFont"}>{item.title}</h6>
                                <p className="cstEngFont">{item.subtitle}</p>
                                {/* {data.length-2==i || data.length-1==i ?"cstEngFont":""} */}
                            </div>
                        </div>
                    </div>
                ))}


                    <button className="fixed-gat-btn" onClick={handleFooterGatNoBtn}>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        फक्त गट नंबर सांगा
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Footer;