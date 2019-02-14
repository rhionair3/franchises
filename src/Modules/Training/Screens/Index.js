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
import { Edit, DeleteForever } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import stylesBrambang from '../../../Assets/themes/stylesBrambang';
import FormTraining from '../Components/FormTraining';
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

class DataTraining extends Component {
    state = {
        open: false,
        openDel: false,
        value: 0
    };

    modalFormOpen = (value) => {
        this.setState({
            open: true,
        });
    };

    modalFormClose = () => {
        this.setState({
            open: false
        });
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
                name: "Code Koki",
                options: {
                    filter: true
                }
            },
            {
                name: "Nama Koki",
                options: {
                    filter: true
                }
            }, 
            {
                name: "Pemilik Franchise",
                options: {
                    filter: false
                }
            },
            {
                name: "No. Telp Pemilik",
                options: {
                    filter: false
                }
            }, 
            {
                name: "Kelulusan",
                options: {
                    filter: false
                }
            },
            {
                name: "Aktif",
                options: {
                    filter: false,
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
            ["KO001", "Chef Juna", "Sung Ha Jung", "08123425365", "Training", `false`, 1],
            ["KO002", "Marinka", "David Coppervile", "08123425366", "Mengulang", `true`, 2],
            ["KS002", "Aiko", "Situmorang", "08123425367", "Tidak Lulus", `false`, 3],
            ["KS003", "Master Limbad", "Dolanan", "0812342536", "Lulus", `true`, 4],
        ];

        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Tambah Koki"} style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={this.modalFormOpen}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                );
            }
        };

        return (
            <SnackbarProvider maxSnack={3}>
            <div>
                <div className={classes.headerComponentWrapper}>
                    <Paper className={classes.headerComponentInner}r>
                        <Typography variant="h6" gutterBottom>
                            Informasi Data Training
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable
                            title={"List Data Training"} 
                            data={data} 
                            columns={columns} 
                            options={options} 
                        />
                        <Dialog
                            open={this.state.open}
                            disableBackdropClick='true'
                            onClose={this.modalFormClose}
                            aria-labelledby="form-dialog-title"
                            fullWidth='true'
                            maxWidth = 'lg'
                            scroll = 'body'
                        >
                        <DialogTitle id="form-dialog-title">Form Data Training</DialogTitle>
                            <DialogContent className={classes.noPaddingDialogContent}>
                                <div component="div" style={{ padding: 8 * 3 }}>
                                    <FormTraining />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.modalFormClose} color="primary">
                                    Batal
                                </Button>
                                <Button onClick={this.modalFormClose} color="primary">
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
                        <DialogTitle id="alert-dialog-title">Konfirmasi Hapus Data Training</DialogTitle>
                        <DialogContent bacgroundColor="primary">
                            <DialogContentText id="alert-dialog-description">
                                Data Training Akan Dihapus Dari List.Dan Tidak Akan tampil Diwaktu Berikutnya.
                                Apakah Anda Yakin Ingin Menghapus Data Training ?
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
                < /div>
            </div>
            </SnackbarProvider>
        );
  }
}

DataTraining.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(DataTraining);