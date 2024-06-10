import React, { useState } from 'react'

import Navbar from './Navbar'

const View = () => {
    const [data,changedata]=useState(
        [
            
 {
    "_id": "6665dd357f96fb262b8dd5a6",
    "name": "Ramesh",
    "friendName": "Tovino",
    "friendNickName": "TT",
    "DescribeYourFriend": "Test desc",
    "__v": 0
 }
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">FRIEND NAME</th>
      <th scope="col">NICK NAME</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
 {data.map(
    (value,i)=>{
        return <tr>
        <th scope="row">{value.name}</th>
        <td>{value.friendName}</td>
        <td>{value.friendNickName}</td>
        <td>{value.DescribeYourFriend}</td>
      </tr>
    }
 )}
  </tbody>
</table>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View