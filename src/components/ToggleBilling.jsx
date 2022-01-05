import styled from "styled-components";

const StyledToggle = styled.div`
	--w: ${(props) => props.width}px;
	--bgcolor: ${(props) => props.bgcolor};
	--thumb-size: 15px;
	height: 20px;

	.checkbox {
		position: relative;
		display: inline-block;
	}
	.checkbox:after,
	.checkbox:before {
		font-family: FontAwesome;
		font-feature-settings: normal;
		-webkit-font-kerning: auto;
		font-kerning: auto;
		font-language-override: normal;
		font-stretch: normal;
		font-style: normal;
		font-synthesis: weight style;
		font-variant: normal;
		font-weight: normal;
		text-rendering: auto;
	}
	.checkbox input {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		opacity: 0;
		cursor: pointer;
	}
	.checkbox input:hover + label {
		border-color: var(--soft-cyan);
		background-color: var(--soft-cyan);
	}
	.checkbox input:checked + label:after {
		background: #fff;
		left: 19px;
	}

	.checkbox label {
		background: var(--light-grayish-blue);
		border: 5px solid var(--light-grayish-blue);
		width: var(--w);
		height: calc(var(--w) / 2);
		position: relative;
		display: inline-block;
		border-radius: 46px;
		transition: 0.4s;
	}
	.checkbox label:after {
		content: "";
		position: absolute;
		width: calc(var(--w) / 3);
		height: calc(var(--w) / 3);
		border-radius: 100%;
		left: -2px;
		top: -2px;
		z-index: 2;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		transition: 0.4s;
		background: #fff;
		box-shadow: none;
		width: calc(var(--w) / 3);
		height: calc(var(--w) / 3);
	}
`;

const ToggleBilling = ({ width, bgcolor }) => {
	return (
		<StyledToggle width={width} bgcolor={bgcolor}>
			<div className="checkbox">
				<input type="checkbox" />
				<label></label>
			</div>
		</StyledToggle>
	);
};

export default ToggleBilling;
