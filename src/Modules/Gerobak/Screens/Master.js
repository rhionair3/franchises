import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from '@material-ui/core/Paper';
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Edit, DeleteForever } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../Assets/themes/stylesBrambang';
import FormMasterGerobak from '../Components/FormMasterGerobak';
function TabContainer(props) {
  return (
    <div component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class MasterGerobak extends Component {
    state = {
        open: false,
        openDel: false,
        notify: false,
        value: 0
    };

    modalFormOpen = (value) => {
        console.log(value);
        if (value) {
            this.setState({
                open: true,
            });
        } else {
            this.setState({
                open: true,
                value: "profilContainer"
            })
        }
    };

    modalFormClose = () => {
        console.log('Harusnya Notif Tereksekusi');
        this.setState({
            open: false,
        });
        // this.showNotif({ vertical: 'top', horizontal: 'right' })
    };

    submitForm = () => {
        this.setState({
            open: false
        });
    };

    showNotif = state => () => {
        console.log('Harusnya Notif Tereksekusi');
        this.setState({
            notify: true,
            ...state
        })
    };

    hideNotif = () => {
        this.setState({
            notify:false
        })
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    
    confirmDeleteOpen = () => {
        this.setState({
            openDel: true
        });
    };

    confirmDeleteClose = () => {
        this.setState({
            openDel: false
        });
    }

    render() {
        const { classes } = this.props;
        const columns = [
            {
                name: "Code Gerobak",
                options: {
                    filter: true
                }
            },
            {
                name: "Type Gerobak",
                options: {
                    filter: true
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
                                <ToggleButton className={classes.btnSuccess} onClick={this.modalFormOpen}>
                                <Edit />
                                </ToggleButton>
                                <ToggleButton className={classes.btnPrimary} onClick={this.confirmDeleteOpen}>
                                <DeleteForever />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        );
                    }

                }
            }
        ];

        const data = [
            ["GD001", "Gerobak Dorong", "true",1],
            ["GK001", "Gerobak Kuda", "false",2],
            ["GM002", "Gerobak Motor", "false",3],
            ["GB003", "Gerobak Mobil", "true",4],
        ];

        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Tambah Gerobak"} style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={this.showNotif({ vertical: 'top', horizontal: 'right' })}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                );
            }
        };

        return (
            <div>
                <div className={classes.headerComponentWrapper}>
                    <Paper className={classes.headerComponentInner}r>
                        <Typography variant="h6" gutterBottom>
                            Informasi Data Master Gerobak
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable
                            title={"List Data Tipe Gerobak"} 
                            data={data} 
                            columns={columns} 
                            options={options} 
                        />
                        <Dialog
                            open={this.state.open}
                            disableBackdropClick='true'
                            onClose={this.modalFormClose}
                            onExited={this.showNotif({ vertical: 'top', horizontal: 'right' })}
                            aria-labelledby="form-dialog-title"
                            fullWidth='true'
                            maxWidth = 'lg'
                            scroll = 'body'
                        >
                        <DialogTitle id="form-dialog-title">Form Data Gerobak Franchise</DialogTitle>
                            <DialogContent className={classes.noPaddingDialogContent}>
                                <div component="div" style={{ padding: 8 * 3 }}>
                                    <FormMasterGerobak />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.modalFormClose} color="primary">
                                    Batal
                                </Button>
                                <Button onClick={this.submitForm} color="primary">
                                    Simpan
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={this.state.openDel}
                            disableBackdropClick='true'
                            onClose={this.confirmDeleteClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">Konfirmasi Hapus Data Gerobak Franchise</DialogTitle>
                        <DialogContent bacgroundColor="primary">
                            <DialogContentText id="alert-dialog-description">
                                Data Gerobak Franchise Akan Dihapus Dari List. Dan Tidak Akan tampil Diwaktu Berikutnya.
                                Apakah Anda Yakin Ingin Menghapus Data Gerobak Franchise ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.confirmDeleteClose} color="primary">
                                Batal
                            </Button>
                            <Button onClick={this.confirmDeleteClose} color="primary" autoFocus>
                                Ya, Hapus
                            </Button>
                        </DialogActions>
                        </Dialog>
                    </Paper>
                </div>
                <Snackbar
                    anchorOrigin={{ 
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                    open={this.state.notify}
                    onClose={this.hideNotif}
                >
                    <SnackbarContent
                        className={classes.btnSuccess}
                        aria-describedby="client-snackbar"
                        message={<span id="message-id">I love snacks</span>}
                    />
                </Snackbar>
            </div>

        );
  }
}

MasterGerobak.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(MasterGerobak);