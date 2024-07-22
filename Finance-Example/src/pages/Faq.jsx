import React from "react";
import Hero from "../components/Hero";

export default function Faq() {
	return (
		<>
			<Hero title="Faq" />
			<div className="faq-page pt-100 pb-70">
				<div className="container asd">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="faq-sec">
								<div className="panel-group" id="accordion" role="tablist">
									<div className="panel">
										<div className="panel-heading" role="tab" id="titleOne">
											<h4 className="panel-title">
												<a
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseOne"
													aria-expanded="true"
													aria-controls="collapseOne"
												>
													Over 30 years of expeirence{" "}
												</a>
											</h4>
										</div>
										<div
											id="collapseOne"
											className="panel-collapse collapse in"
											role="tabpanel"
											aria-labelledby="titleOne"
										>
											<div className="panel-content">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Ut enim ad minim veniam, quis
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat.
												</p>
												<p>
													Ut enim ad minim veniam, quis nostrud exercitation
													ullamco laboris nisi ut aliquip ex ea commodo
													consequat.{" "}
												</p>
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading" role="tab" id="titleTwo">
											<h4 className="panel-title">
												<a
													className="collapsed"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													Deserunt platonem cum ne
												</a>
											</h4>
										</div>
										<div
											id="collapseTwo"
											className="panel-collapse collapse"
											role="tabpanel"
											aria-labelledby="titleTwo"
										>
											<div className="panel-content">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Ut enim ad minim veniam, quis
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat.{" "}
												</p>
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading" role="tab" id="titleThree">
											<h4 className="panel-title">
												<a
													className="collapsed"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseThree"
													aria-expanded="false"
													aria-controls="collapseThree"
												>
													160 + expert employees
												</a>
											</h4>
										</div>
										<div
											id="collapseThree"
											className="panel-collapse collapse"
											role="tabpanel"
											aria-labelledby="titleThree"
										>
											<div className="panel-content">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Ut enim ad minim veniam, quis
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat.{" "}
												</p>
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading" role="tab" id="titleFour">
											<h4 className="panel-title">
												<a
													className="collapsed"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseFour"
													aria-expanded="false"
													aria-controls="collapseFour"
												>
													Lorem ipsum dolor sit amet
												</a>
											</h4>
										</div>
										<div
											id="collapseFour"
											className="panel-collapse collapse"
											role="tabpanel"
											aria-labelledby="titleFour"
										>
											<div className="panel-content">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Ut enim ad minim veniam, quis
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="single-faq">
								<div className="faq-title">
									<h2>Te fugit interesset sit. Ne nisl aeque sit</h2>
								</div>
								<p>
									Lorem ipsum dolor sit amet, similique inciderint in duo. Purto
									affert duo an, enim elit munere id has. Pri tota augue aliquam
									ut, solet referrentur at pri, per at legere phaedrum. His
									modus vulputate definiebas in.
								</p>
							</div>
							<div className="single-faq">
								<div className="faq-title">
									<h2>Te fugit interesset sit. Ne nisl aeque sit</h2>
								</div>
								<p>
									Lorem ipsum dolor sit amet, similique inciderint in duo. Purto
									affert duo an, enim elit munere id has. Pri tota augue aliquam
									ut, solet referrentur at pri, per at legere phaedrum. His
									modus vulputate definiebas in.
								</p>
							</div>
							<div className="single-faq">
								<div className="faq-title">
									<h2>Te fugit interesset sit. Ne nisl aeque sit</h2>
								</div>
								<p>
									Lorem ipsum dolor sit amet, similique inciderint in duo. Purto
									affert duo an, enim elit munere id has. Pri tota augue aliquam
									ut, solet referrentur at pri, per at legere phaedrum. His
									modus vulputate definiebas in.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
