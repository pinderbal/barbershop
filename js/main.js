const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
    mobile: false
});

sr.reveal('.services_title',{}); 
sr.reveal('.services_description',{delay: 200}); 
sr.reveal('.card',{ interval: 300});

sr.reveal('.team_title',{}); 
sr.reveal('.team_description',{delay: 200});
sr.reveal('.barber-img',{ delay: 300});
sr.reveal('.barber_name',{ delay: 400});
sr.reveal('.barber_description',{ delay: 500});

sr.reveal('.prices_title',{}); 
sr.reveal('.prices_description',{delay: 200});
sr.reveal('.list_style',{ interval: 300});

sr.reveal('.contact_title',{}); 
sr.reveal('.contact_description',{delay: 200});
sr.reveal('.contact-map',{delay: 300});
sr.reveal('.form-group',{ interval: 200});
sr.reveal('.btn-primary',{delay: 600});
