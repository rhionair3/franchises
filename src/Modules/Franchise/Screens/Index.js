import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import AppBar from '@material-ui/core/AppBar';
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Edit, DeleteForever } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../Assets/themes/stylesBrambang';
import ProfilFranchise from '../Components/ProfilFranchise';
import DataGerobak from '../Components/DataGerobak';
import DataKoki from '../Components/DataKoki';
import { getFranchiseList, getFranchiseDetail, getFranchiseDetailDetail, getFranchiseKokiDetail } from "../Services/Franchise";

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

const dataFranchise = [];
class Franchise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            openDel : false,
            notify : false,
            value : 0,
            getReady : false,
            formData: ""
        };
    };

    componentDidMount() {
        this.setState({
            getReady : false
        });
        let datafranchise = getFranchiseList();
        datafranchise.then(response => {
            return response.json();
        }).then(result => {
            console.log(result);
            let rows = [];
            result.franchises.map(item => {
                rows = [
                        item.username,
                        item.fullname,
                        item.mobile,
                        item.city,
                        item.status,
                        item.id
                ];

                dataFranchise.push(rows);
                this.setState({
                    getReady : true
                });
                return "Success";
            });
        });
    }

    modalFormOpen = (value) => {
        if(value !== 0) {
            let detailFranchise = getFranchiseDetail(value);
            detailFranchise.then(response => {
                console.log(response);
                return response.json();
            }).then(result => {
                console.log(result);
                let formFranchiseData = result.franchise;
                formFranchiseData.dataDetails = [];
                formFranchiseData.dataKoki = [];
                let listFranchiseDetail = getFranchiseDetailDetail(formFranchiseData.id);
                let listFranchiseKoki = getFranchiseKokiDetail(formFranchiseData.id);
                listFranchiseDetail.then(resDetail => {
                    return resDetail.json();
                }).then(resultDetail => {
                    let formListDetails = resultDetail.franchiseDetails;
                    formFranchiseData.dataDetails.push(formListDetails);
                });
                listFranchiseKoki.then(resKoki => {
                    return resKoki.json();
                }).then(resultKoki => {
                    let formListKoki = resultKoki.kokis;
                    formFranchiseData.dataKoki.push(formListKoki);
                })
                console.log(formFranchiseData);
                this.setState({
                    open: true,
                    formData : formFranchiseData,
                    value : "profilContainer"
                });
            });
        } else {
            this.setState({
                open: true,
                formData : null,
                value : "profilContainer"
            });
        }

    };

    modalFormClose = () => {
        this.setState({
            open: false
        });
    };

    handleChange = (event, value) => {
        this.setState({ value });
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
    };

    onChildChange = (value) => {
      console.log(value);
      this.setState(value);
    };

    render() {
        const { classes } = this.props;
        const { value, regency_id, district_id, province_id } = this.state;
        const columns = [
            {
                name: "Email",
                options: {
                    filter: true
                }
            },
            {
                name: "Nama Franchise",
                options: {
                    filter: true
                }
            },
            {
                name: "No. Telp",
                options: {
                    filter: false
                }
            },
            {
                name: "Kota",
                options: {
                    filter: false
                }
            },
            {
                name: "Status",
                options: {
                    filter: true,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        let dataStatus = (value === 1 ? "AKTIF" : "TIDAK AKTIF");
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

        const data = dataFranchise;

        const options = {
            filterType: 'dropdown',
            customToolbar: () => {
                return (
                    <Tooltip title={"Registrasi Franchise Baru"}  style={{marginLeft:20}}>
                        <Fab size="small" color="secondary" aria-label="Add" className={classes.btnInfo} onClick={() => this.modalFormOpen(0)}>
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
                            Informasi Pengiriman Gerobak
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable
                            title={"List Data Franchise"}
                            data={this.state.getReady ? data : ""}
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
                        <DialogTitle id="form-dialog-title">Rincian Data Franchise</DialogTitle>
                            <DialogContent className={classes.noPaddingDialogContent}>
                                <AppBar position="static" color="default">
                                    <Tabs
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                    >
                                        <Tab value="profilContainer" label="Profil Franchise" selected/>
                                        <Tab value="dataGrobak" label="Data Gerobak" />
                                        <Tab value="dataKoki" label="Data Koki" />
                                    </Tabs>
                                </AppBar>
                                {value === "profilContainer" &&
                                    <TabContainer className={classes.tabContainer}>
                                        <ProfilFranchise fData = {this.state.formData} onChildChange = {(value) => this.onChildChange(value)} />
                                    </TabContainer> }
                                {value === "dataGrobak" &&
                                    <TabContainer className={classes.tabContainer}>
                                        <DataGerobak fData = {this.state.formData} onChildChange = {(value) => this.onChildChange(value)} />
                                    </TabContainer> }
                                {value === "dataKoki" &&
                                    <TabContainer className={classes.tabContainer}>
                                    <DataKoki fData = {this.state.formData} onChildChange = {(value) => this.onChildChange(value)} />
                                </TabContainer> }
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
                        <DialogTitle id="alert-dialog-title">Konfirmasi Hapus Data Franchise</DialogTitle>
                        <DialogContent bacgroundColor="primary">
                            <DialogContentText id="alert-dialog-description">
                                Data Franchise Akan Dihapus Dari List. Dan Tidak Akan tampil Diwaktu Berikutnya.
                                Apakah Anda Yakin Ingin Menghapus Data Franchise ?
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

Franchise.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(Franchise);
