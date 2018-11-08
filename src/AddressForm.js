import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function AddressForm(props) {
	const { state, handleChange } = props;

	return (
		<Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
      		</Typography>
			<Grid container spacing={24}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
						fullWidth
						autoComplete="fname"
						value={state.addressForm.firstName}
						onChange={handleChange('firstName', 'addressForm')}
						error={!state.validation.firstName}
						helperText={state.validation.errorTypes.firstName}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						autoComplete="lname"
						value={state.addressForm.lastName}
						onChange={handleChange('lastName', 'addressForm')}
						error={!state.validation.lastName}
						helperText={state.validation.errorTypes.lastName}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="address1"
						name="address1"
						label="Address line 1"
						fullWidth
						autoComplete="billing address-line1"
						value={state.addressForm.address1}
						onChange={handleChange('address1', 'addressForm')}
						error={!state.validation.address1}
						helperText={state.validation.errorTypes.address1}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="addiress2"
						name="addiress2"
						label="Address line 2"
						fullWidth
						autoComplete="billing address-line2"
						value={state.addressForm.address2}
						onChange={handleChange('address2', 'addressForm')}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="billing address-level2"
						value={state.addressForm.city}
						onChange={handleChange('city', 'addressForm')}
						error={!state.validation.city}
						helperText={state.validation.errorTypes.city}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="state"
						name="state"
						label="State/Province/Region"
						fullWidth
						value={state.addressForm.state}
						onChange={handleChange('state', 'addressForm')}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="zip"
						name="zip"
						label="Zip / Postal code"
						fullWidth
						autoComplete="billing postal-code"
						value={state.addressForm.zip}
						onChange={handleChange('zip', 'addressForm')}
						error={!state.validation.zip}
						helperText={state.validation.errorTypes.zip}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="billing country"
						value={state.addressForm.country}
						onChange={handleChange('country', 'addressForm')}
						error={!state.validation.country}
						helperText={state.validation.errorTypes.country}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default AddressForm;