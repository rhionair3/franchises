import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class FormMasterGerobak extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id: this.props.vd.id,
        code: this.props.vd.code,
        name: this.props.vd.name,
        status: this.props.vd.status,
        createdAt: 0,
        createdBy: "",
        updatedAt: 0,
        updatedBy: ""
      };
  }

  handleChange = () => event => {
      const state = this.state;
      state[event.target.name] = event.target.value;
      this.setState(state);
      this.props.onChangeChild(state);
  }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
              <Grid container spacing={24}>
                  <Grid item xs={12} md={12}>
                      <Grid container spacing={24}>
                          <Grid item xs={12} md={12}>
                                <input
                                    id="id"
                                    name="id"
                                    fullWidth
                                    value={this.state.id}
                                    type="hidden"
                                />
                                <TextField
                                    required
                                    id="cdgerobak"
                                    name="code"
                                    label="Code Gerobak"
                                    fullWidth
                                    value={this.state.code}
                                    onChange={this.handleChange('code')}
                                    margin="dense"
                                    variant="outlined"
                                />
                          </Grid>
                          <Grid item xs={12} md={12}>
                              <TextField
                              required
                              id="namagerobak"
                              name="name"
                              label="Nama Gerobak"
                              fullWidth
                              value={this.state.name}
                              onChange={this.handleChange('name')}
                              margin="dense"
                              variant="outlined"/>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <TextField
                                id="status"
                                name="status"
                                select
                                label="Pilih Status"
                                value={this.state.status}
                                onChange={this.handleChange('status')}
                                fullWidth
                                SelectProps={{
                                    MenuProps: {
                                    className: classes.menu,
                                    },
                                }}
                                margin="dense"
                                variant="outlined"
                            >
                                <MenuItem value="">
                                <em>Pilih</em>
                                </MenuItem>
                                <MenuItem value={1}>Tersedia</MenuItem>
                                <MenuItem value={2}>Dalam Pemesanan</MenuItem>
                                <MenuItem value={3}>Rusak</MenuItem>
                                <MenuItem value={4}>Dibatalkan</MenuItem>
                            </TextField>
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
