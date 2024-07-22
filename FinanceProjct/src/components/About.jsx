import React from "react";

export default function About() {
	return (
		<div className="about-us-sec pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="about-desc">
							<img src="img/blog_1.jpg" alt />
							<h1>
								We are the best company in the world & We have expert employees
								for grow your bussines
							</h1>
							<p>
								Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus
								dapibus, erat ullamcorper odio augue eleifend, consequat enim
								ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor
								sit amet, justo nunc orci donec sagittis metus dapibus, erat
								ullamcorper odio augue eleifend, consequat enim
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="faq-style1-sec">
							<h1 className="faq-style1-title">
								Freequently Asked Your Question
							</h1>
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
												What`s the mission of Financity ?
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
											Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
											ultrices erat sit dolore. Vestibulum nunc. Nec tellus
											vulputate facilisis. Congue nunc enim platea, dolor
											lacinia arcu, vehicula nascetur purus penatibus ac
											pulvinar, sit ac faucibus. Vitae eros justo duis lacus
											iaculis eu
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
												How can i get your service?
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
											Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
											ultrices erat sit dolore. Vestibulum nunc. Nec tellus
											vulputate facilisis. Congue nunc enim platea, dolor
											lacinia arcu, vehicula nascetur purus penatibus ac
											pulvinar, sit ac faucibus. Vitae eros justo duis lacus
											iaculis eu
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
												How much exprience about Financity?
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
											Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
											ultrices erat sit dolore. Vestibulum nunc. Nec tellus
											vulputate facilisis. Congue nunc enim platea, dolor
											lacinia arcu, vehicula nascetur purus penatibus ac
											pulvinar, sit ac faucibus. Vitae eros justo duis lacus
											iaculis eu
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
												Lorem ipsum dolor sit amet?
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
											Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
											ultrices erat sit dolore. Vestibulum nunc. Nec tellus
											vulputate facilisis. Congue nunc enim platea, dolor
											lacinia arcu, vehicula nascetur purus penatibus ac
											pulvinar, sit ac faucibus. Vitae eros justo duis lacus
											iaculis eu
										</div>
									</div>
								</div>
								<div className="panel">
									<div className="panel-heading" role="tab" id="titleFive">
										<h4 className="panel-title">
											<a
												className="collapsed"
												data-toggle="collapse"
												data-parent="#accordion"
												href="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												how much offer for customer ?
											</a>
										</h4>
									</div>
									<div
										id="collapseFive"
										className="panel-collapse collapse"
										role="tabpanel"
										aria-labelledby="titleFive"
									>
										<div className="panel-content">
											Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
											ultrices erat sit dolore. Vestibulum nunc. Nec tellus
											vulputate facilisis. Congue nunc enim platea, dolor
											lacinia arcu, vehicula nascetur purus penatibus ac
											pulvinar, sit ac faucibus. Vitae eros justo duis lacus
											iaculis eu
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
