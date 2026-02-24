import "../../assets/css/problems.css";


function Problems() {
    return (
        <section className="py-5 pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="MainHeading text-center pt-5">शासकीय अर्ज करताना येणाऱ्या समस्या व उपाय</h1>
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>
                        <h6 className="fw-normal text-center pt-3 fs-6">अर्ज प्रक्रियेत अनेक अडचणी येतात. आपली मोजणी त्या सोप्या पद्धतीने कशा सोडवते ते पाहूया.</h6>


                        <div className="row justify-content-center gy-4 align-items-stretch pt-5">


                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="card h-80 CstmShadow p-3 mb-5 bg-white rounded text-start border-0">
                                    <div className="card-body">
                                        <h3 className="card-title fw-semibold text-danger mb-4">
                                            ❌ सामान्य अडचणी
                                        </h3>

                                        <ul className="list-unstyled custom-list text-danger mb-0">
                                            <li>
                                                <span className="icon"><i className="fa-solid fa-triangle-exclamation fs-5 text-warning"></i></span>
                                                <span className="text fs-5">चुकीचा अर्ज</span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fa-solid fa-triangle-exclamation fs-5 text-warning"></i></span>
                                                <span className="text fs-5">अपूर्ण कागदपत्रे</span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fa-solid fa-triangle-exclamation fs-5 text-warning"></i></span>
                                                <span className="text fs-5">अर्ज Reject</span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fa-solid fa-triangle-exclamation fs-5 text-warning"></i></span>
                                                <span className="text fs-5">कार्यालय फेऱ्या</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ✅ Solution Card --> */}
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="card h-80 CstmShadow p-3 mb-5 bg-white rounded text-start border-0">
                                    <div className="card-body">
                                        <h3 className="card-title fw-semibold text-success mb-4">
                                            ✅ Aapli Mojani कशी मदत करते?
                                        </h3>

                                        <ul className="list-unstyled custom-list text-success mb-0">
                                            <li>
                                                <span className="icon">✔️</span>
                                                <span className="text fs-5">योग्य अर्ज मार्गदर्शन</span>
                                            </li>
                                            <li>
                                                <span className="icon">✔️</span>
                                                <span className="text fs-5">स्पष्ट कागदपत्र यादी</span>
                                            </li>
                                            <li>
                                                <span className="icon">✔️</span>
                                                <span className="text fs-5">वेळ वाचवणारी प्रक्रिया</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problems;