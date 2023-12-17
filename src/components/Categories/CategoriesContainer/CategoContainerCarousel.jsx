import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { useAllCategories } from "../../../hooks/useAllCategories/useAllCategories";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { style } from "./CategoContainerCarousel.modules.css";

export const CategoContainerCarousel = () => {
	const allCategories = useAllCategories();

	return (
		<Splide
			options={{
				type: "slide",
				gap: "10px",
				// drag: "free",
				arrows: true,
				pagination: false,
				perPage: 4,
				breakpoints: {
					1300: { perPage: 3 },
					1000: { perPage: 2 },
					700: { perPage: 1 },
				},

				// autoScroll: {
				// 	pauseOnHover: false,
				// 	pauseOnFocus: false,
				// 	rewind: false,
				// 	speed: 0.5,
				// },
			}}
			// extensions={{ AutoScroll }}
		>
			{allCategories.map((el,index) => (
				<SplideSlide key={el.id}>
					<CategoryCard
						img={`https://telran-project-backend-y5gf.onrender.com${el.image}`}
						title={el.title}
						categoryNum={index+1}
					/>
				</SplideSlide>
			))}
		</Splide>
	);
};
