import { useRef } from 'react'
import { useState } from 'react'

export default function Player() {
	const playerName = useRef()
	const [enteredPlayerName, setenteredPlayerName] = useState(null)
	// const [submitted, setSubbmited] = useState(false)

	// function handleChangeName(e) {
	// 	setSubbmited(false)
	// 	setenteredPlayerName(e.target.value)
	// }
	function handleClick() {
		setenteredPlayerName(playerName.current.value)
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	)
}
