import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import GoogleMapReact from 'google-map-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BookingStage from "../components/BookingStage";
import HeaderComponent from "../components/HeaderComponent";
import FiltersComponent from "../components/FiltersComponent";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const transportationOptions = [
  {
    airport: "Copenhagen",
    transportation: [
      {
        name:"Plane", 
        image: "image/sprite_primary.svg#icon-local_airport"
      },
      {
        name:"Car",
        image: "image/sprite_primary.svg#icon-local_parking"
      }
    ],
    facilities: [
      {
        name:"Restaurant",
        image: "image/sprite_primary.svg#icon-local_parking"
      },
      {
        name:"Breakfast",
        image: "image/sprite_primary.svg#icon-local_parking"
      }
    ]
  },
  {
    airport: "London",
    transportation: [
      {
        name:"Bus", 
        image: "image/sprite_primary.svg#icon-wi-fi"
      },
      {
        name:"Boat",
        image: "image/sprite_primary.svg#icon-check"
      }
    ],
    facilities: [
      {
        name:"Room service",
        image: "image/sprite_primary.svg#icon-local_parking"
      },
      {
        name:"Breakfast",
        image: "image/sprite_primary.svg#icon-local_parking"
      }
    ]
  }
]
const facilities = [
  {
    name:"Room service",
    image: "image/sprite_primary.svg#icon-room_service"
  },
  {
    name:"Bar",
    image: "image/sprite_primary.svg#icon-drink"
  },
  {
    name:"Breakfast",
    image: "image/sprite_primary.svg#icon-free_breakfast"
  },
  {
    name:"Restaurant",
    image: "image/sprite_primary.svg#icon-restaurant"
  }
  // {
  //   name:"Fitness center",
  //   image: "image/sprite2.svg#icon-rfitness_center"
  // }
]

const roomsTypes = [
  {
    roomNames: "Double Room",
    bedTypes: "image/sprite2.svg#icon-bed",
    people: "image/sprite2.svg#icon-bed",
    facilities: ["tea", "coffee maker", "ironing facilities", "wake-up service", "satelite channels"],
    priceNonRefundable: 1045,
    priceFreeCancellation: 2045
  },
  {
    roomNames: "Deluxe Room",
    bedTypes: "image/sprite2.svg#icon-bed",
    people: "image/sprite2.svg#icon-bed",
    facilities: ["tea", "coffee maker", "ironing facilities", "wake-up service", "satelite channels"],
    priceNonRefundable: 1095,
    priceFreeCancellation: 4035
  }
]
class OverviewPage extends Component {
  constructor(props) {
    super(props)
    this.searchTransportation = this.searchTransportation.bind(this)
    this.filtersPanelHandle = this.filtersPanelHandle.bind(this)
    this.state = {
      transportation: transportationOptions,
      searchFieldTransportation: "",
      filtersPanel: false
    }
  }
  searchTransportation = (ev) => {
    this.setState({searchFieldTransportation: ev.target.value})
  }
  filtersPanelHandle() {
    this.setState((prevState) => ({filtersPanel: !prevState.filtersPanel}))
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    const availableTransportation = this.state.transportation.filter(transportation => {
      return transportation.airport.toLowerCase().includes(this.state.searchFieldTransportation.toLowerCase())
  })
    return (
      <div className="overview__page">
      <MobileView>
        <div className="expand__filters">
          <svg onClick={this.filtersPanelHandle}>
                <use href="image/sprite_primary.svg#icon-dots-three-horizontal"></use>
          </svg>
        </div>
      </MobileView>
      {/* } */}
        {/* OverviewPage */}
          <HeaderComponent/>
          <div className="main__navigation">
              <div className="main__navigation--wrapper">
                  <NavLink 
                      exact={true} 
                      to="/home" 
                      activeClassName="active__navigation"
                      className="search__icon"
                  >
                      <svg>
                          <use href="image/sprite.svg#icon-search"></use>
                      </svg>
                      Search
                  </NavLink>
                  <NavLink 
                      to="/overview" 
                      activeClassName="active__navigation"
                      className="time__icon"
                  >
                      <svg>
                          <use href="image/sprite.svg#icon-time"></use>
                      </svg>
                      Trips overview
                  </NavLink>
              </div>
          </div>
          <div className="overview__page--wrapper">
          {/* BOOKING STAGES */}
              <div className="booking__stage">
              <NavLink 
                to="/overview" 
                activeClassName="active__stages"
                exact={true}
              >
              <span className="stage__number">1</span>
              <span className="stages__description">Chose accomodation</span>
              </NavLink>
              <NavLink 
                to="/booking-details"
              >
                <span className="stage__number">2</span>
                <span className="stages__description">Enter booking details</span>
              </NavLink>
              <NavLink 
                to="/overview3"
              >
                <span className="stage__number">3</span>
                <span className="stages__description">Confirm and pay</span>
              </NavLink>
              </div>
            </div>
          {/* BOOKING STAGES */}

          {/* CONTENT GLOBAL */}
            <div className="content__globalOverview">
            <MobileView>
              {
                this.state.filtersPanel && 
                <div className="slide__filters">
                  <div className="left__overview">
                    <FiltersComponent/>
                    <div className="map__location" style={{ height: '12rem', width: '100%' }}>
                    <GoogleMapReact
                        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          // text={'Kreyser Avrora'}
                        />
                      </GoogleMapReact>
                    </div>
                  </div>
                </div>
              }
            </MobileView>
            <BrowserView>
              <div className="left__overview">
                <FiltersComponent/>
                <div className="map__location" style={{ height: '12rem', width: '100%' }}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      // text={'Kreyser Avrora'}
                    />
                  </GoogleMapReact>
                </div>
              </div>
            </BrowserView>
              <div className="right__overview">
                <div className="right__overview--visualDatas">
                  <div className="images__component">
                  <Carousel showArrows={true}>
                <div>
                    <img src="image/testimage2.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.allwallpaper.in/wallpapers/1920x1080/13452/corner-hotel-in-helsinki-finland-hdr-1920x1080-wallpaper.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.allwallpaper.in/wallpapers/2500x1875/15253/hotel-in-the-cook-islands-polynesia-2500x1875-wallpaper.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://cdn.allwallpaper.in/wallpapers/1024x768/8654/beach-holidays-hotels-utopia-world-hotel-alanya-mahmutlar-1024x768-wallpaper.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://cdn.allwallpaper.in/wallpapers/2048x1366/6007/morning-at-le-meridien-hotel-lagoon-bora-2048x1366-wallpaper.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                </Carousel>
                  </div>
                  <div className="extraInfo__component">
                    <div className="extraInfo__component--wrapper">
                      <h2>How to get to Forest Hotel</h2>
                      <p>Type in your arrival destination and we will offer you your transportation options</p>
                      <label>I am arriving from:</label>
                      <input type="text" placeholder="Copenhagen Airport" onChange={this.searchTransportation}/>
                      {
                        availableTransportation.map((items, index) => {
                          return(
                            <div className="elementsImagesWrapper">{
                              items.transportation.map((transport) => {
                                return <div className="elementsImagesWrapper--content" key={index}>
                                        <svg className="searchTransportationImages">
                                            <use href={`${transport.image}`}></use>
                                        </svg>
                                        <span>{transport.name}</span>
                                      </div>
                              })
                            }</div>
                          )
                        })
                      }
                      <div className="parkingInformation">
                        <div className="parkingInformation--title">
                          <svg className="searchTransportationImages">
                              <use href="image/sprite2.svg#icon-local_parking"></use>
                          </svg>
                          <span>Parking available</span>
                        </div>
                        <div className="parkingInformation--content">
                          <p>Private parking is available on site (reservation is needed) and costs dkk 15 per day</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right__overview--textDatas">
                  {/* textDatas */}
                  <div className="onlyText">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et. Auctor urna nunc id cursus metus aliquam eleifend. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Lorem sed risus ultricies tristique. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Scelerisque eleifend donec pretium vulputate sapien nec. At auctor urna nunc id cursus metus aliquam eleifend. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ut consequat semper viverra nam libero justo laoreet. Porttitor eget dolor morbi non arcu risus quis varius. Metus aliquam eleifend mi in. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Tempor orci eu lobortis elementum. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Ut porttitor leo a diam sollicitudin tempor id eu. Condimentum mattis pellentesque id nibh tortor id.</p>
                  </div>
                  <div className="visualFacilities">
                      <div className="visualFacilities--wrapper">
                        <h2>Most popular facilities</h2>
                        {
                          facilities.map((items, index) => {
                            return <div className="elementsImagesWrapper--content" key={index}>
                                      <svg className="facilitiesElementsImages">
                                          <use href={`${items.image}`}></use>
                                      </svg>
                                      <span>{items.name}</span>
                                    </div>
                          })
                        }
                      </div>
                  </div>
                </div>
                <div className="right__overview--availabilityDatas">
                  <h2>Availability</h2>
                  <div className="available__rooms">
                    <div className="checkin__dates">
                        <div className="checkin__dates--wrapper">
                          <div className="checkin__value">
                            <p>Check-in Date</p>
                            <span>
                              <svg>
                                <use href="image/sprite.svg#icon-calendar"></use>
                              </svg>
                              Friday, 1 May 2018
                            </span>
                          </div>
                          <div className="checkout__value">
                          <p>Check-out Date</p>
                            <span>
                              <svg>
                                <use href="image/sprite.svg#icon-calendar"></use>
                              </svg>
                              Friday, 14 May 2018
                            </span>
                          </div>
                          <div className="guests__value">
                          <p>Guests</p>
                          <select>
                            <option value="1">1 adult</option>
                            <option value="2">2 adults</option>
                            <option value="3">3 adults</option>
                            <option value="4">4 adults</option>
                            <option value="5">5 adults</option>
                          </select>
                          </div>
                        </div>
                    </div>
                    <div className="checkin__rooms">
                        {
                          roomsTypes.map((items, index) => {
                            return <div className="roomTypeOffers" key={index}>
                                    <div className="roomTypeOffers--information">
                                      <div className="roomTypeOffers--information--types">
                                        <p>{items.roomNames}</p>
                                        <span><svg><use href={`${items.bedTypes}`}></use></svg> 2 twin beds</span>
                                        <span><svg><use href={`${items.people}`}></use></svg> Guests</span>
                                      </div>
                                      <div className="roomTypeOffers--information--facilities">
                                        <span>{items.facilities}</span>
                                      </div>
                                    </div>
                                    <div className="roomTypeOffers--datas">
                                      <div className="refundable">
                                          <div className="refund">
                                            <p>1. Non refundable</p>
                                            <p>Price: <span>{items.priceNonRefundable} dkk</span></p>
                                          </div>
                                          <div className="rooms">
                                            <p>Rooms:</p>
                                            <select>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                            </select>
                                          </div>
                                          <div className="booking">
                                            <NavLink to="/booking-details">Book</NavLink>
                                          </div>
                                      </div>
                                      <div className="nonrefundable">
                                      <div className="refund">
                                            <p>2. Free cancellation</p>
                                            <p>Price: <span>{items.priceFreeCancellation} dkk</span></p>
                                          </div>
                                          <div className="rooms">
                                            <p>Rooms:</p>
                                            <select>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                            </select>
                                          </div>
                                          <div className="booking">
                                            <NavLink to="/booking-details">Book</NavLink>
                                          </div>
                                      </div>
                                      {/* <div className="rooms"></div>
                                      <div className="booking"></div> */}
                                    </div>
                                  </div>
                          })
                        }
                        {/* const roomsTypes = [
                            {
                              roomNames: "Double Room",
                              bedTypes: "image/sprite2.svg#icon-bed",
                              people: "Guests",
                              facilities: ["tea", "coffee maker", "ironing facilities", "wake-up service", "satelite channels"],
                              priceNonRefundable: 1045,
                              priceFreeCancellation: 2045
                            },
                            {
                              roomNames: "Deluxe Room",
                              bedTypes: "image/sprite2.svg#icon-bed",
                              people: "Guests",
                              facilities: ["tea", "coffee maker", "ironing facilities", "wake-up service", "satelite channels"],
                              priceNonRefundable: 1045,
                              priceFreeCancellation: 2045
                            }
                          ] */}
                        {/* <div className="roomTypeOffers">
                          <div className="roomTypeOffers--information">
                            <div className="roomTypeOffers--information--types">
                              <p>Double Room</p>
                              <span><svg><use href="image/sprite2.svg#icon-bed"></use></svg>2 twin beds</span>
                              <span><svg><use href="image/sprite2.svg#icon-bed"></use></svg>guests</span>
                            </div>
                            <div className="roomTypeOffers--information--facilities"></div>
                          </div>
                          <div className="roomTypeOffers--datas"></div>
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* CONTENT GLOBAL */}
      </div>
    )
  }
}
// dots-three-horizontal
export default OverviewPage;