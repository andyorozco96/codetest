import React, { useState } from 'react';
import axios from 'axios';

import './getRate.css';

function GetRate() {
	//console.log(self);

	const [values, setValues] = useState({
		date: '',
		amount: '',
		symbols: '',
	});

	const [response, setResponse] = useState('');

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
		console.log(values);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//JSON.parse(values);
		axios.post('http://localhost:8888/api/0.2/', values).then((data) => {
			console.log(data.data.results[0].roundedResult);
			setResponse(data.data.results[0].roundedResult);
		});
	};
	return (
		<div class="main">
			<div class="main__btn__container">
				<button class="main__btn">GET RATE</button>
				<button class="main__btn">RATE 30 DAY HISTORY</button>
			</div>

			<div class="main__form__container">
				<form>
					<input
						type="text"
						name="amount"
						placeholder="Amount"
						value={values.amount}
						onChange={handleChange}
					></input>
					{/* <select>
						<option hidden selected value="">
							From
						</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="BTC">BTC</option>
						<option value="GBP">GBP</option>
						<option value="ARS">ARS</option>
						<option value="CLP">CLP</option>
						<option value="COP">COP</option>
						<option value="CNY">CNY</option>
					</select> */}
					<select onChange={(e) => setValues({ ...values, symbols: e.target.value })}>
						<option hidden selected value="">
							To
						</option>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="BTC">BTC</option>
						<option value="GBP">GBP</option>
						<option value="ARS">ARS</option>
						<option value="CLP">CLP</option>
						<option value="COP">COP</option>
						<option value="CNY">CNY</option>
					</select>
					<input
						name="date"
						type="text"
						placeholder="Date"
						value={values.date}
						onChange={handleChange}
					></input>
					<button type="submit" onClick={handleSubmit}>
						GO
					</button>
				</form>
			</div>

			<div class="main__output__container">
				{values.amount && <p>{values.amount} USD = </p>}
				{response && <span>{response}</span>}
			</div>
		</div>
	);
}

export default GetRate;
