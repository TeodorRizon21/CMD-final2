const translations = {
  ro: {
    acasaNavbar: "Acasa",
    desprenoiNavbar: "Despre noi",
    domeniiNavbar: "Domenii",
    cereofertaNavbar: "Cere o oferta!",
    contactNavbar: "Contact",
    landingTitle: "Diferiți dar potriviți! Talentul fără granițe.",
    landingP: 'La agenția noastră, "Diferiți dar potriviți!" nu este doar un motto, ci și filozofia noastră. Descoperim talentele unice din întreaga lume și le conectăm cu companiile care se potrivesc perfect cu ele. Cu o rețea globală, facem ca recrutarea internațională să fie simplă și eficientă pentru tine.',
    titluContainerMituri: "Mituri comune despre recrutare",
    titluMit1: 'NU avem oameni "pe stoc"',
    titluMit2: 'NU dispărem dupa aducerea oamenilor in tara',
    titluMit3: 'NU alegem doar oameni perfecti',
    titluMit4: 'NU lucram cu angajatori cu angajatori neprofesionisti',
    titluContainerNegare: 'NU avem oameni "pe stoc"',
    paragrafContainerNegare: "Noi ii alegem special pentru nevoile dumneavoastra petru a fi siguri ca sunt excat ceea ce va doriti.",
    titluDomeniu1: "Constructii",
    titluDomeniu2: "Fabrici",
    titluDomeniu3: "FMCG",
    titluDomeniu4: "HoReCa",
    titluDomeniu5: "Agricultura",
    titluDomeniu6: "Ferme",
    titluDomeniu7: "Menaj",
    titluDomeniu8: "Babysitting",
    titluDomeniu9: "Ajutor la domiciliu",
    titluDomeniu10: "Curierat",
    titluDomeniu11: "Reciclare",
    titluDomeniu12: "Santiere navale",
   
  },
  en: {
    acasaNavbar: "Home",
    desprenoiNavbar: "About Us",
    domeniiNavbar: "Domains",
    cereofertaNavbar: "Request an offer!",
    contactNavbar: "Contact",
    landingTitle: "Different but fitting! Talent without boundaries.",
    landingP: 'At our agency, "Different but fitting!" is not just a motto, but also our philosophy. We discover unique talents from all around the world and connect them with companies that perfectly match them. With a global network, we make international recruitment simple and efficient for you.',
    titluContainerMituri: "Common myths about recruitment",
    titluMit1: 'EN NU avem oameni "pe stoc"',
    titluMit2: 'EN NU dispărem dupa aducerea oamenilor in tara',
    titluMit3: 'EN NU alegem doar oameni perfecti',
    titluMit4: 'EN NU lucram cu angajatori cu angajatori neprofesionisti',
    titluContainerNegare: 'EN NU avem oameni "pe stoc"',
    paragrafContainerNegare: "EN Noi ii alegem special pentru nevoile dumneavoastra petru a fi siguri ca sunt excat ceea ce va doriti.",
    titluDomeniu1: "EN Constructii",
    titluDomeniu2: "EN Fabrici",
    titluDomeniu3: "EN FMCG",
    titluDomeniu4: "EN HoReCa",
    titluDomeniu5: "EN Agricultura",
    titluDomeniu6: "EN Ferme",
    titluDomeniu7: "EN Menaj",
    titluDomeniu8: "EN Babysitting",
    titluDomeniu9: "EN Ajutor la domiciliu",
    titluDomeniu10: "EN Curierat",
    titluDomeniu11: "EN Reciclare",
    titluDomeniu12: "EN Santiere navale",
  }
};


function savePreferredLanguage(selectedLanguage) {
    localStorage.setItem('preferredLanguage', selectedLanguage);
}


function getPreferredLanguage() {
    return localStorage.getItem('preferredLanguage');
}

let language = getPreferredLanguage() || "ro";


function updateLanguage() {
    switch (language) {
        case "ro":
           
            document.getElementById("acasa-navbar").textContent = translations.ro.acasaNavbar;
            document.getElementById("desprenoi-navbar").textContent = translations.ro.desprenoiNavbar;
            document.getElementById("domenii-navbar").textContent = translations.ro.domeniiNavbar;
            document.getElementById("cereoferta-navbar").textContent = translations.ro.cereofertaNavbar;
            document.getElementById("contact-navbar").textContent = translations.ro.contactNavbar;
          

            document.getElementById("selected-language").textContent = "Romana";
            document.getElementById("selected-flag").src = "../image/tari/rom.jpg";
            document.getElementById("ro").style.display = "none";
            document.getElementById("en").style.display = "flex";
            break;


        case "en":
          
            document.getElementById("acasa-navbar").textContent = translations.en.acasaNavbar;
            document.getElementById("desprenoi-navbar").textContent = translations.en.desprenoiNavbar;
            document.getElementById("domenii-navbar").textContent = translations.en.domeniiNavbar;
            document.getElementById("cereoferta-navbar").textContent = translations.en.cereofertaNavbar;
            document.getElementById("contact-navbar").textContent = translations.en.contactNavbar;


            document.getElementById("selected-language").textContent = "English";
            document.getElementById("selected-flag").src = "../image/tari/uk.png";
            document.getElementById("en").style.display = "none";
            document.getElementById("ro").style.display = "flex";
            
            break;

    }
}


updateLanguage();


function languageSelector(selectedLanguage) {
    language = selectedLanguage;
    updateLanguage();
    savePreferredLanguage(language);
}


