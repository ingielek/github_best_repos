import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class SelectPeriod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
    }

    handleChange = (value) => {
        this.setState({selectedValue: value});
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Time Period</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="daily" control={<Radio color="primary" />} label="Daily" />
                        <FormControlLabel value="weekly" control={<Radio color="primary" />} label="Weekly" />
                        <FormControlLabel value="monthly" control={<Radio color="primary" />} label="Monthly" />
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
}
SelectPeriod.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectPeriod);