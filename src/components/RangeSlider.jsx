import styled from "styled-components";
import { useState, useEffect } from "react";
import Slider from "../images/icon-slider.svg";

const StyledRangeSlider = styled.div`
	--w: ${(props) => props.width}px;
	--bgcolor: ${(props) => props.bgcolor};
	--thumb-size: 15px;

	/* border: 1px solid pink; */
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
			width: 30px;
			height: 30px;
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
	const [value, setValue] = useState(20);
	const [price, setPrice] = useState(8);
	const handleChange = (e) => {
		setValue(parseInt(e.target.value));
	};

	useEffect(() => {
		switch (true) {
			case value < 10:
				setPrice(8);
				break;
			case 10 < value && value < 50:
				setPrice(12);
				break;
			case 50 < value && value < 100:
				setPrice(16);
				break;
			case 100 < value && value < 500:
				setPrice(24);
				break;
			case 500 < value && value < 1000:
				setPrice(36);
				break;
			default:
				break;
		}
	}, [value]);

	return (
		<StyledRangeSlider width={width} bgcolor={bgcolor}>
			<label htmlFor="range-slider">{value}k Pageviews</label>
			<input
				type="range"
				min="0"
				max="1000"
				defaultValue={value}
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
