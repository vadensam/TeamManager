import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Form = () => {

    const [player, setPlayer] = useState({
        name: "", position: ""
    })
    const [errors, setErrors] = useState({
        name: "", position: ""
    })

    const handleChange = e =>{
        const curPlay = {
            ...player,
            [e.target.name]: e.target.value
        }
        validate(curPlay)
        setPlayer(curPlay)
    }

    const submitHandler = e =>{
        e.preventDefault();

        if(validate(player)){
            axios.post('http://localhost:8000/api/players', player)
                .then(response=>{
                    console.log(response)
                    if(response.data.message === "success"){
                        navigate('/')
                    }
                })
                .catch(err=> console.log(err))
        }

    }

    const validate = pers =>{
        let valid = true;
        const {...curErr} = errors;
        if(pers.name.length === 0){
            curErr.name = "This field is required"
            valid = false

        } else if(pers.name.length < 3){
            curErr.name = "Name must be at least 3 characters"
            valid = false
        } else{
            curErr.name = ""
            
        }

        if(pers.position.length === 1 ){
            curErr.position = "Position must be at least 2 characters"
            valid = false

        } else{
            curErr.position = ""
            
        }

        setErrors(curErr)
        return valid
    }

    const valName = str =>{
        const valid = false;
        if(str.length > 3){
            valid 
        }
    }

    return (
        <div>
            <nav className="text-center">
                <h1><Link to="/players/list">List</Link> | <Link to="/players/new">Add Player</Link></h1>
            </nav>

            <div className="container">
                <form onSubmit={submitHandler} className="col-sm-12">
                    <div className="form-group row">
                        {errors.name ? <p className="col-sm-8 offset-sm-4 text-danger">{errors.name}</p> : ""}
                        <label htmlFor="name" className="col-sm-4 ">Name:</label>
                        <input type="text" name="name" value={player.name} onChange={handleChange} className="col-sm-8 form-control"/>
                    </div>
                    <div className="form-group row">
                        {errors.position ? <p className="col-sm-8 offset-sm-4 text-danger">{errors.position}</p> : ""}
                        <label htmlFor="position" className="col-sm-4 ">Position:</label>
                        <input type="text" name="position" value={player.position} onChange={handleChange} className="col-sm-8 form-control"/>
                    </div>
                    <div className="form-group row">
                        <input type="submit" value="submit" className="col-sm-3 btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
