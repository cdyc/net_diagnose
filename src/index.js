let { ip } = require("./ip");
let { telnet } = require("./telnet");
const lib = require("./lib");

const errLog = (...args) => console.log(`\u001b[31m${args.join("")}\u001b[0m`);

const init = async () => {
  let errIp = await ip(["127.0.0.1", "google.com", "yahoo.com"]);
  let errTelnet = await telnet([{ host: "127.0.0.1", port: 23 }]);
  let err = [...errIp, ...errTelnet];

  if (err.length == 0) {
    console.log("诊断程序运行完毕，系统正常，无错误！");
    return true;
  }
  errLog(
    `\n${lib.now()} 本机(ip:${lib.getIPAdress()})诊断结果如下：\n`,
    err.join("\n")
  );
  errLog("\n\n网络诊断出现异常，请联系管理员 6129");
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
