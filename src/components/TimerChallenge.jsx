import { useState, useRef } from 'react'

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef()

	const [timerStarted, setTimerStarted] = useState(false)
	const [timerExpierd, setTimerExpiered] = useState(false)

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpiered(true)
		}, targetTime * 1000)
		setTimerStarted(true)
	}

	function handleStop() {
		clearTimeout(timer.current)
	}

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpierd && <p>You lost</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} challange</button>
			</p>
			<p className={timerStarted ? 'active' : undefined}>{timerStarted ? 'Time is runing..' : 'Timer inactive'}</p>
		</section>
	)
}
