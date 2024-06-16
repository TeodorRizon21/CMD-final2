const translations = {
  ro: {
    acasaNavbar: "Acasă",
    desprenoiNavbar: "Despre noi",
    domeniiNavbar: "Domenii",
    cereofertaNavbar: "Cere o ofertă!",
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
    titluDomeniu1: "Construcții",
    titluDomeniu2: "Fabrici",
    titluDomeniu3: "FMCG",
    titluDomeniu4: "HoReCa",
    titluDomeniu5: "Agricultură",
    titluDomeniu6: "Ferme",
    titluDomeniu7: "Menaj",
    titluDomeniu8: "Babysitting",
    titluDomeniu9: "Ajutor la domiciliu",
    titluDomeniu10: "Curierat",
    titluDomeniu11: "Reciclare & Salubritate",
    titluDomeniu12: "Șantiere navale",
   
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
    titluDomeniu1: "EN Construcții",
    titluDomeniu2: "EN Fabrici",
    titluDomeniu3: "EN FMCG",
    titluDomeniu4: "EN HoReCa",
    titluDomeniu5: "EN Agricultură",
    titluDomeniu6: "EN Ferme",
    titluDomeniu7: "EN Menaj",
    titluDomeniu8: "EN Babysitting",
    titluDomeniu9: "EN Ajutor la domiciliu",
    titluDomeniu10: "EN Curierat",
    titluDomeniu11: "EN Reciclare",
    titluDomeniu12: "EN Șantiere navale",
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
            document.getElementById("catalog-titlu").innerHTML = '<h2 id="catalog-titlu">Domeniile pentru care <span style="font-weight: 700;">RECRUTAM</span></h2>';
            document.getElementById("titlu-domeniu1").textContent = translations.ro.titluDomeniu1;
            document.getElementById("titlu-domeniu2").textContent = translations.ro.titluDomeniu2;
            document.getElementById("titlu-domeniu3").textContent = translations.ro.titluDomeniu3;
            document.getElementById("titlu-domeniu4").textContent = translations.ro.titluDomeniu4;
            document.getElementById("titlu-domeniu5").textContent = translations.ro.titluDomeniu5;
            document.getElementById("titlu-domeniu6").textContent = translations.ro.titluDomeniu6;
            document.getElementById("titlu-domeniu7").textContent = translations.ro.titluDomeniu7;
            document.getElementById("titlu-domeniu8").textContent = translations.ro.titluDomeniu8;
            document.getElementById("titlu-domeniu9").textContent = translations.ro.titluDomeniu9;
            document.getElementById("titlu-domeniu10").textContent = translations.ro.titluDomeniu10;
            document.getElementById("titlu-domeniu11").textContent = translations.ro.titluDomeniu11;
            document.getElementById("titlu-domeniu12").textContent = translations.ro.titluDomeniu12;

            document.getElementById("selected-language").textContent = "Romana";
            document.getElementById("selected-flag").src = "image/tari/rom.jpg";
            document.getElementById("ro").style.display = "none";
            document.getElementById("en").style.display = "flex";
            break;


        case "en":
          
            document.getElementById("acasa-navbar").textContent = translations.en.acasaNavbar;
            document.getElementById("desprenoi-navbar").textContent = translations.en.desprenoiNavbar;
            document.getElementById("domenii-navbar").textContent = translations.en.domeniiNavbar;
            document.getElementById("cereoferta-navbar").textContent = translations.en.cereofertaNavbar;
            document.getElementById("contact-navbar").textContent = translations.en.contactNavbar;
            document.getElementById("catalog-titlu").innerHTML = '<h2 id="catalog-titlu">The domains in which <span style="font-weight: 700;">WE OPERATE</span></h2>';
            document.getElementById("titlu-domeniu1").textContent = translations.en.titluDomeniu1;
            document.getElementById("titlu-domeniu2").textContent = translations.en.titluDomeniu2;
            document.getElementById("titlu-domeniu3").textContent = translations.en.titluDomeniu3;
            document.getElementById("titlu-domeniu4").textContent = translations.en.titluDomeniu4;
            document.getElementById("titlu-domeniu5").textContent = translations.en.titluDomeniu5;
            document.getElementById("titlu-domeniu6").textContent = translations.en.titluDomeniu6;
            document.getElementById("titlu-domeniu7").textContent = translations.en.titluDomeniu7;
            document.getElementById("titlu-domeniu8").textContent = translations.en.titluDomeniu8;
            document.getElementById("titlu-domeniu9").textContent = translations.en.titluDomeniu9;
            document.getElementById("titlu-domeniu10").textContent = translations.en.titluDomeniu10;
            document.getElementById("titlu-domeniu11").textContent = translations.en.titluDomeniu11;
            document.getElementById("titlu-domeniu12").textContent = translations.en.titluDomeniu12;


            document.getElementById("selected-language").textContent = "English";
            document.getElementById("selected-flag").src = "image/tari/uk.png";
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


