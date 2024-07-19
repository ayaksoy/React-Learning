import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSliders } from "../store/sliderSlice";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from "reactstrap";

export default function Slider() {
	const dispatch = useDispatch();
	const slides = useSelector((state) => state.sliders.sliders);
	const slideStatus = useSelector((state) => state.sliders.status);
	const error = useSelector((state) => state.sliders.error);
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [animating, setAnimating] = React.useState(false);

	useEffect(() => {
		if (slideStatus === "idle") {
			dispatch(fetchSliders());
		}
	}, [slideStatus, dispatch]);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	if (slideStatus === "loading") {
		return <div>Loading...</div>;
	}

	if (slideStatus === "failed") {
		return <div>Error: {error}</div>;
	}

	const slidesItems = slides.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.id}
			>
				<img src={item.image} alt={item.altText} />
				<CarouselCaption
					captionText={item.caption}
					captionHeader={item.header}
				/>
			</CarouselItem>
		);
	});

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators
				items={slides}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slidesItems}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
}
