import React, { Component } from "react";


const PaymentFinish = () => {
    return(
        <div className="payment__finish">
            <div className="payment__finish--wrapper">
                {/* confirm__payment */}
                <div className="success__payment--title">
                    <h2>Successful payment</h2>
                </div>
                <div className="success__payment--content">
                    <div className="infoGroups">
                        <p>You booked Hotel Sunrise</p>
                    </div>
                    <div className="infoGroups"></div>
                </div>
            </div>
        </div>
    )
}
export default PaymentFinish;