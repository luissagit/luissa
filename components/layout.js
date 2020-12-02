import Header from './header';
import Footer from './footer';
import Message from './message';
import Menu from './header/menu';

function Layout({ children }) {
	return(
		<div id="app" className="bg-primary w-screen h-screen py-8">
			<header>
				<Header />
				<Message />
				<Menu />
			</header>
			<main className="my-8 mx-4">
				{ children }
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Layout;