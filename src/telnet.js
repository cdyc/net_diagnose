const Telnet = require("telnet-client");

async function telOne(param) {
  let connection = new Telnet();
  let err = null;
  // these parameters are just examples and most probably won't work for your use-case.
  let params = {
    ...param,
    timeout: 3000,
  };
  await connection.connect(params).catch((error) => {
    // console.log(error.code == "ECONNREFUSED", error);
    const refused = error.code == "ECONNREFUSED";
    if (refused) {
      err = `\t服务器${param.host},端口${param.port},连接失败，错误原因：${
        error.code || "未知错误"
      }`;
    }
  });
  connection.destroy();
  return err;
}

const tel = async (hosts) => {
  let arr = [];
  for (let i = 0; i < hosts.length; i++) {
    let host = hosts[i];
    console.log(
      `telnet诊断中(${i + 1}/${hosts.length})\t IP:${host.host},端口:${
        host.port
      }`
    );
    let res = await telOne(host);
    if (res) {
      arr.push(res);
    }
  }
  return arr;
};

module.exports.telnet = tel;
