#!/bin/sh
# Forwarding 80 to 80 

# $1 - comand (A or D)
# $2 - frontend DOCKER interface
# $3 - backend DOCKER interface
# $4 - frontend DOCKER ip-address
# $5 - backend DOCKER ip-address

sudo iptables -$1 FORWARD -i ens18 -o $2 -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT
sudo iptables -$1 FORWARD -i ens18 -o $2 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
sudo iptables -$1 FORWARD -i ens18 -o $3 -p tcp --syn --dport 8888 -m conntrack --ctstate NEW -j ACCEPT
sudo iptables -$1 FORWARD -i ens18 -o $3 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
sudo iptables -t nat -$1 PREROUTING -p tcp --dport 80 -j DNAT --to-destination $4
sudo iptables -t nat -$1 POSTROUTING -p tcp --dport 4200 -d $4 -j SNAT --to-source 185.161.208.235
sudo iptables -t nat -$1 POSTROUTING -p tcp --dport 8888 -d $5 -j SNAT --to-source 185.161.208.235
