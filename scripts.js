function applyForAdoption(petId) {
    window.location.href = `apply.html?petId=${petId}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Example pet data
    const pets = [
        {
            id: '1',
            name: 'Dog',
            description: 'Friendly and loyal, loves to play fetch and go for walks.',
            photo_url: 'https://lh6.ggpht.com/EoH-UNwa_XRNuk0jB7UQDVQdTSigPu4B5zrb3I5iXk289KYfGZOzJgfwP8Y9DEA1O_k=h900'
        },
        {
            id: '2',
            name: 'Cat',
            description: 'Calm and independent, enjoys sunny spots and quiet naps.',
            photo_url: 'https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain'
        },
        {
            id: '3',
            name: 'Dragon',
            description: 'Majestic and mythical, requires a spacious habitat.',
            photo_url: 'https://as2.ftcdn.net/v2/jpg/05/37/74/33/1000_F_537743341_yFIKXj8DysMCwRM4qgHk91NsA1VmNtxa.jpg'
        },
        {
            id: '4',
            name: 'Turtle',
            description: 'Slow and steady, loves swimming and basking in the sun.',
            photo_url: 'https://th.bing.com/th/id/OIP.JRQBSVaQvwuqVwqdMJANUQEsDQ?rs=1&pid=ImgDetMain'
        },
        {
            id: '5',
            name: 'Snake',
            description: 'Quiet and fascinating, needs a warm and secure enclosure.',
            photo_url: 'https://th.bing.com/th/id/OIP.STPyCDq-sEPJGxO1Bxa9IwHaFF?w=850&h=584&rs=1&pid=ImgDetMain'
        }
    ];

    const petsContainer = document.getElementById('pets-container');

    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';

        const petImage = document.createElement('img');
        petImage.src = pet.photo_url;
        petImage.alt = `${pet.name} Image`;
        petCard.appendChild(petImage);

        const petName = document.createElement('h3');
        petName.textContent = pet.name;
        petCard.appendChild(petName);

        const petDescription = document.createElement('p');
        petDescription.textContent = pet.description;
        petCard.appendChild(petDescription);

        const adoptButton = document.createElement('button');
        adoptButton.textContent = 'Adopt';
        adoptButton.onclick = () => applyForAdoption(pet.id);
        petCard.appendChild(adoptButton);

        petsContainer.appendChild(petCard);
    });
});
