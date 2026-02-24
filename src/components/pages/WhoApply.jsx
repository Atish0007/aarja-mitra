import "../../assets/css/whoapply.css"
import farmer from "../../assets/images/whyapply/farmer.svg";
import flatOwner from "../../assets/images/whyapply/flat_owner.png";
import nominee from "../../assets/images/whyapply/nominee.png";
import law from "../../assets/images/whyapply/law.svg";
import dispute from "../../assets/images/whyapply/dispute.png";
import loanSale from "../../assets/images/whyapply/loan_sale.png";

function WhoApply() {

    const list = [
        { icon: farmer, title: "शेतकरी" },
        { icon: flatOwner, title: "प्लॉट मालक" },
        { icon: nominee, title: "वारसदार" },
        { icon: law, title: "कायदेशीर कारणासाठी" },
        { icon: dispute, title: "सीमा / फेरफार वाद" },
        { icon: loanSale, title: "कर्ज / विक्रीसाठी" },
    ];

    return (
        <section className="py-5 cstmBG">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="MainHeading text-center pt-5">कोण अर्ज करू शकतो ?</h1>
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>
                        <div className="whoapply-grid py-5">
                            {list.map((item, i) => (
                                <div className="whoapply-card" key={i}>
                                    <img src={item.icon} className="card-icon" alt={item.title} height="60px" />
                                    <div className="card-title-who-apply">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoApply;