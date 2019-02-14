import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

class FormKoki extends React.Component {
    
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
    handleDateChange = date => {
        this.setState({ selectedDate: moment(date, 'YYYY-MM-DD') });
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
                                <TextField
                                    value={this.state.ftype}
                                    onChange={this.handleChange}
                                    select
                                    inputProps={{
                                    name: 'ftype',
                                    }}
                                    margin = "dense"
                                    variant = "outlined"
                                    fullWidth
                                    label = "Disediakan Untuk pemilik"
                                >
                                    <MenuItem value="">
                                    <em>Tidak memilih</em>
                                    </MenuItem>
                                    <MenuItem value={20}>Sung Ha Jung</MenuItem>
                                    <MenuItem value={30}>Anonymous</MenuItem>
                                    <MenuItem value={40}>David Becham</MenuItem>
                                    <MenuItem value={50}>Sianturi</MenuItem>
                                    <MenuItem value={60}>Borneo</MenuItem>
                                    <MenuItem value={70}>Bajigur</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="price" label="Nama Koki" fullWidth margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="cardNumber" label="No. Identitas Koki ( KTP / SIM / PASPOR )" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                < MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale='id'>
                                    <DatePicker
                                        value={selectedDate}
                                        format={'YYYY-MM-DD'}
                                        onChange={this.handleDateChange}
                                        required 
                                        id="tglPengambilan" 
                                        label="Tanggal Pengambilan" 
                                        fullWidth 
                                        margin = "dense"
                                        variant = "outlined"
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

FormKoki.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormKoki);