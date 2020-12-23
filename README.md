# net_diagnose

运维组-网络诊断

# 查看结果

http://10.8.2.133:8000/table#id=1193/a814c0402a&datetype=none&hidemenu=1

# 部署

将 nd.exe 添加快捷方式到启动项中，(运行中输入： AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup )

# 配置

默认配置如下：

```ini
[config]

; 将日志自动上传到内网服务器
uploadLog=1


;需要判断的多个主机网络连接状态，可不填写
[ping]
ip[] = 127.0.0.1
ip[] = www.baidu.com

;需要判断的多个主机网络对应的端口连接状态，可不填写
[telnet]
ip[] = 127.0.0.1:80
ip[] = www.baidu.com:80

```
