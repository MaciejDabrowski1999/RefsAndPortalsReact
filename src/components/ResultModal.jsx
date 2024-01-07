import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ result, targetTime, resetTime }, ref) {
	const dialog = useRef()

	const userLost = result <= 0
	const formattedResult = (result / 1000).toFixed(2)
	const score = Math.round((1 - result / (targetTime * 1000)) * 100)
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal()
			},
		}
	})
	return (
		<dialog ref={dialog} className="result-modal" onClose={resetTime}>
			{userLost && <h2>You Lost</h2>}
			{!userLost && <h2>Your score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong> {formattedResult} seconds left.</strong>
			</p>
			<form method="dialog" onSubmit={resetTime}>
				<button>Close</button>
			</form>
		</dialog>
	)
})

export default ResultModal
