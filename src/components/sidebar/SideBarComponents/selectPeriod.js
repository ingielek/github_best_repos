import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRepos } from '../../../services/repositories'
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { compose } from 'redux'
import { connect} from "react-redux";

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
            timePeriod: 'daily'
        };
    }

    componentDidMount() {
        const { timePeriod } = this.state;
        this.props.fetchRepos(timePeriod)
    }

    handleChange = (event) => {
        this.setState({
            timePeriod: event.target.value
        });
        const { timePeriod } = this.state;
        this.props.fetchRepos(timePeriod);
    };

    render() {
        const { classes} = this.props;
        return (
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Time Period</FormLabel>
                    <RadioGroup
                        aria-label="TimePeriod"
                        name="timePeriod"
                        className={classes.group}
                        value={this.state.timePeriod}
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

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories
    }
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        {fetchRepos}
    ))(SelectPeriod);