
import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import './static-profile.scss'

import React from 'react';
import {useSelector} from 'react-redux';



const StaticProfile = (props) => {
    const userData = useSelector (state => state.login.userData);

    function goToEdit(){
        props.history.replace('/profile-edit')
    }

    return (
        <dl className='profile'>
            <div className="profile__item">
                <dt>Name</dt>
                <dd>{userData.name}</dd>
            </div>

            <div className="profile__item">
                <dt>Country</dt>
                <dd>{userData.country}</dd>
            </div>

            <div className="profile__item">
                <dt>Zip Code</dt>
                <dd>{userData.zipCode}</dd>
            </div>

            <div className="profile__item">
                <dt>Contact Number</dt>
                <dd>{userData.contactNumber}</dd>
            </div>
            <button type="button" className='button--more profile__edit' onClick={goToEdit}>Edit</button>
        </dl>
    )
}


export default StaticProfile;