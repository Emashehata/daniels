var typed = new Typed(".auto-type",
    {
        strings : ["Developer","Larry Danials","Designer"],
        typeSpeed : 80 ,
        backSpeed : 80 ,
        loop :true
    }
) 
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the .image-icon class
    const icons = document.querySelectorAll('.image-icon');

    // Select the modal image element
    const modalImage = document.getElementById('modalImage');

    // Loop through icons and add click event
    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Set the modal image source to the data-bs-img attribute
            const imgSrc = icon.getAttribute('data-bs-img');
            modalImage.src = imgSrc;
        });
    });
});


