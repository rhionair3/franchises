import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
    paddingPaper: {
        padding: 5
    }
});

class FormMasterGerobak extends React.Component {
    
        state = {
            ftype: '',
            name: 'hai',
            selectedDate: new Date(),
        };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { selectedDate } = this.state;
        console.log(selectedDate);
        return (
            <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={12}>
                            <TextField required id="cdgerobak" label="Code Gerobak" fullWidth margin="dense" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="namagerobak" label="Nama Gerobak" fullWidth margin="dense" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="price" label="Harga Satuan" fullWidth margin="dense" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                            <TextField required label="Deskripsi Gerobak" fullWidth  margin="dense" variant="outlined"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </React.Fragment>
        );
    }
}

FormMasterGerobak.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormMasterGerobak);