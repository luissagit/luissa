const Announcement = ({ data }) => {
	if(!!data) {
		return(
			<div className="rounded-md border border-gray-400 mt-8 p-4 text-secondary">
				<h3 className="text-xl font-semibold">
					{ !!data ? (data[0].title) : (null) }
				</h3>
				<p className="mt-2">
					{ !!data ? (data[0].description) : (null) }
				</p>
			</div>
		);	
	} else {
		return (
			<div></div>
		)
	}
}


export default Announcement;