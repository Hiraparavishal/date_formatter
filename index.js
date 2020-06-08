module.exports = {
  //2020-06-07T07:51:27.670Z
  DateFormate: function (formate) {
    let dd = new Date().toISOString().substring(8, 10);
    let mm = new Date().toISOString().substring(5, 7);
    let yy = new Date().toISOString().substring(0, 4);
    if (formate == "DD-MM-YYYY") {
      return dd + "-" + mm + "-" + yy;
    }
    if (formate == "DD-YYYY-MM") {
      return dd + "-" + yy + "-" + mm;
    }
    if (formate == "MM-DD-YYYY") {
      return mm + "-" + dd + "-" + yy;
    }
    if (formate == "MM-YYYY-DD") {
      return mm + "-" + yy + "-" + dd;
    }
    if (formate == "YYYY-DD-MM") {
      return yy + "-" + dd + "-" + mm;
    }
    if (formate == "YYYY-MM-DD") {
      return yy + "-" + mm + "-" + dd;md
      
    }
  },
  PreDateFormate: function (strdate, formate) {
    try {
      let date = new Date(strdate);
      let dd = date.toISOString().substring(8, 10);
      let mm = date.toISOString().substring(5, 7);
      let yy = date.toISOString().substring(0, 4);
      if (formate == "DD-MM-YYYY") {
        return dd + "-" + mm + "-" + yy;
      }
      if (formate == "DD-YYYY-MM") {
        return dd + "-" + yy + "-" + mm;
      }
      if (formate == "MM-DD-YYYY") {
        return mm + "-" + dd + "-" + yy;
      }
      if (formate == "MM-YYYY-DD") {
        return mm + "-" + yy + "-" + dd;
      }
      if (formate == "YYYY-DD-MM") {
        return yy + "-" + dd + "-" + mm;
      }
      if (formate == "YYYY-MM-DD") {
        return yy + "-" + mm + "-" + dd;
      }
    } catch (error) {
      return error;
    }
  },
};
