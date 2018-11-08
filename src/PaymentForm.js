import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm(props) {
	const { state, handleChange } = props;
	return (
		<Fragment>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={24}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Name on card"
						fullWidth
						value={state.paymentForm.cardName}
						onChange={handleChange('cardName', 'paymentForm')}
						error={!state.validation.cardName}
						helperText={state.validation.errorTypes.cardName}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Card number"
						fullWidth
						value={state.paymentForm.cardNumber}
						onChange={handleChange('cardNumber', 'paymentForm')}
						error={!state.validation.cardNumber}
						helperText={state.validation.errorTypes.cardNumber}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Expiry date (MM/YY)"
						fullWidth
						inputProps={{
							maxLength: 5,
						}}
						value={state.paymentForm.expDate}
						onChange={handleChange('expDate', 'paymentForm')}
						error={!state.validation.expDate}
						helperText={state.validation.errorTypes.expDate}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						inputProps={{
							maxLength: 3,
						}}
						helperText={
							(!state.validation.errorTypes.cvv
								|| state.validation.errorTypes.cvv.length === 0)
								? "Last three digits on signature strip"
								: state.validation.errorTypes.cvv}
						fullWidth
						value={state.paymentForm.cvv}
						onChange={handleChange('cvv', 'paymentForm')}
						error={!state.validation.cvv}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default PaymentForm;