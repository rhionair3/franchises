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
import stylesBrambang from '../../../Assets/themes/stylesBrambang';
import MenuOrderList from '../Components/MenuOrderList';
import MenuOrderListItem from '../Components/MenuOrderListItem';

class MenuMaster extends Component {
    state = {
        open: false,
        openDel: false,
        value: 0,
        items : [{
          id : "1",
          text : "Menu 01"
        },{
          id : "2",
          text : "Menu 02"
        },{
          id : "3",
          text : "Menu 03"
        }],
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
        console.log(this.state.items);
        return (
            <div>
                <div className={classes.headerComponentWrapper}>
                    <Paper className={classes.headerComponentInner}>
                        <Typography variant="h6" gutterBottom>
                            Manajemen Master Menu
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper className={classes.headerComponentInner}>
                        <Typography variant="h5" component="h3">
                            List Menu Utama
                        </Typography>
                        <MenuOrderList items = {this.state.items} />
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
                </div>
            </div>

        );
  }
}

MenuMaster.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(MenuMaster);
