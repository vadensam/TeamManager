import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const Dashboard = () => {

    const [team, setTeam] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() =>{
        axios.get('http://localhost:8000/api/players')
            .then(response =>{
                if(response.data.message === "success"){
                    setTeam(response.data.results)
                }
            })
            .catch(err => console.log(err))
    }, [count])

    const handleClick = (e, num) =>{
        if(window.confirm("Are you sure?")){
            axios.delete(`http://localhost:8000/api/players/${num}`)
                .then(response=>{
                    setCount(count + 1)
                    navigate("/")
                })
        }
    }

    return (
        <div>
            <nav className="text-center">
                <h3><Link to="/players/list">List</Link> | <Link to="/players/new">Add Player</Link></h3>
   
            </nav>
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.map((player, i) => 

                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        
                                        <button className="offset-sm-1" onClick={(e)=> handleClick(e, player._id)}> Delete</button>
                                    </td>
                                </tr>
                            
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
