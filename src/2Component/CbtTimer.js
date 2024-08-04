
import React, { useState, useRef } from "react";

const CbtTimer = () => {
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total =
			Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor(
			(total / 1000 / 60) % 60
		);
		const hours = Math.floor(
			(total / 1000 / 60 / 60) % 24
		);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : "0" + hours) +
				":" +
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds) 
				 
			);
		}
	};

	const clearTimer = (e) => {
		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		// setTimer(" 00:00:00")
		//  
		// THIS IS WHERE WE CONTROL THE TIMER HERE

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
			
			// alert should be here to indicate stopage time
		}, 1000);
		Ref.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 20);
		deadline.setMinutes(deadline.getMinutes() + 0);
		return deadline;
	};
	
	const handleStart = () => {
		clearTimer(getDeadTime());
		
		
	};

	const handleStop = () => {
		setTimer("00:00:00")
        startTimer(" ")
		clearTimer(" ")
	};

	const handleReset = ()=> {
		startTimer(" ")
		clearTimer(" ")
	}

	return (
		<div
			style={{ textAlign: "center", margin: "auto" }}>
			<h1 style={{ color: "green" }}>
				MY CBT APP
			</h1>
			<h3>Countdown Timer Using React JS</h3>
            
			<h2>{timer}</h2>
            <button onClick={handleStart}>Start</button> {''}
            <button onClick={handleReset}>Reset</button> {''}
			<button onClick={handleStop }>stop</button>
		</div>
	);
};

export default CbtTimer;
