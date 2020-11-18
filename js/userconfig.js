/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [15.4909, 73.8278],
	south : 15.4 ,
	west : 73.7,
	north : 15.6,
	east : 74.0,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicmVtb3RlZ2VudHJpZnkiLCJhIjoiY2lnanJzMjJpMDA1dnYxbHo5MTZtdGZsYSJ9.gLE8d40zmDAtMSSZyd2h1Q',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'raphaeld',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>You can add in streets around Panaji that you see currently flooded. </p><p>The map shows currently flooded streets around the city.</p>"
};
