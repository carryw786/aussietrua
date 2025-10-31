
        const apiKey = '93b7ab2b-b2f1-44e1-b78a-7767c9244694';
        const apiUrl = `https://apiip.net/api/check?accessKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;
                const city = data.city;
                const region = data.regionName; // Use "regionName" for region
                const state = data.regionName; // Add state field
                const longitude = data.longitude;
                const latitude = data.latitude;

                // Debugging: Log data, region, and state
                console.log('API Data:', data);
                console.log('Region from API:', region);
                console.log('State from API:', state);

                // Update the HTML content with the fetched data
                document.getElementById('ipAddress').textContent = ipAddress;
                document.getElementById('city').textContent = city;
                document.getElementById('region').textContent = region;
                document.getElementById('state').textContent = state; // Update the ID
                document.getElementById('longitude').textContent = longitude;
                document.getElementById('latitude').textContent = latitude;
            })
            .catch(error => {
                console.error('Error:', error);
            });
