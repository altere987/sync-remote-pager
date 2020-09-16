# sync-remote-pager

Synchronet Remote Pager

A simple pager to run mpg123 remotely via ssh.

***note*** 
This was quick and dirty, you should only use at your own discretion.
There are NO checks of any kind.
Inserting the wrong user, host, or mp3 path will likely hang on paging.

## Install

This assumes you already have sshd and mpg123 installed on the remote system.
This also assumes you have setup any necessary port-forwards or firewall rules on the remote side.

### Install your SSH key on remote server

If you don't have a ssh key generated already:

user@sbbshost$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):[Enter key]
Enter passphrase (empty for no passphrase): [Press enter key]
Enter same passphrase again: [Pess enter key]
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
33:b3:fe:af:95:95:18:11:31:d5:de:96:2f:f2:35:f9 user@sbbshost

user@sbbshost$ ssh-copy-id -i ~/.ssh/id_rsa.pub remote-host
user@remotehosts's password:

You should now be able to 'ssh remotehost' without using a password.

** If the username is different on the remote host you will need to use remote-user@remote-host on the ssh-copy-id line.

### Edit your modopts.ini

nano /sbbs/ctrl/modopts.ini
Add the following to the bottom

[remotepager]
    rpuser=remote-user
    rphost=remote-host
    rpmp3=full-path-to-mp3file

ie:
[remotepager]
    rpuser=altere
    rphost=192.168.1.100
    rpmp3=/home/user/Music/pager.mp3

## Copy the pager

cp remote.pager.js /sbbs/mods/playtone.js
