A few hints:

- Have a look at http://sietse.net/iwdl-info
  It contains lots of information about this software.

- Unpack this software somewhere on your webserver; it must be on the same webserver as your clientraw files
- Keep this software together (when unpacking, it is in directory iwdl)
- rename iwdl_settings.js.sample to iwdl_settings.js
- edit iwdl_settings.js
- make sure the clientraw file(s) are on the same domainname as iWDL;  cross-domain loading is not allowed
- make sure the clientraw_dir really is correct on your server; it is the directory you would use in your
  browser, e.g. if your url would be: http://sietse.net/wdl2/clientraw.txt then the directory is /wdl2

- For the best iPhone experience, create a link on your springboard:
  * surf with safari to your iwdl
  * press the + in the bottom toolbar
  * Select 2nd option (put on home screen)
  * Close safari, and tap on the newly created icon
  * Now you will see iwdl full screen, no safari toolbars.

Plans:
- Weather icons for current weather state
- Startup screen when run from safari
- ... let me know!


Sietse Visser (sietse@sietse.nl)
