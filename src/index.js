let { ip } = require("./ip");
let { telnet } = require("./telnet");
// const clc = require("cli-color");
const lib = require("./lib");
const cw = require("child_process");
let error = false;
const init = async () => {
  let errIp = await ip(["127.0.0.1", "google.com", "yahoo.com"]);
  let errTelnet = await telnet([{ host: "127.0.0.1", port: 23 }]);
  let err = [...errIp, ...errTelnet];

  if (err.length == 0) {
    console.log("诊断程序运行完毕，系统正常，无错误！");
  }
  console.log(
    `\n${lib.now()} 本机(ip:${lib.getIPAdress()})诊断结果如下：\n`,
    err.join("\n")
  );
  error = true;
};

init();

if (error) {
  cw.exec("pause");
}
