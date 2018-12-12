import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import BookingDetailsComponent from "../components/BookingDetailsComponent";
import PriceSummaryComponent from "../components/PriceSummaryComponent";
const employees = [
    {
        name: "person 1",
        department: "department abc"
    },
    {
        name: "person 2",
        department: "department def"
    },
    {
        name: "person 3",
        department: "department ghi"
    },
    {
        name: "person 4",
        department: "department jkl"
    },
    {
        name: "person 5",
        department: "department mno"
    }
]
const estimated = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "13PM", "14PM", "15PM", "16PM", "17PM", "18PM", "19PM", "20PM", "21PM", "22PM", "23PM", "24AM"]
class BookingDetails extends Component {
  constructor(props) {
    super(props)
    this.searchEmployeesHandle = this.searchEmployeesHandle.bind(this)
    this.registerOutgoingEmployees = this.registerOutgoingEmployees.bind(this)
    this.state = {
        filteredEmployees: employees,
        filterInputSearch: "",
        goingEmployees: [],
        usersRequests: []
    }
  }
  searchEmployeesHandle = (ev) => {
    this.setState({filterInputSearch: ev.target.value})
  }
  registerOutgoingEmployees = (ev) => {
    let joined = this.state.goingEmployees.concat(ev.target.value);
    this.setState({goingEmployees: joined})
  }
  render() {
    const filterEmployees = this.state.filteredEmployees.filter(employees => {
        return employees.name.toLowerCase().includes(this.state.filterInputSearch.toLowerCase())
    })
    return (
        <div className="overview__page">
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
              <span className="stage__number">
                <svg className="icons__stages">
                    <use href="image/sprite_primary.svg#icon-check"></use>
                </svg>
              </span>
              <span className="stages__description">Chose accomodation</span>
              </NavLink>
              <NavLink 
                to="/booking-details"
              >
                <span className="stage__number">2</span>
                <span className="stages__description">Enter booking details</span>
              </NavLink>
              <NavLink 
                to="/payment"
              >
                <span className="stage__number">3</span>
                <span className="stages__description">Confirm and pay</span>
              </NavLink>
              </div>
            </div>
          {/* BOOKING STAGES */}

          {/* CONTENT GLOBAL */}
            <div className="content__globalOverview">
                <div className="left__overview--details">
                    <BookingDetailsComponent/>
                    <PriceSummaryComponent/>
                </div>
                <div className="right__overview--details">
                    <div className="right__overview--details--wrapper">
                        <h2>ENTER booking details</h2>
                        <div className="data__table">
                            <div className="selectDepartments">
                                <h2>Selected departments you are booking for</h2>
                                <form className="selectDepartments--forms">
                                    <div className="selectDepartments--forms--content">
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="production" name="production"/>
                                            <label for="production">Production</label>
                                        </div>
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="research_and_development" name="research_and_development"/>
                                            <label for="research_and_development">Production</label>
                                        </div>
                                    </div>
                                    <div className="selectDepartments--forms--content">
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="marketing" name="marketing"/>
                                            <label for="marketing">marketing</label>
                                        </div>
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="purchasing" name="purchasing"/>
                                            <label for="purchasing">purchasing</label>
                                        </div>
                                    </div>
                                    <div className="selectDepartments--forms--content">
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="hr_manangement" name="hr_management"/>
                                            <label for="hr_management">HR Management</label>
                                        </div>
                                        <div className="checkboxes__group">
                                            <input type="checkbox" value="development" name="development"/>
                                            <label for="development">Development</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="searchForEmployees">
                                <h2>The booking you made is for 8 adults. Please select the employees.</h2>
                                <div className="searchForEmployees--search">
                                    <svg>
                                        <use href="image/sprite_primary.svg#icon-search"></use>
                                    </svg>
                                    <input type="text" className="searchEmployees" onChange={this.searchEmployeesHandle}/>
                                </div>
                                <div className="searchForEmployees--table">
                                    <div className="searchForEmployees--table--title">
                                        <span>name</span>
                                        <span>department</span>
                                        <span>going</span>
                                    </div>
                                    <form className="searchForEmplayees--table--content">
                                        {
                                            filterEmployees.map((items, index) => {
                                                return <div className="searchForEmplayees--element">
                                                            <div className="searchForEmplayees--element--names">{items.name}</div>
                                                            <div className="searchForEmplayees--element--department">{items.department}</div>
                                                            <form onChange={this.registerOutgoingEmployees} className="searchForEmplayees--element--going">
                                                                <input type="checkbox" value={items.name} />
                                                            </form>
                                                        </div>
                                            })
                                        }
                                        {/* <div className="searchForEmplayees--element">
                                            <div className="searchForEmplayees--element--names">name</div>
                                            <div className="searchForEmplayees--element--department">department</div>
                                            <div className="searchForEmplayees--element--going">
                                                <input type="checkbox"/>
                                            </div>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                            <div className="primary__contact">
                                <h2>Primary contact</h2>
                                <form>
                                    <select>
                                        {
                                            filterEmployees.map((items, index) => {
                                                return <option>{items.name}</option>
                                            })
                                        }
                                    </select>

                                    <h2>Special requests</h2>
                                    <p>Please write your requests in English that we'll share with the property.</p>
                                    <textarea></textarea>
                                    <div className="estimatedArrival">
                                        <label>Estimated time of arrival</label>
                                        <select>
                                            {
                                                estimated.map((estimates, index) => {
                                                    return <option value={estimates}>{estimates}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="extra__optionsRequests">
                                    <div className="extra__optionsRequests--group">
                                        <input type="checkbox" name="shuttle_ride"/>
                                        <label for="shuttle_ride">I will book a shuttle ride from the airport (additional charge)</label>
                                     </div>
                                        <p>We will organize your transportation from the airport. The information will be send on your email address.</p>
                                    </div>
                                    <div className="extra__optionsRequests">
                                    <div className="extra__optionsRequests--group">
                                        <input type="checkbox" name="shuttle_ride"/>
                                        <label for="shuttle_ride">I want to rent a car</label>
                                     </div>
                                        <p>We will send you rental options with your confirmation email</p>
                                    </div>
                                    <div className="proceed__payment">
                                            <NavLink to="payment">Proceed to payment</NavLink>
                                    </div>
                                </form>
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
export default BookingDetails;