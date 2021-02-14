import React from 'react'
import { connect } from 'react-redux'
import AddToBook from './AddToBook'

const SideBar = () => {

    return (
        <div className="SideBar">
            <AddToBook name="ingredient" />
            <AddToBook name="recipe" />
            <AddToBook name="category" />
            <AddToBook name="child_category" />
        </div>
    )
}

export default connect()(SideBar)