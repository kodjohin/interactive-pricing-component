import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../AppState";
import Slider from "../images/icon-slider.svg";

const StyledRangeSlider = styled.div`
	--w: ${(props) => props.width}px;
	--bgcolor: ${(props) => props.bgcolor};
	--thumb-size: 30px;

	width: var(--w);
	display: flex;
	flex-direction: column;
	font-size: 0.8rem;
	gap: 40px;

	> input {
		display: block;
		appearance: none;
		background-color: var(--soft-cyan);
		width: var(--w);
		height: 5px;
		border-radius: 5px;
		margin: 0 auto;
		outline: 0;
		::-webkit-slider-thumb {
			appearance: none;
			background-color: var(--strong-cyan);
			background-image: url(${Slider});
			background-repeat: no-repeat;
			background-position: center;
			width: var(--thumb-size);
			height: var(--thumb-size);
			border-radius: 50%;
			box-shadow: 0 0.5em 1em var(--soft-cyan);
			cursor: pointer;
			transition: 0.3s ease;

			:hover {
				background-color: var(--soft-cyan);
			}
		}
	}
	> label {
		text-transform: uppercase;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 1.6px;
	}
	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.7rem;
		span {
			text-align: center;
			font-size: 2rem;
			font-weight: 800;
			color: var(--bgcolor);
		}
	}
`;

const RangeSlider = ({ width, bgcolor }) => {
	const { range, price, billing, setRange, setPrice } = useContext(Context);
	const handleChange = (e) => setRange(parseInt(e.target.value));

	useEffect(() => {
		switch (true) {
			case range < 10:
				setPrice(8);
				break;
			case 10 < range && range < 50:
				setPrice(12);
				break;
			case 50 < range && range < 100:
				setPrice(16);
				break;
			case 100 < range && range < 500:
				setPrice(24);
				break;
			case 500 < range && range < 1000:
				setPrice(36);
				break;
			default:
				break;
		}
	}, [range, billing]);

	return (
		<StyledRangeSlider width={width} bgcolor={bgcolor}>
			<label htmlFor="range-slider">{range}k Pageviews</label>
			<input
				type="range"
				min="0"
				max="1000"
				defaultValue={range}
				step="1"
				onChange={(e) => handleChange(e)}
			/>
			<div>
				<span>${Number(price).toFixed(2)}</span> / month
			</div>
		</StyledRangeSlider>
	);
};

export default RangeSlider;
