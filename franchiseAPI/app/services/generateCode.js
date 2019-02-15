const brambangDB = require('../configs/db');

const Franchise = brambangDB.franchise;
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
}
