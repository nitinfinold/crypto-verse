import React from 'react'
import AuthModal from './AuthModal';
import BuyModal from "./BuyModal";
import { useCoin } from './Context';

const Resources = () => {

  const { user } = useCoin();

  console.log({ user })
  return (
    <div>
      <div className="container-xxl">
        <p className="text-center fs-1 pt-5 pb-1"><strong>Resources</strong></p>
      </div>

      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">Investment and Tax Planning</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">Candle Chart Pattern</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">Intraday Trading</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

        </div>
        <br />
        <div className="row align-items-center">

          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">Long-Term Investing</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">Swing Trading</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

          <div className="col-12 col-md-4 align-center">
            <p className="text-center fs-5">How to make a level playing field</p>
            <br />
            <div className="text-center">
              <img src="Downloadables/first_product.jpg" alt="First File" className=" img-thumbnail img-fluid rounded "></img>
            </div>
            <br />
            <div className="text-center">
              {(user != null) ? (
                <BuyModal />
              ) : (
                <AuthModal text="login to buy" />
              )}
              <i className="fa fa-download"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resources