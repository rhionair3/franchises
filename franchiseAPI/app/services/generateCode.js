const brambangDB = require('../configs/db');

const Franchise = brambangDB.franchise;
const Koki = brambangDB.koki;
const Gerobak = brambangDB.gerobakFranchise;
const brambangDateFormat = require('dateformat');

const lengthDefine = 2;

var self = module.exports = {
    formatNumLength : function(num, length) {
      var r = "" + num;
      while (r.length < length) {
          r = "0" + r;
      }
      return r;
    }
    countFranchise : function() {
      Franchise.findAndCountAll({
        where : {
          createdAt : brambangDateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss')
        }
      }).then(result => {
          return result.count;
      })
    }

    countFranchiseKoki : function(franchise_id) {
      Koki.findAndCountAll({
        where : {
          franchise_id : franchise_id
        }
      }).then(result => {
          return result.count;
      })
    }

    countFranchiseGerobak : function(franchise_id) {
      Gerobak.findAndCountAll({
        where : {
          franchise_id : franchise_id
        }
      }).then(result => {
          return result.count;
      })
    }

    generateFranchiseCode : function() {
      if(self.countFranchise > 0) {
          var getDateCode = brambangDateFormat(new Date(), 'yymmdd');
          var getCountNum = self.formatNumLength(self.countFranchise, lengthDefine);

          var getCode = getDateCode + getCountNum;

          return getCode;

      } else {
          var getDateCode = brambangDateFormat(new Date(), 'yymmdd');
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = getDateCode + getCountNum;

          return getCode;
      }
    }

    generateKokiCode : function(franchiseId) {
      let FranchiseCode = "";
      Franchise.findOne({
        where : {
          id : franchiseId
        }
      }).then(response => {
          return response.json;
      }).then(result => {
          FranchiseCode = result.franchise.code;
          return "Get Franchise Code";
      })

      if(self.countFranchiseKoki > 0) {
          var getCountNum = self.formatNumLength(self.countFranchise, lengthDefine);

          var getCode = "K" + getCountNum;

          return getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "K" + getCountNum;

          return getCode;
      }

    }

    generateGerobakCode : function(franchiseId) {
      let FranchiseCode = "";
      Franchise.findOne({
        where : {
          id : franchiseId
        }
      }).then(response => {
          return response.json;
      }).then(result => {
          FranchiseCode = result.franchise.code;
          return "Get Franchise Code";
      })

      if(self.countFranchiseGerobak > 0) {
          var getCountNum = self.formatNumLength(self.countFranchise, lengthDefine);

          var getCode = "G" + getCountNum;

          return getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "G" + getCountNum;

          return getCode;
      }

    }
}
