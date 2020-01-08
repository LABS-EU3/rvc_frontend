import React from 'react'

import Footer from './Footer';
import home from '../globals/design-elements/home.png';
import play_button from '../globals/design-elements/play_button.png';
import user from '../globals/design-elements/user.png';

export default function CreateProfile() {
    return (
        <div className="profile-container">
            <div><img className="profile-pic" alt="profile img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwzk9us0OpvTp8XxAgvYAs3peCYVamG6PsGX_edQKrTPn1QBZz" />
            </div>
            <p>@Chelsea</p>
            <div className="num-likes-and-forks">
                <div><p className="likes-paragraph">8</p>
                <h3>Recipes</h3>
                </div>
                <div><p className="likes-paragraph">21</p>
                <h3>Forked Recipes</h3></div>
                <div><p className="likes-paragraph">1225</p>
                <h3>Forks</h3></div>
            </div>
            <p>I enjoy cooking</p>
            <div className="profile-icons">
                <img className="profile-icons-image" src={home} alt=''/>
                <img className="profile-icons-image" src={play_button}alt='' />
                <img className="profile-icons-image" src={user} alt=''/>
            </div>
            <div style={{"padding": "0 5px"}}> <hr id="divider"/></div>
            <div className="profile-food">
                <img className="profile-recipe-image" src="https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=''/>
                <img className="profile-recipe-image" src="https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=''/>
            </div>

            <Footer />
        </div>
    )
}
