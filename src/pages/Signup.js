import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// class Signup extends Component {
//   render() {
//     return (
//       <div className="signup__page">
//         signup__page tests

//       </div>
//     )
//   }
// }
const information__data = [
  {
    "name":"name1",
    "place": "place1"
  },
  {
    "name":"name1",
    "place": "place1"
  }
]

class Template__Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="template__bookings" key={this.props.keyID}>
        {
          information__data.map((items, index) => {})
        }
      </div>
    )
  }
}

class Signup extends Component {
  constructor() {
    super();
    this.state = { 
      tabIndex: 0,
      data: "tests"
    };
  }
  render() {
    return (
      <div className="tabs__class">
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>Booking</Tab>
          <Tab>Templates</Tab>
        </TabList>
        <TabPanel>information 1 content for booking
          <p>{this.state.data}</p>
          <Template__Content/>
          {/* <p>{
            // information__data.map((items, index) => {
            //   return 
            // })
          }</p> */}
        </TabPanel>
        <TabPanel>information 2 content for templates</TabPanel>
      </Tabs>
      </div>
    );
  }
}
export default Signup;