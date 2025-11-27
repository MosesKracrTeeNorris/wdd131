document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', name: "D Link Router", avg_rating: 4.5 },
        { id: 'fc-2050', name: "Layer3 Managed Switch", avg_rating: 4.7 },
        { id: 'fs-1987', name: "Sophos and CISCO Firewall", avg_rating: 3.5 },
        { id: 'ac-2000', name: "Hikvision NVR and DVR", avg_rating: 3.9 },
        { id: 'jj-1969', name: "Outdoor Access point", avg_rating: 5.0 }
    ];

    const selectElement = document.getElementById('product-name');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', 0);
    }

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last update: ${lastModified}`;
    }
});