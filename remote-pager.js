/* 
			Synchronet Remote Pager

Requirements:
mpg123 installed on remote system
install ssh key on remote system

Uses modopts.ini
[remotepager]
    rpuser=yourusername
    rphost=remotehost
    rpmp3=/full/path/to/sound.mp3
*/

load('sbbsdefs.js');
var cfg = load({}, 'modopts.js', "remotepager") || {};

printf("\r\n\r\nRemote Paging in progress...");
printf("\r\nThis may take several minutes to get a response.\r\n\r\n");

system.exec("ssh " + (cfg.rpuser) + '@' + (cfg.rphost) + ' mpg123 ' + (cfg.rpmp3)
);
