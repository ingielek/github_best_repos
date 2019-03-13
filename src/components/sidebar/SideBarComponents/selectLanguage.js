import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSelectedLanguage } from '../../../services/repositories'
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { compose } from 'redux'
import { connect} from "react-redux";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectLanguage extends Component {

    handleChange = event => {
        const language = event.target.value;
        this.props.getSelectedLanguage(language);
    };

    render(){
        const { classes } = this.props;

        return (
            <div className="selectLanguage">
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <Select
                            value={this.props.language}
                            onChange={this.handleChange}
                            displayEmpty
                            name="language"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="javascript">Javascript</MenuItem>
                            <MenuItem value='java'>Java</MenuItem>
                            <MenuItem value='python'>Python</MenuItem>
                        </Select>
                        <FormHelperText>Select Language</FormHelperText>
                    </FormControl>
                </form>
            </div>
        )
    }
}

SelectLanguage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({repositories}) => {
    return {
        language: repositories.language
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps,
        { getSelectedLanguage })
)(SelectLanguage);