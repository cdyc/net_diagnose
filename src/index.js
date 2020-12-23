let { ip } = require("./ip");
let { telnet } = require("./telnet");
const lib = require("./lib");

const errLog = (...args) => console.log(`\u001b[31m${args.join("")}\u001b[0m`);

// if (["-i", "--install"].includes(arg)) {
//   windowService.init();
// }

const init = async () => {
  let { ping, tel } = await lib.getConfig().catch((e) => {
    errLog("当前目录下未找到config.ini配置文件，程序即将退出");
    return { ping: [], tel: [] };
  });
  if (ping.length + tel.length == 0) {
    errLog("请联系管理员添加配置文件");
    return;
  }
  let errIp = await ip(ping);
  let errTelnet = await telnet(tel);
  let err = [...errIp, ...errTelnet];

  if (err.length == 0) {
    console.log("诊断程序运行完毕，系统正常，无错误！");
    return true;
  }
  errLog(
    `\n${lib.now()} 本机(ip:${lib.getIPAdress()})诊断结果如下：\n`,
    err.join("\n")
  );
  errLog("\n\n网络诊断出现异常，请联系管理员。电话：6000");
  console.log("\n按回车键退出...");
  return false;
};

init().then((success) => {
  if (success) {
    return;
  }

  process.stdin.on("data", (input) => {
    // input = input.toString().trim();
    // console.log(input);
    process.exit(0);
  });
});
