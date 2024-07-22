import React from "react";
import About from "../components/About";
import BlogMain from "../components/BlogMain";
import Galery from "../components/Galery";
import OurServices from "../components/OurServices";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import WhyChose from "../components/WhyChose";
import Service from "../pages/Service";

export default function Main() {
	return (
		<div>
			<Slider />
			<OurServices />
			{/* <Service /> */}
			<WhyChose />
			<About />
			<Galery />
			<Testimonial />
			<BlogMain />
		</div>
	);
}
