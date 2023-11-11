 var map = new Microsoft.Maps.Map('#map', {
            credentials: 'Akg60X7E388oEBNDe_wQNZMX_PmOSpXoWdurv6g5MaTx-R3keu55Rii_5-3UiG0-'
        });

        // Function to update the polyline on the map
        function updatePolyline(coordinates) {
            var locations = coordinates.map(coord => new Microsoft.Maps.Location(coord.latitude, coord.longitude));

            // Remove existing polyline
            map.entities.clear();

            // Add a new polyline with the updated coordinates
            var polyline = new Microsoft.Maps.Polyline(locations, {
                strokeColor: 'blue',
                strokeThickness: 3
            });

            map.entities.push(polyline);
        }

        // Function to fetch coordinates from the API every second
        function fetchCoordinates() {
            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
            fetch('YOUR_API_ENDPOINT')
                .then(response => response.json())
                .then(data => {
                    // Update the polyline on the map with the new coordinates
                    // updatePolyline(data.coordinates);
                  var coordinates=[
                     { "latitude": 23.5204445, "longitude": 87.3119229 },
    { "latitude": 23.5204447, "longitude": 87.3119231 },
    { "latitude": 23.5204449, "longitude": 87.3119233 },
    { "latitude": 23.5204451, "longitude": 87.3119235 },
    { "latitude": 23.5204453, "longitude": 87.3119237 },
    { "latitude": 23.5204455, "longitude": 87.3119239 },
    { "latitude": 23.5204457, "longitude": 87.3119241 },
    { "latitude": 23.5204459, "longitude": 87.3119243 },
    { "latitude": 23.5204461, "longitude": 87.3119245 },
    { "latitude": 23.5204463, "longitude": 87.3119247 },
    { "latitude": 23.5204465, "longitude": 87.3119249 },
    { "latitude": 23.5204467, "longitude": 87.3119251 },
    { "latitude": 23.5204469, "longitude": 87.3119253 },
    { "latitude": 23.5204471, "longitude": 87.3119255 },
    { "latitude": 23.5204473, "longitude": 87.3119257 },
    { "latitude": 23.5204475, "longitude": 87.3119259 },
    { "latitude": 23.5204477, "longitude": 87.3119261 },
    { "latitude": 23.5204479, "longitude": 87.3119263 },
    { "latitude": 23.5204481, "longitude": 87.3119265 },
    { "latitude": 23.5204483, "longitude": 87.3119267 },
    { "latitude": 23.5204485, "longitude": 87.3119269 },
    { "latitude": 23.5204487, "longitude": 87.3119271 },
    { "latitude": 23.5204489, "longitude": 87.3119273 },
    { "latitude": 23.5204491, "longitude": 87.3119275 },
    { "latitude": 23.5204493, "longitude": 87.3119277 },
    { "latitude": 23.5204495, "longitude": 87.3119279 },
    { "latitude": 23.5204497, "longitude": 87.3119281 },
    { "latitude": 23.5204499, "longitude": 87.3119283 },
    { "latitude": 23.5204501, "longitude": 87.3119285 },
    { "latitude": 23.5204503, "longitude": 87.3119287 },
    { "latitude": 23.5204505, "longitude": 87.3119289 },
    { "latitude": 23.5204507, "longitude": 87.3119291 },
    { "latitude": 23.5204509, "longitude": 87.3119293 },
    { "latitude": 23.5204511, "longitude": 87.3119295 },
    { "latitude": 23.5204513, "longitude": 87.3119297 },
    { "latitude": 23.5204515, "longitude": 87.3119299 },
    { "latitude": 23.5204517, "longitude": 87.3119301 },
    { "latitude": 23.5204519, "longitude": 87.3119303 },
    { "latitude": 23.5204521, "longitude": 87.3119305 },
    { "latitude": 23.5204523, "longitude": 87.3119307 },
    { "latitude": 23.5204525, "longitude": 87.3119309 },
    { "latitude": 23.5204527, "longitude": 87.3119311 },
    { "latitude": 23.5204529, "longitude": 87.3119313 },
    { "latitude": 23.5204531, "longitude": 87.3119315 },
    { "latitude": 23.5204533, "longitude": 87.3119317 },
    { "latitude": 23.5204535, "longitude": 87.3119319 },
    { "latitude": 23.5204537, "longitude": 87.3119321 },
    { "latitude": 23.5204539, "longitude": 87.3119323 },
    { "latitude": 23.5204541, "longitude": 87.3119325 },
    { "latitude": 23.5204543, "longitude": 87.3119327 },
    { "latitude": 23.5204545, "longitude": 87.3119329 },
    { "latitude": 23.5204547, "longitude": 87.3119331 },
    { "latitude": 23.5204549, "longitude": 87.3119333 },
    { "latitude": 23.5204551, "longitude": 87.3119335 },
    { "latitude": 23.5204553, "longitude": 87.3119337 },
    { "latitude": 23.5204555, "longitude": 87.3119339 },
    { "latitude": 23.5204557, "longitude": 87.3119341 },
    { "latitude": 23.5204559, "longitude": 87.3119343 },
    { "latitude": 23.5204561, "longitude": 87.3119345 },
    { "latitude": 23.5204563, "longitude": 87.3119347 },
    { "latitude": 23.5204565, "longitude": 87.3119349 },
    { "latitude": 23.5204567, "longitude": 87.3119351 },
    { "latitude": 23.5204569, "longitude": 87.3119353 },
    { "latitude": 23.5204571, "longitude": 87.3119355 },
    { "latitude": 23.5204573, "longitude": 87.3119357 },
    { "latitude": 23.5204575, "longitude": 87.3119359 },
    { "latitude": 23.5204577, "longitude": 87.3119361 },
    { "latitude": 23.5204579, "longitude": 87.3119363 },
    { "latitude": 23.5204581, "longitude": 87.3119365 },
    { "latitude": 23.5204583, "longitude": 87.3119367 },
    { "latitude": 23.5204585, "longitude": 87.3119369 },
    { "latitude": 23.5204587, "longitude": 87.3119371 },
    { "latitude": 23.5204589, "longitude": 87.3119373 },
    { "latitude": 23.5204591, "longitude": 87.3119375 },
    { "latitude": 23.5204593, "longitude": 87.3119377 },
    { "latitude": 23.5204595, "longitude": 87.3119379 },
    { "latitude": 23.5204597, "longitude": 87.3119381 },
    { "latitude": 23.5204599, "longitude": 87.3119383 },
    { "latitude": 23.5204601, "longitude": 87.3119385 },
    { "latitude": 23.5204603, "longitude": 87.3119387 },
    { "latitude": 23.5204605, "longitude": 87.3119389 },
    { "latitude": 23.5204607, "longitude": 87.3119391 },
    { "latitude": 23.5204609, "longitude": 87.3119393 },
    { "latitude": 23.5204611, "longitude": 87.3119395 },
    { "latitude": 23.5204613, "longitude": 87.3119397 },
                  ]
                  updatePolyline(coordinates);
                })
                .catch(error => console.error('Error fetching coordinates:', error))
                .finally(() => {
                    // Schedule the next update after 1000 milliseconds (1 second)
                    setTimeout(fetchCoordinates, 1000);
                });
        }

        // Start fetching coordinates
        fetchCoordinates();
