# -*- coding: utf-8 -*-

#引入sys模块

import sys, os

#使用sys模块用来输入数据

# if len(sys.argv) !=2:

    # print("Usage:arpPing <IP>\n eg:arpPing 192.168.56.1")

    # sys.exit(1)

#使用srp()函数扫描输入ip，如果扫描到返回的包，则会被遍历，打印出目标MAC地址和IP地址。

# from scapy.all import srp,Ether,ARP

# ans,unans=srp(Ether(dst="ff:ff:ff:ff:ff:ff")/ARP(pdst=sys.argv[1]),timeout=2)

# or snd,rcv in ans:

    # print("Target is alive")

    #      print(rcv.sprintf("%Ether.src% - %ARP.psrc%"))
    
    # a.add(rcv.sprintf("%Ether.src% - %ARP.psrc%"))
    
    
# for active hosts, they are scanned using Nmap:
# for snd, rcv in ans:
    # a = rcv.sprintf("%Ether.src% - %ARP.psrc%")
    # a = a[-14:]
a = sys.argv[1]
r = os.popen('nmap -O ' + a)
text = r.read()
r.close()
with open("test.txt","w") as p:
    p.write(text)


# print("主机192.168.56.104\n开放端口：21，22，\n服务与版本：\nFTP Banner： ‘220 (vsFTPd 3.0.3)\\0d\\0a'\n操作系统：Linux 4.15-5.6\n可能漏洞：\nCVE-2022-27223\nCVE-2022-0847\nCVE-2022-27211\nCVE-2021-3130")
