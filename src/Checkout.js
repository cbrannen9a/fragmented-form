import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { fieldValidator } from './fieldValidator';

const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2,
		[theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 3,
		padding: theme.spacing.unit * 2,
		[theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
			marginTop: theme.spacing.unit * 6,
			marginBottom: theme.spacing.unit * 6,
			padding: theme.spacing.unit * 3,
		},
	},
	stepper: {
		padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing.unit * 3,
		marginLeft: theme.spacing.unit,
	},
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];



class Checkout extends React.Component {
	state = {
		activeStep: 0,
		addressForm: {
			firstName: '',
			lastName: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			country: '',
		},
		paymentForm: {
			cardName: '',
			cardNumber: '',
			expDate: '',
			cvv: '',
		},
		products: [
			{ name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
			{ name: 'Product 2', desc: 'Another thing', price: '$3.47' },
			{ name: 'Product 3', desc: 'Something else', price: '$6.51' },
			{ name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },

		],
		validation: {
			hasErrorAddressForm: true,
			hasErrorPaymentForm: true,
			errorTypes: {}
		}
	};

	handleChange = (name, area) => event => {
		const value = event.target.value;
		this.setState({
			[area]: {
				...this.state[area],
				[name]: value
			}
		}, () => { this.handleValidation(name, value); });
	}

	handleValidation = (name, value) => {
		let [v, m] = fieldValidator(name, value);

		this.setState({
			validation: {
				...this.state.validation,
				errorTypes: {
					...this.state.validation.errorTypes,
					[name]: m
				},
				[name]: v,

			}
		}, this.handleFormValidation);
	}

	handleFormValidation = () => {
		const { validation } = this.state;
		this.setState({
			validation: {
				...validation,
				hasErrorAddressForm: !this.state.validation.firstName
					|| !this.state.validation.lastName
					|| !this.state.validation.address1
					|| !this.state.validation.city
					|| !this.state.validation.zip
					|| !this.state.validation.country,
				hasErrorPaymentForm: !this.state.validation.cardName
					|| !this.state.validation.cardNumber
					|| !this.state.validation.expDate
					|| !this.state.validation.cvv
			}
		});
	}

	handleValid = () => {
		const { activeStep, validation } = this.state;
		if (activeStep === 0 && !validation.hasErrorAddressForm) {
			return false;
		} else if (activeStep === 1 && !validation.hasErrorPaymentForm) {
			return false;
		} else if (activeStep === 2) {
			return false;
		}
		return true;
	}

	getStepContent = (step) => {
		switch (step) {
			case 0:
				return <AddressForm
					state={this.state}
					handleChange={this.handleChange}
				/>;
			case 1:
				return <PaymentForm state={this.state}
					handleChange={this.handleChange}
				/>;
			case 2:
				return <Review state={this.state}
					handleChange={this.handleChange}
				/>;
			default:
				throw new Error('Unknown step');
		}
	}

	handleNext = () => {
		this.setState(state => ({
			activeStep: state.activeStep + 1,
		}));
	};

	handleBack = () => {
		this.setState(state => ({
			activeStep: state.activeStep - 1,
		}));
	};

	handleReset = () => {
		this.setState({
			activeStep: 0,
		});
	};

	render() {
		const { classes } = this.props;
		const { activeStep } = this.state;

		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar position="absolute" color="default" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" color="inherit" noWrap>
							Company name
            </Typography>
					</Toolbar>
				</AppBar>
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Typography component="h1" variant="h4" align="center">
							Checkout
            </Typography>
						<Stepper activeStep={activeStep} className={classes.stepper}>
							{steps.map(label => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
						<React.Fragment>
							{activeStep === steps.length ? (
								<React.Fragment>
									<Typography variant="h5" gutterBottom>
										Thank you for your order.
                  </Typography>
									<Typography variant="subtitle1">
										Your order number is #2001539. We have emailed your order confirmation, and will
										send you an update when your order has shipped.
                  </Typography>
								</React.Fragment>
							) : (
									<React.Fragment>
										{this.getStepContent(activeStep)}
										<div className={classes.buttons}>
											{activeStep !== 0 && (
												<Button onClick={this.handleBack} className={classes.button}>
													Back
                      </Button>
											)}
											<Button
												variant="contained"
												color="primary"
												onClick={this.handleNext}
												className={classes.button}
												disabled={this.handleValid()}
											>
												{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
											</Button>
										</div>
									</React.Fragment>
								)}
						</React.Fragment>
					</Paper>
				</main>
			</React.Fragment>
		);
	}
}

Checkout.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);