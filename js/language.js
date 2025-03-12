function changeLanguage(lang) {
    var r=document.querySelector(':root');
    if(lang == 'en') {
        r.style.setProperty('--displayENG', 'block');
        r.style.setProperty('--displayFR', 'none');
    } else if(lang == 'fr') {
        r.style.setProperty('--displayFR', 'block');
        r.style.setProperty('--displayENG', 'none');
    }
}