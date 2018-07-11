# tsunamiwall
Tsunami labs on wall display

To set up project:

1.-Install SAGE2. Follow instructions in https://bitbucket.org/sage2/sage2/wiki/Home

2.-git clone this repository in directory for SAGE2 projects (not under the sage2 directory, but under the folder in which the new custom apps would be created. In ubuntu this would be under /Documents/SAGE2_Media/apps)
[I placed this under sage2/public/uploads/apps/]

3.-npm install cesium

4.-place andes.json under sage2/config directory

To run project:

1.-cd to sage2 folder

2.-run: node server.js -f config/andes.json

3.-On chrome open localhost:9292 to see control pannel

4.-On chrome open http://localhost:9090/display.html?clientID=0 to see Display 0
