# Mapping Panaji Floods
The GIS Crowdsourcing Tool is a web based mapping tool which can be used to collect and disseminate information on flooded streets in Panaji. Users of the tool can enter the website mentioned below and mark stretches of roads which they see currently flooded. Pins can be dropped in areas outside streets to mark flooding. All inputs are accompanied by descriptions of the flooding situation. The user can enter details like name and current location before contributing to the map. 
The tool can be accessed at the URL karthikeyankuppu.github.io/mapping-panaji-floods on a desktop or a mobile web browser. The tool is suited for viewing in the Chrome browser. A mobile user has a facility to view his or her current location for reference. 
The tool’s repository can be found at github.com/karthikeyankuppu/mapping-panaji-floods

# Architecture
Front end

   •	Leaflet maps – for visualizing spatial data
   
   •	Open Street Maps
   
   •	JavaScript – functions and web interface

Back end

   •	CartoDB – for spatial database
   
   •	GitHub – static hosting service and repository
   


# Limitations
   •	Currently, there is a limit on the number of data points that can be stored – a total of 10,000 inputs can be made and stored in the database.
   
   •	Line segment inputs are derived based on a routing API. In case you do not get the right segments highlighted, please mark more points along the route. 
   
   •	Too many users inputting information on the tool can cause slowdown and increase in response time for the inputs.


# License
The tool has been adapted from Boston Cyclist Union’s Bikeways for Everybody campaign in 2014. The tool crowdsourced roads to be fixed for bicycling around the city of Boston.

Reference Repository: https://github.com/radumas/bikeways4everybody

Reference Tool: 

	The Bikeways for Everybody tool allows for use of the tool under the license which is mentioned below:

	The MIT License (MIT)

	Copyright (c) 2015 Raphael Dumas and Mike Foster

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.


