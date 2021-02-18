import React, {Component} from 'react'  
import { connect } from 'react-redux'
import SideBar from '../components/SideBar/SideBar'

const SideBarMoq = [
    {
        id: 0,
        name: "News",
        pathTo: "/"
    },
    {
        id: 1,
        name: "Profile",
        pathTo: "/profile"
    },
    {
        id: 2,
        name: "Messages",
        pathTo: "/messages"
    },
    {
        id: 3,
        name: "Friends",
        pathTo: "/friends"
    },
    {
        id: 4,
        name: "Recipes",
        pathTo: "/recipes"
    },
    {
        id: 5,
        name: "Ingredients",
        pathTo: "/ingredients"
    }
]

class SideBarContainer  extends Component {

    render() {
        return (
            <SideBar
                navi={this.props.navi}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        navi: SideBarMoq
    }
}

export default connect(mapStateToProps, null)(SideBarContainer)
 