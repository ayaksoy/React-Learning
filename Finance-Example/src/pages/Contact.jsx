import React from "react";
import Hero from "../components/Hero";

export default function Contact() {
	return (
		<div>
			<Hero title="Contact" />
			<div className="contact-page-sec pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="contact-page-map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503103.25504622894!2d-118.94592338887756!3d34.065964560335836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1497798250780"
									width="100%"
									height="350"
									frameborder="0"
									style={{ border: 0 }}
									allowfullscreen
								></iframe>
							</div>
						</div>
						<div className="col-md-8">
							<div className="contact-field">
								<h2>Send your message</h2>
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
										<input type="text" placeholder="Phone Number" />
									</div>
								</div>
								<div className="col-md-6 col-sm-6 col-xs-12">
									<div className="single-input-field">
										<input type="email" placeholder="E-mail" />
									</div>
								</div>
								<div className="col-md-12 message-input">
									<div className="single-input-field">
										<textarea placeholder="Message"></textarea>
									</div>
								</div>
								<div className="single-input-fieldsbtn">
									<input type="submit" value="Send Now" />
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-info">
								<div className="contact-info-item">
									<div className="contact-info-icon">
										<i className="fa fa-map-marker"></i>
									</div>
									<div className="contact-info-text">
										<h2>address</h2>
										<span>Californiya , United State</span>
									</div>
								</div>
							</div>
							<div className="contact-info">
								<div className="contact-info-item">
									<div className="contact-info-icon">
										<i className="fa fa-envelope"></i>
									</div>
									<div className="contact-info-text">
										<h2>e-mail</h2>
										<span>
											<a
												href="https://themeearth.com/cdn-cgi/l/email-protection"
												className="__cf_email__"
												data-cfemail="91f2fefce1f0ffe8d1f6fcf0f8fdbff2fefc"
											>
												[email&#160;protected]
											</a>
										</span>
										<span>
											<a
												href="https://themeearth.com/cdn-cgi/l/email-protection"
												className="__cf_email__"
												data-cfemail="eb92849e99868a8287ab8c868a8287c5888486"
											>
												[email&#160;protected]
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="contact-info">
								<div className="contact-info-item">
									<div className="contact-info-icon">
										<i className="fa fa-clock-o"></i>
									</div>
									<div className="contact-info-text">
										<h2>office time</h2>
										<span>Mon - Thu 9:00 am - 4.00 pm</span>
										<span>Thu - Mon 10.00 pm - 5.00 pm</span>
										<span>Mon Day Office Holiday</span>
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
