import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const Profile = (props)=> {


        return (
            <>
                 <div className="container mt-5 d-flex justify-content-center">
                    <div className="card p-3" style={card}>
                        <div className="d-flex align-items-center">
                            <div className="image">{props.children}</div>
                            <div className="ml-3 w-100">
                               {props.fullName}  {props.profession}<div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">{props.bio}
                                </div>
                                <div className="button mt-2 d-flex flex-row align-items-center justify-content-between"> <button onClick={props.handleName} className="btn btn-sm btn-primary w-100">Handle Name</button>  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
Profile.defaultProps = {
    fullName : "Naruto Usumaki",
    profession : "Hokage",
    bio : "C'est le gnomy au lait qui est bon ",
    handleName : () => {alert("Ta pas mis de props Tu t'atendais a quoi?!")},
    children : <img src='/default.png' style={{height:150,width:150,marginRight:10}}/>
}

const card = {
    width: 400,
    border: null,
    borderRadius: 10,
    backgroundColor: '#fff'
}
Profile.prototype = {
    fullName : PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
}
export default Profile