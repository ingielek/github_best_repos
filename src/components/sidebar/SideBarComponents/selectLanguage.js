import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class SelectLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryValue: ''
        };
    }

    handleChange = event => {
        this.setState({
            queryValue: event.target.value,
        });
        console.log(this.state.queryValue);
    };

    render(){
        const { classes } = this.props;

        return (
            <div className="selectLanguage">
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                    id="outlined-dense"
                    label="Select language"
                    onChange={this.handleChange}
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                     />
                </form>
            </div>
        )
    }
}

SelectLanguage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectLanguage);