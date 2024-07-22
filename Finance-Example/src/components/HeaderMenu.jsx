import React from "react";

export default function HeaderMenu() {
	return (
		<div className="menu">
			<nav id="main-menu" className="main-menu">
				<ul>
					<li className="active">
						<a href="index.html">home</a>
					</li>
					<li>
						<a href="service.html">services</a>
						<ul>
							<li>
								<a href="service.html">Service Page</a>
							</li>
							<li>
								<a href="service-details.html">Service Details</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="project.html">Project</a>
						<ul>
							<li>
								<a href="project.html">Project Page</a>
							</li>
							<li>
								<a href="project-details.html">Project Details</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Page</a>
						<ul>
							<li>
								<a href="about.html">about us</a>
							</li>
							<li>
								<a href="gallery.html">gallery Page</a>
							</li>
							<li>
								<a href="employees.html">employees Page</a>
							</li>
							<li>
								<a href="faq.html">faq Page</a>
							</li>
							<li>
								<a href="404.html">404 Page</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="blog.html">blog</a>
						<ul>
							<li>
								<a href="blog.html">blog</a>
							</li>
							<li>
								<a href="blog-details.html">blog Details</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="contact.html">Contact</a>
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
