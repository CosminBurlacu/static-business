import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactSwipe from 'react-swipe';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
class ResultsComponent extends Component {
    render(props) {
        let reactSwipeEl;
        return(
            <div className="results__bookingsComponent">
             <MobileView>
                <div className="expand__filters">
                <svg>
                    <use href="image/sprite_primary.svg#icon-dots-three-horizontal"></use>
                </svg>
                </div>
            </MobileView>
                <div className="top__picks">
                    <div className="top__picks--title">
                        <h2>Copenhagen 24 results found</h2>
                    </div>
                    <div className="top__picks--content">
                        <div className="extra__contentInformation">
                            <h2>Top Picks</h2>
                            <p>Here is what we recommend</p>
                            <div className="topsWrapper">
                            {/* map this */}

                            {/* <ReactSwipe
                                className="carousel"
                                swipeOptions={{ continuous: false }}
                                ref={el => (reactSwipeEl = el)}
                            > */}
                            {
                                this.props.filteredBookingsPlaces.map((items, index) => {
                                    return(
                                        <div className="topPicksElement" key={index}>
                                            <div className="topPicksElement--image">
                                                <img src={items.image} alt="#"/>
                                            </div>
                                            <div className="topPicksElement--content">
                                                <div className="upper__contentDatas">
                                                    <p>{items.nameValue}</p>
                                                    <span>
                                                        <svg className="ranking__stars">
                                                            <use href="image/sprite2.svg#icon-star"></use>
                                                        </svg>
                                                        {/* {items.rating} */}
                                                    </span>
                                                </div>
                                                <div className="locationDatas">
                                                    <p>
                                                        <svg className="svg__results">
                                                            <use href="image/sprite2.svg#icon-map-marker"></use>
                                                        </svg>
                                                        {items.location}
                                                    </p>
                                                </div>
                                                <div className="roomTypeDatas">
                                                    <p>
                                                        <svg className="svg__results">
                                                            <use href="image/sprite2.svg#icon-bed"></use>
                                                        </svg>
                                                        {items.roomTypes}
                                                    </p>
                                                </div>
                                                <div className="priceActionDatas">
                                                    <p>
                                                        <span>Price for 2 nights</span>
                                                        {items.price} dkk 
                                                    </p>
                                                    <NavLink className="see_available_rooms" to="/overview">See available rooms</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })        
                            }
                            {/* </ReactSwipe> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="regular__results">
                    <div className="regular__results--title">
                        <h2>Results</h2>
                        <select>
                            <option>Desc. price</option>
                            <option>Asc. price</option>
                            {/* <option>new</option> */}
                        </select>
                        {/* <Select options={options} /> */}
                    </div>
                    <div className="regular__results--content">
                            <div className="bookingResultElement">
                                <div className="bookingResultElement--image">
                                    <img src="https://via.placeholder.com/300/09f.png/fff%20C/O%20https://placeholder.com/" alt="#"/>
                                </div>
                                <div className="bookingResultElement--datas">
                                    <div className="bookingElement--top">
                                        <div className="bookingElement--top--name">
                                            <p className="hotel__name">Hotel Sunrise</p>
                                            <p className="hotel__ranking">
                                                <svg className="ranking__stars">
                                                    <use href="image/sprite2.svg#icon-star"></use>
                                                </svg>
                                            </p>
                                        </div>

                                    <div className="bookingElement--top--address">
                                        <p className="hotel__address">The location is in Copenhagen</p>
                                        <p className="hotel__recommend">Recommended for 95 people</p>
                                    </div>
                                    </div>
                                    <div className="bookingElement--bottom">
                                        <div className="bookingElement--bottom--filters">
                                            <div className="filters__showNames">
                                                <svg>
                                                    <use href="image/sprite2.svg#icon-fitness_center"></use>
                                                </svg>
                                                <svg>
                                                    <use href="image/sprite2.svg#icon-local_airport"></use>
                                                </svg>
                                            </div>
                                            <div className="filters__showImages">
                                                {/* image */}
                                                <span>fitness</span>
                                                <span>airport</span>
                                            </div>
                                        </div>
                                        <div className="bookingElement--bottom--access">
                                            <div className="price__hotelElement">Price for 2 adults 2 nights <span>445 dkk</span></div>
                                            <div className="accessButton__hotelElement">
                                                <NavLink to="/overview">See available rooms</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* test placeholder */}
                            <div className="bookingResultElement">
                                <div className="bookingResultElement--image">
                                    <img src="https://via.placeholder.com/300/09f.png/fff%20C/O%20https://placeholder.com/" alt="#"/>
                                </div>
                                <div className="bookingResultElement--datas">
                                    <div className="bookingElement--top">
                                        <div className="bookingElement--top--name">
                                            <p className="hotel__name">Hotel Sunrise</p>
                                            <p className="hotel__ranking">
                                                <svg className="ranking__stars">
                                                    <use href="image/sprite2.svg#icon-star"></use>
                                                </svg>
                                            </p>
                                        </div>

                                    <div className="bookingElement--top--address">
                                        <p className="hotel__address">The location is in Copenhagen</p>
                                        <p className="hotel__recommend">Recommended for 95 people</p>
                                    </div>
                                    </div>
                                    <div className="bookingElement--bottom">
                                        <div className="bookingElement--bottom--filters">
                                            <div className="filters__showNames">
                                                <svg>
                                                    <use href="image/sprite2.svg#icon-fitness_center"></use>
                                                </svg>
                                                <svg>
                                                    <use href="image/sprite2.svg#icon-local_airport"></use>
                                                </svg>
                                            </div>
                                            <div className="filters__showImages">
                                                {/* image */}
                                                <span>fitness</span>
                                                <span>airport</span>
                                            </div>
                                        </div>
                                        <div className="bookingElement--bottom--access">
                                            <div className="price__hotelElement">Price for 2 adults 2 nights <span>445 dkk</span></div>
                                            <div className="accessButton__hotelElement">
                                                <NavLink to="/overview">See available rooms</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* test placeholder */}
                            {/* {
                                this.props.initialValues.map((items, index) => {
                                    return(
                                        <div key={index}>
                                            {items.nameValue}
                                            {items.locationValue}
                                            {items.price}
                                            {items.image}
                                            {items.rating}
                                            {items.roomTypes}
                                            {items.facilities}
                                        </div>
                                    )
                                })
                            } */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultsComponent;
