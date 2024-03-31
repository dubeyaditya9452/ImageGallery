document.addEventListener('DOMContentLoaded', function() {
    // Function to filter photos based on the selected category
    function filterPhotos(category) {
        const allPhotos = document.querySelectorAll('.photo-gallery .pic');
        allPhotos.forEach(photo => {
            if (category === 'All Photos' || photo.classList.contains(category.toLowerCase())) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    }

    // Add change event listeners to all radio inputs
    const radioButtons = document.querySelectorAll('input[name="photos"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Get the category from the id of the checked radio button
            let category = radio.id.replace('check', '');
            switch(category) {
                case '1':
                    category = 'All Photos';
                    break;
                case '2':
                    category = 'Nature';
                    break;
                case '3':
                    category = 'Mountain';
                    break;
                case '4':
                    category = 'Sunset';
                    break;
                default:
                    category = 'All Photos';
            }
            filterPhotos(category);
        });
    });

    // Initially display all photos
    filterPhotos('All Photos');
});
