
    // Get all links
    const links = document.querySelectorAll('a');

    // Add target="_blank" attribute to all links
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });

    // Get links in the first list
    var firstListLinks = document.querySelectorAll('.no-new-tab');

    // Add click event listener to prevent default behavior for links in the first list
    firstListLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // Add your custom logic here if needed
            // You can use window.location.href to navigate to the target manually
            window.location.href = link.getAttribute('href');
        });
    });


