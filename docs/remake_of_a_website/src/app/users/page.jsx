"use client";

import { useState, useEffect } from 'react';

export default function users(){
	const [usersArray, setUsers] = useState([]);
	const [errorMsg, setError] = useState("");

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=10")
		.then(res => res.json())
		.then(info => {
			console.log(info);
			setUsers(info.results);
			setError("");
		})
		.catch(error => setError(error.message))
	}, [] );
	return (
		<>
			<h1>Users list</h1>
			{errorMsg != "" && <p>ERROR: {error}</p>}
			{usersArray.length > 0 ?
				<div>
					{usersArray.map((user, idx) =>{
						return(
							<div key={idx}>
								<h3>{user.name.first}{""}{user.name.last}</h3>
								<img src={user.picture.large} alt="" />
							</div>
						);
					})}
				</div>

				:

				<div>					
					<p>No users yet :( </p>		
				</div>
			}
		</>
	);
}
