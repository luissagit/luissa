const Message = ({ data }) => {
	const date = new Date();
	const today = date.toLocaleString("en-US", { dateStyle: 'medium' });
	const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const day = weekday[date.getDay()];

	return(
		<div className="mx-4 my-8">
			<h2 className="text-3xl text-secondary font-semibold">
				Hi There
			</h2>
			<p className="text-lg text-secondary">
				{ day }, { today }
			</p>
		</div>
	);
}

export default Message;