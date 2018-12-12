import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import TemplateResults from "./TemplateResults";
import Slide from "react-reveal/Slide";

const templates = [
    {
        destination: "London, UK",
        people: "Not defined",
        budget: "2100",
        filters: "Not selected"
    },
    {
        destination: "Paris, France",
        people: "5",
        budget: "3200",
        filters: "Not selected"
    },
    {
        destination: "Copenhagen, Denmark",
        people: "12",
        budget: "4100",
        filters: "Not selected"
    },
    {
        destination: "Seoul, South Korea",
        people: "2",
        budget: "5100",
        filters: "Not selected"
    },
    {
        destination: "Tokyo, Japan",
        people: "9",
        budget: "9100",
        filters: "Not selected"
    }
]

class RecentComponent extends Component {
  constructor(props) {
    super(props)
    // this.removeTemplateHandler = this.removeTemplateHandler.bind(this)
    this.state = {
        templates: templates,
        searchfield: ""
    }
  }
  onSearchChange = (ev) => {
      this.setState({searchfield: ev.target.value})
    //   console.log(ev.target.value)
  }
  render() {
    const filteredTemplates = this.state.templates.filter(templates => {
        return templates.destination.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="templates__component">
        <div className="templates__component--wrapper">
            <div className="templates__search">
                <svg className="templates__search--icons">
                    <use href="image/sprite.svg#icon-search"></use>
                </svg>
                <input 
                    type="text" 
                    placeholder="search through recent bookings" 
                    className="searchTemplates" 
                    onChange={this.onSearchChange}
                />
            </div>
            <Slide bottom cascade>
            <div className="templates__results">
                {
                    filteredTemplates.map((items, index) => {
                        return(
                            <div className="templates__results--element" key={index}>
                                <div className="templates__information">
                                    <p>Destination</p>
                                    {
                                        items.destination
                                    }
                                </div>
                                <div className="templates__information">
                                    <p>People</p>
                                    {
                                        items.people
                                    }
                                </div>
                                <div className="templates__information">
                                    <p>Budget per night per person</p>
                                    {
                                        items.budget
                                    }
                                </div>
                                <div className="templates__information">
                                    <p>Business filters</p>
                                    {
                                        items.filters
                                    }
                                </div>
                                <div className="templates__information bookingHistoryAction">
                                    {/* <div className="templates__actions">
                                        <svg>
                                            <use href="image/sprite.svg#icon-write"></use>
                                        </svg>
                                        <svg>
                                            <use href="image/sprite.svg#icon-trash"></use>
                                        </svg>
                                    </div> */}
                                    <div className="templates__selectBooking">
                                        <NavLink className="templates__selectBooking--button" to="/overview" onClick={() => console.log(this)}>Select</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </Slide>
        </div>
      </div>
    )
  }
}
export default RecentComponent;