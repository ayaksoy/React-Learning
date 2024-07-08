import Slider from "./Slider";
import Content from "./Content";

function Body(data) {
	return (
		<div>
			<hr />
			<h5>{data.title}</h5>
			<Slider slider={data.slider} />
			<Content content={data.content} />
		</div>
	);
}

export default Body;
