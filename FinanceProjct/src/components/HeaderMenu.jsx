import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
	return (
		<div className="menu">
			<nav id="main-menu" className="main-menu">
				<ul>
					<li className="active">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/project">Projects</Link>
					</li>
					<li>
						<Link to="/service">Services</Link>
					</li>
					<li>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
			<div className="menu-icon">
				<div className="site-search">
					<i className="fa fa-search"></i>
					<div className="search-forum">
						<form action="#">
							<input placeholder="Search For Site" type="text" />
							<input type="submit" value="Go" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
