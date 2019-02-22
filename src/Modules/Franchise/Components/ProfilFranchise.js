import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { getProvince, getRegency, getDistrict, getPostal } from "../Services/Civilization";

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

let provList = new Array();
let regList = new Array();
let distList = new Array();
let postList = new Array();
class ProfilFranchise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            role_id: "",
            fname : "",
            regList : {},
            getReady : false,
            province_id : "",
            regency_id : "",
            district_id : "",
            postal_id : ""
        };
        this.updateParentData = this.updateParentData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
      if(this.props.fData > 0 ) {
        console.log('ada data')
      }else {
        console.log('ga nemu data')
      }
      let getProvinceList = getProvince();
      getProvinceList.then(resProv => {
          return resProv.json();
      }).then(resultProv => {
        console.log(resultProv);
          let rows = {};
          resultProv.provincy.map(item => {
            rows = {
                    id : item.id,
                    name : item.name
                  }
            provList.push(rows);
            this.setState({
                getReady : true
            });
            return "Success";
          })
          console.log(provList);
      })
    }

    updateParentData() {
      this.props.onChildChange(this.state);
    }

    handleChange = () => event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state, this.updateParentData);
    // console.log(event.target.name);
    }

    onChangeProvince = () => event => {
      this.setState({
          postal_id : "12"
      })
        let getReg = getRegency(event.target.value);
        getReg.then(resReg => {
            return resReg.json();
        }).then(resultReg => {
          let rows = {};
          regList = [];
          resultReg.regency.map(item => {
            rows = {
                    id : item.id,
                    name : item.name
                  }
            regList.push(rows);
            const state = this.state;
            state[event.target.name] = event.target.value;
            this.setState(state, this.updateParentData);
            this.setState({
                getReady : true
            });
            return "regList";
          })
        })
    }

    onChangeRegency = () => event => {
        let getDist = getDistrict(event.target.value);
        getDist.then(resDist => {
            return resDist.json();
        }).then(resultDist => {
            let rows = {};
            distList =[];
            resultDist.district.map(item => {
                rows = {
                        id : item.id,
                        name : item.name
                      }
                distList.push(rows);
                const state = this.state;
                state[event.target.name] = event.target.value;
                this.setState(state, this.updateParentData);
                this.setState({
                    getReady : true
                });
                return "distList";
            })
        })
    }

    onChangeDistrict = () => event => {
        let getPost = getPostal(event.target.value);
        getPost.then(resPost => {
            return resPost.json();
        }).then(resultPost => {
            let rows = {};
            postList = [];
            resultPost.postal.map(item => {
                rows = {
                        id : item.id,
                        postal_code : item.postal_code
                      }
                postList.push(rows);
                const state = this.state;
                state[event.target.name] = event.target.value;
                this.setState(state, this.updateParentData);
                this.setState({
                    getReady : true
                });
                return "postList";
            })
        })
    }

    render() {
      console.log(this.props.fData);
        const { classes } = this.props;
          return (
            <React.Fragment>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <TextField
                        id="role_id"
                        name="role_id"
                        select
                        label="Pilih Tipe Franchise"
                        value={this.state.role_id}
                        onChange={this.handleChange('role_id')}
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
                        <MenuItem value={1}>Pribadi</MenuItem>
                        <MenuItem value={2}>Perusahaan</MenuItem>
                        <MenuItem value={3}>Internal</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="fname"
                    label="Nama Depan"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.handleChange('fname')}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lname"
                    name="lname"
                    label="Nama Belakang"
                    value={this.state.lname}
                    onChange={this.handleChange('lname')}
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id = "fullname"
                    name = "fullname"
                    label="Nama Perusahaan"
                    fullWidth
                    value={this.state.fullname}
                    onChange={this.handleChange('fullname')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="identity_no"
                    name="identity_no"
                    label="No. KTP / Identitas Diri"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="npwp_no"
                    name="npwp_no"
                    label="No. NPWP ( Wajib Diisi Bila Perusahaan )"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name="address"
                        label="Alamat Perusahaan"
                        value={this.state.address}
                        onChange={this.handleChange('address')}
                        multiline
                        rows = "4"
                        fullWidth
                        margin = "dense"
                        variant = "outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="province_id"
                        name="province_id"
                        select
                        label="Pilih Propinsi"
                        value={this.state.province_id}
                        onChange={this.onChangeProvince('province_id')}
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
                        {this.state.getReady && provList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="regency_id"
                        name="regency_id"
                        select
                        label="Pilih Kota / kabupaten"
                        value={this.state.regency_id}
                        onChange={this.onChangeRegency('regency_id')}
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
                        {this.state.getReady && regList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="district_id"
                        name="district_id"
                        select
                        label="Pilih Kecamatan"
                        value={this.state.district_id}
                        onChange={this.onChangeDistrict('district_id')}
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

                        {this.state.getReady && distList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="postal_id"
                        name="postal_id"
                        select
                        label="Pilih Kode Pos"
                        value={this.state.postal_id}
                        onChange={this.handleChange('postal_id')}
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
                        {this.state.getReady && postList.map((item, i) =>{
                          console.log(item);
                          return [
                            <MenuItem value={item.id}>{item.postal_code}</MenuItem>
                          ]
                        })}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="contact_no"
                    name="contact_no"
                    label="No. Telepon"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="No. Telepon Seluler"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Alamat Email ( Untuk Verifikasi Pembuatan Akun )"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
            </Grid><br/><br/>
            <div>
                <Paper className={classes.paddingPaper}>
                    <Typography variant="h6" component="h6"> Lampiran </Typography>
                    <Typography component="p"> Pribadi : Lampirkan Fotocopy KTP dan NPWP ( Jika Memiliki NPWP ) </Typography>
                    <Typography component="p"> Perusahaan : Lampirkan Fotocopy TDP, SIUP dan NPWP Perusahaan Dan KTP Penangung Jawab </Typography>
                </Paper>
            </div>
            </React.Fragment>
        );
    }

}
ProfilFranchise.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilFranchise);
