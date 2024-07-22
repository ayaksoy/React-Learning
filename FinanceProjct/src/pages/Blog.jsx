import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogSlice";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";

export default function Blog() {
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog.blogs);
	const blogStatus = useSelector((state) => state.blog.status);

	useEffect(() => {
		if (blogStatus === 'idle') {
			dispatch(fetchBlogs());
		}
	}, [blogStatus, dispatch]);

	return (
		<div>
			<Hero title="Blog" />
			<div className="blog-sec pt-100 pb-70 aa">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							{blogs.map((item) => (
								<BlogCard key={item.id} blog={item} />
							))}
							<div className="pagination custom-pagination">
								<ul className="pagination custom-pagination">
									<li className="active">
										<a href="#">1</a>
									</li>
									<li>
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-angle-double-right" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sidebar">
								<div className="search-field">
									<form action="#">
										<input placeholder="search ...." type="text" />
										<button type="submit">
											<i className="fa fa-search"></i>
										</button>
									</form>
								</div>
								<div className="widget-archive">
									<h1>news catsgories</h1>
									<ul>
										<li>
											<a href="#">Business Planing</a>
										</li>
										<li>
											<a href="#">Investment Pla</a>
										</li>
										<li>
											<a href="#">Analysis business</a>
										</li>
										<li>
											<a href="#">Official Funds</a>
										</li>
										<li>
											<a href="#">Startup business</a>
										</li>
										<li>
											<a href="#">Insurence Policy</a>
										</li>
										<li>
											<a href="#">Management Planing</a>
										</li>
									</ul>
								</div>
								<div className="widget-two">
									<h1>recent News</h1>
									<div className="all_r_pst">
										<div className="media">
											<div className="relative-post">
												<div className="relative-post-thumb">
													<a href="#">
														<img src="img/r3.jpg" alt="" />
													</a>
												</div>
												<div className="media-body">
													<div className="single_r_dec">
														<h3>
															<a href="#">Grow up your business</a>
														</h3>
														<ul>
															<li>
																<a href="#">post by admin</a>
															</li>
															<li>
																<a href="#">25 may 2017</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="media">
											<div className="relative-post">
												<div className="relative-post-thumb">
													<a href="#">
														<img src="img/r1.jpg" alt="" />
													</a>
												</div>
												<div className="media-body">
													<div className="single_r_dec">
														<h3>
															<a href="#">
																we are the top financial company in the world.
															</a>
														</h3>
														<ul>
															<li>
																<a href="#">post by admin</a>
															</li>
															<li>
																<a href="#">25 may 2017</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="media">
											<div className="relative-post">
												<div className="relative-post-thumb">
													<a href="#">
														<img src="img/r2.jpg" alt="" />
													</a>
												</div>
												<div className="media-body">
													<div className="single_r_dec">
														<h3>
															<a href="#">
																Our support center always open for you any
																financial issue
															</a>
														</h3>
														<ul>
															<li>
																<a href="#">post by admin</a>
															</li>
															<li>
																<a href="#">25 may 2017</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="widget-tag">
									<h1>Tag List</h1>
									<ul>
										<li>
											<a href="#">Planing</a>
										</li>
										<li>
											<a href="#">Investment</a>
										</li>
										<li>
											<a href="#">Analysis</a>
										</li>
										<li>
											<a href="#">Official</a>
										</li>
										<li>
											<a href="#">business</a>
										</li>
										<li>
											<a href="#">Insurence</a>
										</li>
										<li>
											<a href="#">Management</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
