import { FC } from "react";
import styled from "styled-components";
import "./App.css";
import { AppStateProvider } from "./AppState";
import RangeSlider from "./components/RangeSlider";
import ToggleBilling from "./components/ToggleBilling";
import Check from "./images/icon-check.svg";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 320px;
	gap: 30px;
	color: var(--grayish-blue);
	@media (min-width: 600px) {
		width: 450px;
	}
`;
const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	background: transparent;
	width: 100%;
	padding: 20px;

	h3 {
		color: var(--dark-desaturated-blue);
		padding: 10px 0;
	}
	p {
		font-size: 0.8rem;
		width: 180px;
		line-height: 20px;
		@media (min-width: 600px) {
			font-size: 0.7rem;
			width: 400px;
		}
	}
`;
const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: white;
	width: 100%;
	border-radius: 10px;
	gap: 30px;
	padding: 30px 0px;
	color: var(--grayish-blue);
	/* box-shadow: 0 1em 1em 0.1em var(--very-pale-blue); */
	box-shadow: 0 1em 2em var(--lighter-grayish-blue);

	hr {
		width: 100%;
		border-bottom: 0.1rem solid var(--lighter-grayish-blue);
	}
	button {
		padding: 10px 30px;
		border-radius: 30px;
		cursor: pointer;
		color: var(--pale-blue);
		background-color: var(--dark-desaturated-blue);
	}

	ul {
		list-style: none;
		font-size: 0.8rem;
		li {
			margin: 5px 0;
			span {
				content: url(${Check});
				margin-right: 15px;
			}
		}
		@media (min-width: 600px) {
			text-align: left;
		}
	}
	.chip {
		width: 40px;
		padding: 2px;
		border-radius: 20px;
		color: var(--light-red);
		background-color: var(--light-grayish-red);
		font-size: 0.6rem;
	}
`;
const StyledToggle = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.7rem;
	gap: 10px;
	padding-bottom: 10px;
`;

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	@media (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 60px;
	}
`;
const App: FC = () => {
	return (
		<AppStateProvider>
			<StyledApp className="app">
				<StyledHeader>
					<h3>Simple, traffic-based pricing</h3>
					<p> Sign-up for our 30-day trial. No credit card required.</p>
				</StyledHeader>
				<StyledMain>
					<RangeSlider width={280} bgcolor={"hsl(227, 35%, 25%)"} />
					<StyledToggle>
						<span>Monthly Billing</span>
						<ToggleBilling width={40} bgcolor={"hsl(227, 35%, 25%)"} />
						<span>Yearly Billing</span>
						<span className="chip"> -25%</span>
					</StyledToggle>
					<hr />
					<StyledList>
						<ul>
							<li>
								<span></span>Unlimited websites
							</li>
							<li>
								<span></span>100% data ownership
							</li>
							<li>
								<span></span>Email reports
							</li>
						</ul>
						<button>Start my trial</button>
					</StyledList>
				</StyledMain>
			</StyledApp>
		</AppStateProvider>
	);
};

export default App;
