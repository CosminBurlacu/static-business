import React, { Component } from 'react'

class PriceSummaryComponent extends Component {
  render() {
    return (
      <div className="priceSummaryComponent">
        <div className="priceSummaryComponent--wrapper">
            <h2>Price summary</h2>
            <div className="total__price">
                <div className="roomPriceTotal">
                    <p>Room</p>
                    <span>4445</span>
                </div>
                <div className="vatPriceTotal">
                    <p>20% VAT</p>
                    <span> 145 dkk</span>
                </div>
            </div>
            <div className="total__value">
                <div className="total__value--texts">
                    <p>Total price</p>
                    <span>Price for 8 adults fo 2 nights</span>
                </div>
                <div className="total__value--numbers">
                    <p>4445 dkk</p>
                </div>
            </div>
        </div>
        {/* priceSummaryComponent */}
      </div>
    )
  }
}
export default PriceSummaryComponent;