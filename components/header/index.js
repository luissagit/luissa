import Link from 'next/link'

const Header = () => {
	return(
		<div className="flex justify-between items-center mx-4">
			<div className="bg-secondary w-10 h-10 rounded-full grid place-content-center">
				<Link href="/about">
					<a className="text-lg text-primary">LN</a>
				</Link>
			</div>
			<div>
				<input type="text" placeholder="search" className="rounded-full p-2 text-center focus:shadow-xl transition-default"/>
			</div>
			<div>
				<Link href="/">
					<a>
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Header;