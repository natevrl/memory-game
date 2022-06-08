import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<div className={props.flipped ? "flipped" : ""}>
				<img className="front" src={props.card.src} alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					alt="card back"
					onClick={() => props.parentFunc(props.card)}
				/>
			</div>
		</div>
	);
};

export default Card;
