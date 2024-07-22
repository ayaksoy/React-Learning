import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
	return (
		<div className="media">
			<div className="single-post">
				<div className="single-post-thumb">
					<img src="img/blog_1.jpg" alt />
					<div className="single-post-thumb-overlay">
						<div className="post-meta">
							<ul>
								<li>
									<Link>
										<i className="fa fa-user"></i>
										{props.blog.author}
									</Link>
								</li>
								<li>
									<Link>
										<i className="fa fa-calendar"></i>
										{props.blog.date}
									</Link>
								</li>
								<li>
									<Link>
										<i className="fa fa-comment-o"></i>32
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="single-post-text">
					<h2>
						<Link to={`/blog/${props.blog.id}`}>{props.blog.title}</Link>
					</h2>
					<p>{props.blog.content}</p>
					<Link to={`/blog/${props.blog.id}`} className="blog-readmore">
						Continue reading...
					</Link>
				</div>
			</div>
		</div>
	);
}
