import React from 'react'
import BuyModal from "./BuyModal";

const Resources = () => {
    return (
        <div>
            <div className="container-xxl">
                <p className="text-center fs-1 pt-5 pb-1"><strong>Resources</strong></p>
            </div>

            <div className="container">
                <div className="row align-items-start">
                    <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary" onClick={()=>{}}>Buy Now</button>
                                <BuyModal />
                                <i classname="fa fa-download"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/wireframe.png" alt="First File" className="align-center img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>

                    <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/wireframe.png" alt="First File" className="align-center img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>

                </div>
                <br />
                <div className="row align-items-center">
                    
                <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/wireframe.png" alt="First File" className="align-center img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>

                    <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/wireframe.png" alt="First File" className="align-center img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>

                    <div className="col align-center">
                        <p className="text-center fs-5">Investment and Tax Planning</p>
                        <br />
                        <div className="text-center">
                            <img src="Downloadables/wireframe.png" alt="First File" className="align-center img-thumbnail img-fluid rounded "></img>
                        </div>
                        <br />
                        <div className="text-center">
                            <a href="Downloadables/Investment_and_Tax_Planning.pdf" download rel="noopener noreferrer" target="_blank">
                                <button type="button" className="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Resources