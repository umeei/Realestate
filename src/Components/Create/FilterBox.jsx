import React, { useState } from 'react'
import "./FilterBox.css"



const FilterBox = () => {

    const [Filter, setFilter] = useState(false);

    const filtertoggle = () => {
        setFilter(!Filter);
    }
    return (
        <>
            <div className="filterbox-main">
                <form action="">
                    <div className="filterline1">
                        <input type="text" placeholder='Keyword' />
                        <select name="" id="">
                            <option selected hidden disabled value="">All Cities</option>
                            <option value="">Riga</option>
                            <option value="">Melbourne</option>
                            <option value="">Vienna</option>
                            <option value="">Vancouver</option>
                            <option value="">Toronto</option>
                            <option value="">Calgary</option>
                            <option value="">Adelaide</option>
                            <option value="">Perth</option>
                            <option value="">Auckland</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All Categories</b></option>
                            <option value="">Apartment</option>
                            <option value="">Bar</option>
                            <option value="">Farm</option>
                            <option value="">House</option>
                            <option value="">Store</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All Offers</b></option>
                            <option value="">100% OFF</option>
                            <option value="">75% OFF</option>
                            <option value="">50% OFF</option>
                            <option value="">25% OFF</option>
                            <option value="">10% OFF</option>
                        </select>
                    </div>
                    <div className="filterline1">
                        <select name="" id="">
                            <option selected value="">All Listing</option>
                            <option value="">Listing 1</option>
                            <option value="">Listing 2</option>
                            <option value="">Listing 3</option>
                            <option value="">Listing 4</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>Bedrooms</b></option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5+</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>Bathrooms</b></option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5+</option>
                        </select>
                    </div>
                    <span className={Filter ? "morefilter open":"morefilter"}>
                    <div className="filterline1">
                        <select name="" id="">
                            <option selected value="">All Types</option>
                            <option value="">Apartment (30)</option>
                            <option value="">Land (69)</option>
                            <option value="">Villas (103)</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All Categories</b></option>
                            <option value="">Apartment</option>
                            <option value="">Bar</option>
                            <option value="">Farm</option>
                            <option value="">House</option>
                            <option value="">Store</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All Actions</b></option>
                            <option value="">Sales</option>
                            <option value="">Booking</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All City</b></option>
                            <option value="">City 1</option>
                            <option value="">City 2</option>
                            <option value="">City 3</option>
                        </select>
                    </div>
                    <div className="filterline1">
                        <select name="" id="">
                            <option selected value=""><b>All Actions</b></option>
                            <option value="">Sales</option>
                            <option value="">Booking</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All City</b></option>
                            <option value="">City 1</option>
                            <option value="">City 2</option>
                            <option value="">City 3</option>
                        </select>
                        <select name="" id="">
                            <option selected value=""><b>All City</b></option>
                            <option value="">City 1</option>
                            <option value="">City 2</option>
                            <option value="">City 3</option>
                        </select>
                    </div>
                    </span>
                    <div className="filterline1">
                        <p onClick={filtertoggle}>+ MORE FILTERS</p>
                        <button id='filtersearch'>Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FilterBox
