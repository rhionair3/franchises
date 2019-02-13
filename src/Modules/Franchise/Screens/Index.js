import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Edit, DeleteForever } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../Assets/themes/stylesBrambang';

class Franchise extends Component {
  render() {
    const { classes } = this.props;
    const columns = [
        {
            name: "Nama Penanggung Jawab",
            options: {
                filter: true
            }
        },
        {
            name: "Perusahaan",
            options: {
                filter: true
            }
        }, 
        {
            name: "Alamat",
            options: {
                filter: false
            }
        },
        {
            name: "No. Telp",
            options: {
                filter: false
            }
        },
        {
            name: "Status",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    let siTrue = (value === `true`);
                    return (
                        <FormControlLabel
                            label={siTrue ? "ACTIVE" : "INACTIVE"}
                            value={siTrue ? "Yes" : "No"}
                            control={
                                <Switch
                                    color="primary"
                                    checked={siTrue}
                                    value={siTrue ? "Yes" : "No"}
                                />
                            }
                            onChange={event => {
                            updateValue(event.target.value === "Yes" ? false : true);
                            }}
                        />
                    );
                }
            }
        },
        {
            name: "Action",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <ToggleButtonGroup>
                            <ToggleButton className={classes.btnSuccess}>
                            <Edit />
                            </ToggleButton>
                            <ToggleButton className={classes.btnPrimary}>
                            <DeleteForever />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    );
                }

            }
        }
    ];

    const data = [
        ["Bajigur", "Test Corp", "Jaksel", "08123425365", `false`, 1],
        ["Oncom", "Test Corp", "Jakut", "08123425366", `true`, 2],
        ["Bob Marley", "Test Corp", "Jaktim", "08123425367", `false`, 3],
        ["Moch. Ali", "Test Corp", "Bekasi", "0812342536", `true`, 4],
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <MUIDatatable
            title={"Franchise List"} 
            data={data} 
            columns={columns} 
            options={options} 
        />
    );
  }
}

Franchise.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang)(Franchise);