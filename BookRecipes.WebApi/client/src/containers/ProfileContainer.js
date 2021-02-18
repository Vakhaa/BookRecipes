import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from '../components/Profile/Profile'

const profileMoq = {
    id:0,
    name: "Johny Cage",
    photo: "https://source.unsplash.com/random",
    status: "So so",
    description: "To jest najliepsze co zrobily ludzi. Aromatny zapazch, a jaki kolor, smack wymbitny.",
    socailNetworkings: [
        {
            id: 1,
            name: "Git Hub"
        },
        {
            id: 2,
            name: "Facebook"
        },
        {
            id: 3,
            name: "Telegram"
        },
    ],
    posts : [
        {
            id: 0,
            title: "Tonight I'm cooked some fine cake!",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        },
        {
            id: 1,
            title: "Some photo for you! Duddde",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        }
    ]
}

class ProfileContainer  extends Component {

    render() {
        return (
            <Profile
                id={this.props.id}
                name={this.props.name}
                photo={this.props.photo}
                status={this.props.status}
                description={this.props.description}
                socailNetworkings={this.props.socailNetworkings}
                posts={this.props.posts}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        id: profileMoq.id,
        photo: profileMoq.photo,
        name: profileMoq.name,
        status: profileMoq.status,
        description: profileMoq.description,
        socailNetworkings: profileMoq.socailNetworkings,
        posts: profileMoq.posts
    }
}

const mapDispatchToProps = dispatch => {
     return {
}}

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, null)(WithRouterComponent)
 