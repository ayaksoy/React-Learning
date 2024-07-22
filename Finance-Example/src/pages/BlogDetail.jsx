import React from "react";
import Hero from "../components/Hero";

export default function BlogDetail() {
	return (
		<div>
			<Hero title="Blog Detail" />
			<div className="blog-sec pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="media">
								<div className="single-post">
									<div className="single-post-thumb">
										<img src="img/blog_1.jpg" alt />
										<div className="single-post-thumb-overlay">
											<div className="post-meta">
												<ul>
													<li>
														<a href>
															<i className="fa fa-user"></i>Admin
														</a>
													</li>
													<li>
														<a href>
															<i className="fa fa-calendar"></i>1 Jan 2018
														</a>
													</li>
													<li>
														<a href>
															<i className="fa fa-comment-o"></i>32
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="single-post-text">
										<h2>
											<a href="blog-details.html">
												Augue docendi signiferumque an cum. Te meliore
												definiebas.
											</a>
										</h2>
										<p>
											Lorem ipsum dolor sit amet, suscipit suscipit pellentesque
											ultricies fermentum, pellentesque ante tellus id non nunc,
											ut dui lacus iaculis condimentum, luctus vel porta arcu
											massa dignissim elit. Sit pellentesque imperdiet et
											auctor. Massa phasellus pharetra at erat donec, tincidunt
											facilisi elit vehicula, fames enim eget lacus sit eget
											nullam, amet tempor imperdiet nostrud pretium penatibus.
											Arcu nibh in, ac vulputate torquent sed dolor, varius
											facilisis. Rutrum atque, tempor scelerisque cum,
											scelerisque ut, rhoncus lobortis nibh.
										</p>
										<div className="code-text">
											<p>
												Te fugit interesset sit. Ne nisl aeque sit. Vis no
												mediocrem constituto. No legimus referrentur mea, quo
												probo consetetur interpretaris te. Ex quem
												concludaturque qui, id posidonium constituam sit.
											</p>
										</div>
										<p>
											Lorem ipsum dolor sit amet, similique inciderint in duo.
											Purto affert duo an, enim elit munere id has. Pri tota
											augue aliquam ut, solet referrentur at pri, per at legere
											phaedrum. His modus vulputate definiebas in.
										</p>
									</div>
									<div className="commentar-sec">
										<h2>comment on this post</h2>
										<div className="media">
											<img
												className="d-flex mr-3"
												src="img/commentar_1.jpg"
												alt
											/>
											<div className="media-body">
												<h3 className="comment-author">Alex</h3>
												<span className="comment-author-designation">
													marketing officer
												</span>
												<span className="comment-time">2 hours ago</span>
												<p>
													Lorem ipsum dolor sit amet, suscipit suscipit
													pellentesque ultricies fermentum, pellentesque ante
													tellus id non nunc, ut dui lacus iaculis condimentum,
													luctus vel porta arcu massa dignissim elit.
												</p>
												<span className="replay-button">
													<a href="#">reply</a>
												</span>
												<div className="media mt-3">
													<a className="d-flex pr-3" href="#">
														<img src="img/commentar_2.jpg" />
													</a>
													<div className="media-body">
														<h3 className="comment-author">Cristopher</h3>
														<span className="comment-author-designation">
															CO-Founder
														</span>
														<span className="comment-time">2 hours ago</span>
														<p>
															Lorem ipsum dolor sit amet, suscipit suscipit
															pellentesque ultricies fermentum, pellentesque
															ante tellus id non nunc, ut dui lacus iaculis
															condimentum, luctus vel porta arcu massa dignissim
															elit.
														</p>
														<span className="replay-button">
															<a href="#">reply</a>
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="contact-field">
										<h2>write your comment</h2>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<div className="single-input-field">
												<input type="text" placeholder="First Name" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<div className="single-input-field">
												<input type="text" placeholder="Last Name" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<div className="single-input-field">
												<input type="text" placeholder="URL" />
											</div>
										</div>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<div className="single-input-field">
												<input type="email" placeholder="E-mail" />
											</div>
										</div>
										<div className="col-md-12 message-input">
											<div className="single-input-field">
												<textarea placeholder="Write Your Comment"></textarea>
											</div>
										</div>
										<div className="single-input-fieldsbtn">
											<input type="submit" value="Send Now" />
										</div>
									</div>
								</div>
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
														<img src="img/r3.jpg" alt />
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
														<img src="img/r1.jpg" alt />
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
														<img src="img/r2.jpg" alt />
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
