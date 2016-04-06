# GDEM Error Realization Data Portal 
*A portal for downloading SRTM and ASTER GDEM data and error realizations.  Project funded by the National Geospatial-Intelligence Agency (NGA) and conducted in partnership with Dr. Ashton Shortridge and Dr. Joe Messina of Michigan State University. All web-related code is written by Nicholas Ronnei.*

## Background
  
The project centers on the use of open GDEM datasets such as those from SRTM and ASTER for important geospatial modeling such as watershed deliniation, floodplain modeling, and erosion control planning to name a few.  The error inherent in these datasets is not random - it is spatially structured ([Shortridge, A. & Messina, J., 2011][1]).  Statistical modeling of the relationships between various landscape and data charateristics reveals that error in these datasets can be predicted.  The goal of this project is to make these predictions available to the public so that they may be used in research.

## Current Progress

At the time of writing (4/6/2016), the project has advanced a great deal from last fall.  The GitHub repository now contains the code for the server and the project's official website.  The server is built using well-documented, actively developed open source libraries so that it is transparent, simple, and easy to copy and modify for anyone who wishes to do so.  Much of our work since the previous update (9/3/2015) has focused on back-end development, specifically on the development of database functions for selecting, manipulating, and distributing data.  These features are still under heavy development and not yet ready for production. When they become ready, they will also appear on GitHub.

We are also working on developing an intuitive and responsive user interface that will enable researchers visiting the site to have more meaningful interactions with the data.  This UI design will work on any size screen, from gigantic TV to mobile phone, to accommodate the diverse conditions under which international researchers operate.  It will also be intuitive and use widely recognized symbols for each tool to limit the language barrier and improve usability for international researchers.  This will be the final stage of development, as it is most likely to change in the future and because the back end and middleware of the system can be plugged into other front ends as desired. Be sure to check back for progress, or visit the [project website](http://ashtonjpm.geo.msu.edu) for updates.

## Plans
Ultimately, this project will be realized as a server side application running on the Express framework that uses Mapbox JS/Turf for the front-end interface, Express as the middleware, and tilestrata, Mapnik, and Postgres/PostGIS as the back-end.  Users will be able to draw a bounding box around or enter the bounding coordinates of their area of study, then recieve options to download standard GDEM data, error realizations, and maybe even more?  The timeline for this is on the order of one year, but in reality unknown.

## Dependencies
Our systems are running:
- NodeJS v4.4.1
- GDAL v1.11 or v2.X
- PostgreSQL v9.3 or higher
- PostGIS v2.1 or higher
- Mapnik v2.2 ([See installation tips here](https://github.com/mapnik/mapnik/wiki/UbuntuInstallation))

To run the node server, we use these `node_modules`:
- Tilestrata
- Tilestrata Disk
- Tilestrata Dependency
- Tilestrata Mapnik
- Express JS
- Path (if you don't have NodeJS core modules installed)

In the root directory of the repo, use this one liner to install NodeJS dependencies:
`npm install tilestrata tilestrata-disk tilestrata-dependency tilestrata-mapnik express path`

### References
[1]: http://www.scopus.com/record/display.url?eid=2-s2.0-79953172857&origin=inward&txGid=5A18DE0C5E43C7B2354634EB15DCB820.aqHV0EoE4xlIF3hgVWgA%3a9
