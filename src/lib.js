function now() {
  const dt = new Date();
  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = dt.getDate();
  const hh = dt.getHours().toString().padStart(2, 0);
  const mm = dt.getMinutes().toString().padStart(2, 0);
  const ss = dt.getSeconds().toString().padStart(2, 0);
  const time = y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
  return time;
}

function getIPAdress() {
  var interfaces = require("os").networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}

module.exports = { now, getIPAdress };
