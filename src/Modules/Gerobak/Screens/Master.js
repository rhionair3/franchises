import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import Paper from '@material-ui/core/Paper';
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
import { getMasterGerobak, getMasterGerobakDetail, simpanDataGerobak } from "../Services/Gerobak";

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

const getData = []
class MasterGerobak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openDel: false,
            notify: false,
            value: null,
            getReady : false,
            formData : {},
            message : "",
            message_header : "",
            message_status : "",
            id: "",
            code: "",
            name: "",
            status: "",
            createdAt: 0,
            createdBy: "",
            updatedAt: 0,
            updatedBy: "",
            notify_stat: false
        };
    };

    componentDidMount() {
        let getdata = getMasterGerobak();
        getdata.then(response => {
            return response.json();
        }).then(result => {
            let rows =[];
            result.gerobak.map(item => {
                rows = [
                    item.code,
                    item.name,
                    item.status,
                    item.id
                ];
                
                getData.push(rows);
                this.setState({
                    getReady : true
                });
                return "Success";
            });
        });
        
    }

    modalFormOpen = (value) => {
        let datadetail = getMasterGerobakDetail(value);
        datadetail.then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            let vdata = {};
            if(result.gerobak != null) {
                vdata = {
                    id : result.gerobak.id,
                    code : result.gerobak.code,
                    name : result.gerobak.name,
                    status : result.gerobak.status,
                    createdAt : result.gerobak.createdAt,
                    createdBy : result.gerobak.createdBy,
                    updatedAt : result.gerobak.updatedAt,
                    updatedBy : result.gerobak.updatedBy
                };
            } else {
                vdata = {
                    id : "",
                    code : "",
                    name : "",
                    status : "",
                    createdAt : "",
                    createdBy : "",
                    updatedAt : "",
                    updatedBy : ""
                };
            }
            this.setState({
                open: true,
                formData : vdata
            });
            });
        };

    modalFormClose = () => {
        console.log('Harusnya Notif Tereksekusi');
        this.setState({
            open: false,
        });
    };

    submitForm = () => {
        console.log("load submit" + this.state.id);
        let dataSimpan =  {
            id : this.state.id,
            code : this.state.code,
            name : this.state.name,
            status: this.state.status,
        }
        let simpanData = simpanDataGerobak(dataSimpan);
        simpanData.then(response => {
            return response.json();
        }).then(result => {
            let header_m = "";
            let m = "";
            let status_m = "";
            if(result.gerobak) {
                status_m = "success";
                if(this.state.id && (this.state.id !== null || this.state.id !== "")) {
                    header_m = "Pembaharuan Data Gerobak";
                    m = "Sukses memperbaharui gerobak ... "
                } else {
                    header_m = "Menambah Data Gerobak";
                    m = "Sukses menambahkan gerobak ..."
                }
            } else {
                status_m = "failed";
                header_m = "Error Dalam Menyimpan";
                m = "Gagal menyimpan data ..."
            }
            this.setState({
                open: false,
                message_status: status_m,
                message_header: header_m,
                message : m,
                notify_stat : true
            });
        });
    };

    showNotif = state => () => {
        console.log('Harusnya Notif Tereksekusi');
        if(this.state.notify_stat) {
            this.setState({
                notify: true,
                ...state
            })
        } else {
            this.setState({
                notify:false
            })
        }
    };

    hideNotif = () => {
        this.setState({
            notify:false
        })
        window.location.reload();
    };

    handleChange = (value) => {
        console.log(value)
        this.setState(value);
    }

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
                name: "Kode Gerobak",
                options: {
                    filter: true
                }
            },
            {
                name: "Tipe Gerobak",
                options: {
                    filter: true
                }
            },
            {
                name: "Status",
                options: {
                    filter: false,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        let dataStatus = (value === 1 ? "Tersedia" : (value === 2 ? "Dalam Pesanan" : (value === 3 ? "Rusak" : "Dibatalkan")));
                        return (
                            <div>
                                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                                    {dataStatus}
                                </Button>
                            </div>
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
                                <ToggleButton className={classes.btnSuccess} onClick={() => this.modalFormOpen(value)}>
                                <Edit />
                                </ToggleButton>
                                <ToggleButton className={classes.btnPrimary} onClick={() => this.confirmDeleteOpen(value)}>
                                <DeleteForever />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        );
                    }

                }
            }
        ];

        const data = getData;

        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Tambah Gerobak"} style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={() => this.modalFormOpen()}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                );
            }
        };
        
        console.log(this.state.id);
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
                            data={this.state.getReady ? data : ""}
                            columns={columns}
                            options={options}
                        />
                        <Dialog
                            open={this.state.open}
                            disableBackdropClick={true}
                            onClose={this.modalFormClose}
                            onExited={this.showNotif()}
                            aria-labelledby="form-dialog-title"
                            fullWidth={true}
                            maxWidth = 'lg'
                            scroll = 'body'
                        >
                            <form className={classes.form} action="/" method="POST" onSubmit={(e) => { e.preventDefault(); this.submitForm();}}>
                                <DialogTitle id="form-dialog-title">Form Data Gerobak Franchise</DialogTitle>
                                <DialogContent className={classes.noPaddingDialogContent}>
                                    <div component="div" style={{ padding: 8 * 3 }}>
                                        <FormMasterGerobak vd = {this.state.formData} onChangeChild = {(value) => this.handleChange(value)} />
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.modalFormClose} color="Secondary">
                                        Batal
                                    </Button>
                                    <Button type="submit" color="primary" className={classes.btnInfo}>
                                        Simpan
                                    </Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                        <Dialog
                            open={this.state.openDel}
                            disableBackdropClick={true}
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
                    autoHideDuration={1500}
                    onClose={this.hideNotif}
                >
                    <SnackbarContent
                        className={ this.state.message_status && this.state.message_status === "success" ? classes.btnSuccess : classes.btnDanger }
                        aria-describedby="client-snackbar"
                        message={
                                    <div>
                                        <h6>{ this.state.message_header }</h6>
                                        <span id="message-id">{this.state.message}</span>
                                    </div>
                                }
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
