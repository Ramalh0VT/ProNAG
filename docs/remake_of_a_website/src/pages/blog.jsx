import "../app/globals.css"
import Ncard from "@/components/news"
export default function blog(){
const news = [
	{
		id: 1,
		title: "Local Community Opens New Public Park",
		desc: "Residents celebrate the opening of a green space featuring a playground and walking trails.",
		category: "Local",
	},
	{
		id: 2,
		title: "Scientists Discover New Species in Deep Ocean",
		desc: "Marine researchers identify a bioluminescent organism during an expedition.",
		category: "Science",
	},
	{
		id: 3,
		title: "High School Robotics Team Wins National Championship",
		desc: "Students take first place after months of designing and programming their robot.",
		category: "Education",
	},
	{
		id: 4,
		title: "City Implements New Bike Lanes Downtown",
		desc: "Urban planners hope the addition will encourage eco-friendly commuting and safety.",
		category: "Infrastructure",
	},
	{
		id: 5,
		title: "Annual Art Festival Returns This Weekend",
		desc: "Artists from across the region gather to showcase paintings, sculptures, and live music.",
		category: "Culture",
	},
	{
		id: 6,
		title: "Breakthrough in Solar Panel Efficiency Announced",
		desc: "Engineers develop a new coating that captures significantly more sunlight.",
		category: "Technology",
	},
	{
		id: 7,
		title: "Local Library Launches Free Coding Workshops",
		desc: "Programs aimed at teenagers and kids seek to teach fundamental programming skills.",
		category: "Community",
	},
	{
		id: 8,
		title: "Record Turnout for Annual Charity Marathon",
		desc: "Thousands of runners raise funds for local healthcare initiatives.",
		category: "Sports",
	},
	{
		id: 9,
		title: "Museum Unveils Ancient History Exhibition",
		desc: "Rare artifacts from ancient civilizations go on public display for the first time.",
		category: "History",
	},
	{
		id: 10,
		title: "Space Agency Successfully Launches Weather Satellite",
		desc: "New satellite will provide more accurate forecasting and climate data.",
		category: "Space",
	}
];

	return(
		<>
			<h1>News around the world</h1>

			{news.map(n => {
				return (
					<Ncard
						key = {n.id}
						title = {n.title}
						desc = {n.desc}
						img = {n.img}
					/>
				);
			})}
		</>
	);
}
