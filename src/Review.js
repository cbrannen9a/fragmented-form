import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	listItem: {
		padding: `${theme.spacing.unit}px 0`,
	},
	total: {
		fontWeight: '700',
	},
	title: {
		marginTop: theme.spacing.unit * 2,
	},
});

const ccFormatter = (value) => {
	return value.substring(0, 4) +
		'-XXXX-XXXX-' +
		value.substring(12, 16);
}

function Review(props) {
	const { state, classes } = props;
	return (
		<Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{state.products.map(product => (
					<ListItem className={classes.listItem} key={product.name}>
						<ListItemText primary={product.name} secondary={product.desc} />
						<Typography variant="body2">{product.price}</Typography>
					</ListItem>
				))}
				<ListItem className={classes.listItem}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" className={classes.total}>
						$34.06
          			</Typography>
				</ListItem>
			</List>
			<Grid container spacing={16}>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
						Shipping
          			</Typography>
					<Typography gutterBottom>{state.addressForm.firstName} {state.addressForm.lastName}</Typography>
					<Typography gutterBottom>{state.addressForm.address1}</Typography>
					<Typography gutterBottom>{state.addressForm.address2}</Typography>
					<Typography gutterBottom>{state.addressForm.city}</Typography>
					<Typography gutterBottom>{state.addressForm.state}</Typography>
					<Typography gutterBottom>{state.addressForm.zip}</Typography>
					<Typography gutterBottom>{state.addressForm.country}</Typography>
				</Grid>
				<Grid item container direction="column" xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
						Payment details
          			</Typography>
					<Typography gutterBottom>{state.paymentForm.cardName}</Typography>
					<Typography gutterBottom>{ccFormatter(state.paymentForm.cardNumber)}</Typography>
					<Typography gutterBottom>{state.paymentForm.expDate}</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
}

Review.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);