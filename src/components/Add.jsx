import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""

        }
    )
    const inputhandler = (event)=>
        {
            setData({...data,[event.target.name]:event.target.value})
        }
    const readValue = ()=>{
        console.log(data)
       axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("SUCCESSFULLY")
            } else {
                alert("FAILED")
            }
        }
       ).catch()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">FRIEND NAME</label>
                                <input type="text" className="form-control"name='friendName' value={data.friendName} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NICK NAME</label>
                                <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DESCRIBE YOUR FRIEND</label>
                                <textarea name="DescribeYourFriend" value={data.DescribeYourFriend} onChange={inputhandler} id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add