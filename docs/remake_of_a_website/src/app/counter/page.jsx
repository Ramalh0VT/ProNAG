"use client"

import { useState, useEffect } from "react";

export default function counter(){

	const [count_val, setVal] = useState(0);
	const [warn, setWarn] = useState();

	function add(){
		if(count_val >= 100){
			setWarn("Max value reached!")
			return null
		}
		setVal(count_val + 1);
		setWarn(null)

	}
	function sub(){
		if (count_val <= -5){
			setWarn("Minimum value reached!")
			return null
		}
		setVal(count_val - 1);
		setWarn(null)
	}

	useEffect( () => {console.log(count_val)}, [count_val] );

	return(
		<>
			<h1>A counter</h1>
			<p>Value: <i>{count_val}</i></p>
			<div>
				<button type="button" onClick={add}> + </button>				
				<button type="button" onClick={sub}> - </button>
				<p>{warn}</p>
			</div>
		</>
	)
}
