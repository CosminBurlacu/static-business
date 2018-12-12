import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import CurrencyInput from 'react-currency-input';
import { WithContext as ReactTags } from 'react-tag-input';
// import { DatePicker, RangeCalendar} from 'rc-calendar';
// import { Calendar } from 'react-date-range';
const KeyCodes = {
    comma: 188,
    enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];


const options = [
    "1", "2", "3", "4", "5"
]
const defaultOption = options[0]

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.getInitialState = this.getInitialState.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.state = {
            amount: 0,
            tags: [
                { id: "Ireland", text: "Ireland" },
                { id: "France", text: "France" }
             ],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Denmark', text: 'Denmark' },
                { id: 'Copenhagen', text: 'Copenhagen' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
            ],
            templateStoredDatas: []
        }
    }
        getInitialState(){
            return ({amount: "0.00"});
        }
        
        handleChange(event, maskedvalue, floatvalue){
            this.setState({amount: maskedvalue});
        }

        handleDelete(i) {
            const { tags } = this.state;
            this.setState({
             tags: tags.filter((tag, index) => index !== i),
            });
        }
     
        handleAddition(tag) {
            this.setState(state => ({ tags: [...state.tags, tag] }));
        }
     
        handleDrag(tag, currPos, newPos) {
            const tags = [...this.state.tags];
            const newTags = tags.slice();
     
            newTags.splice(currPos, 1);
            newTags.splice(newPos, 0, tag);
     
            // re-render
            this.setState({ tags: newTags });
        }
    render() {
        const { tags, suggestions } = this.state;
        return (
        <div className="search__component">
        {/* search__component */}
        <form className="search__forms">
            <div className="search__forms--group">
                <label>Destination</label>
                <div className="group__address__input">
                    <svg>
                        <use href="image/sprite.svg#icon-search"></use>
                    </svg>
                    <input type="text" className="address__input"/>
                
                    {/* <Calendar
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                /> */}
                </div>
            </div>
            <div className="search__forms--group">
                <label>Dates</label>
                <div className="group__address__calendar">
                    <svg>
                        <use href="image/sprite.svg#icon-calendar"></use>
                    </svg>
                    <input type="text" className="dates__input"/>
                </div>
            </div>
            <div className="search__forms--group people__group">
                <label>People</label>
                <Dropdown className='number__people' options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
            <div className="search__forms--group">
                <label>Budget per night per person</label>
                <CurrencyInput className="amount__payment" value={this.state.amount} onChangeEvent={this.handleChange}/>
            </div>
            {/* <div className="search__forms--group">
                <label>Business filters</label>
                <select className="select__business">
                    <option value="business">business 1</option>
                    <option value="business">business 2</option>
                    <option value="business">business 3</option>
                    <option value="business">business 4</option>
                </select>
            </div> */}
            <div className="search__forms--group filters__search">
            <label>Chosen filters:</label>
            <ReactTags 
                tags={tags}
                suggestions={suggestions}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
                handleDrag={this.handleDrag}
                delimiters={delimiters} 
                className="chosen__filters"
            />
            </div>
            <div className="submit__search">
                <button className="search__hotels">Search</button>
            </div>
        </form>
      </div>
    )
}
}
export default SearchComponent;
