import React from 'react';

import './getRate.css';

function GetRate() {
	//console.log(self);
	return (
		<div class="main">
			<div class="main__btn__container">
				<button class="main__btn">GET RATE</button>
				<button class="main__btn">RATE 30 DAY HISTORY</button>
			</div>

			<div class="main__form__container">
				<form action="">
					<input type="text" placeholder="Amount" />
					<select>
						<option hidden selected value="">
							From
						</option>
					</select>
					<select>
						<option hidden selected value="">
							To
						</option>
					</select>
					<button>GO</button>
				</form>
			</div>

			<div class="main__output__container">
				<p>1 USD = </p>
				<span> 11.8374 CAD</span>
			</div>
		</div>
	);
}

export default GetRate;
