const translations = {
  ro: {
    acasaNavbar: "Acasa",
    desprenoiNavbar: "Despre noi",
    domeniiNavbar: "Domenii",
    cereofertaNavbar: "Cere o oferta!",
    contactNavbar: "Contact",
    faq: "Intrebari frecvente",
    intrebare1: "Intrebare 1",
    intrebare2: "Intrebare 2",
    intrebare3: "Intrebare 3",
    intrebare4: "Intrebare 4",
   
  },
  en: {
    acasaNavbar: "Home",
    desprenoiNavbar: "About Us",
    domeniiNavbar: "Domains",
    cereofertaNavbar: "Request an offer!",
    contactNavbar: "Contact",
    faq: "FAQ",
    intrebare1: "Question 1",
    intrebare2: "Question 2",
    intrebare3: "Question 3",
    intrebare4: "Question 4",
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
            document.getElementById("faq").textContent = translations.ro.faq;
            document.getElementById("intrebare1").textContent = translations.ro.intrebare1;
            document.getElementById("intrebare2").textContent = translations.ro.intrebare2;
            document.getElementById("intrebare3").textContent = translations.ro.intrebare3;
            document.getElementById("intrebare4").textContent = translations.ro.intrebare4;
          

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
            document.getElementById("faq").textContent = translations.en.faq;
            document.getElementById("intrebare1").textContent = translations.en.intrebare1;
            document.getElementById("intrebare2").textContent = translations.en.intrebare2;
            document.getElementById("intrebare3").textContent = translations.en.intrebare3;
            document.getElementById("intrebare4").textContent = translations.en.intrebare4;


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


