async function homeDp() {
    try {
        const response = await fetch('http://localhost:3000/api/home/media'); // Replace with actual URL
        const data = await response.json();

        const imgContainer = document.getElementById('container');

        data.forEach(item => {
            const img = document.createElement('img');
            img.src = item.url; // assuming the JSON has a structure like [{ "url": "..." }]
            img.alt = item.alt || 'image';
            img.className = 'rounded-b-full'; // Add other Tailwind classes as needed
            imgContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Call the function (optional: on window load or another trigger)
homeDp();

