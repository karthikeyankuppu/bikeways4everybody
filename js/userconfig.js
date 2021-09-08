/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [15.4909, 73.8278],
	south : 15.44 ,
	west : 73.887,
	north : 15.53,
	east : 73.76,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicmVtb3RlZ2VudHJpZnkiLCJhIjoiY2lnanJzMjJpMDA1dnYxbHo5MTZtdGZsYSJ9.gLE8d40zmDAtMSSZyd2h1Q',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'karthikeyankuppu',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>The Panaji Flood Mapping Tool is a interactive web map created by Project Urban Living Lab to crowdsource and dissemenate information on flooding in Panaji. </p><p> The Project Urban Living Lab (PULL) is India's first Urban Living Lab implemented by Oxford Policy Management, Transitions Research, and The Energy and Resources Institute (TERI), in partnership with Imagine Panaji Smart City Development Limited (IPSCDL) and with the support of of the Royal Danish Embassy, New Delhi. PULL aims to create a collaborative space for Iteratively designing, testing and fine-tuning socio-technical innovations to address complex urban challenges. </p>"
};
