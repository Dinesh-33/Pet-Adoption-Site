document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const petId = urlParams.get('petId');

    if (petId) {
        document.getElementById('pet-id').value = petId;
    }

    const adoptionForm = document.getElementById('adoption-form');
    adoptionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(adoptionForm);
        const applicationData = {};
        formData.forEach((value, key) => {
            applicationData[key] = value;
        });

        console.log('Application submitted:', applicationData);
        alert('Application submitted successfully!');
    });
});
