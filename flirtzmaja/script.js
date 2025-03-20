document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");

    // Pełne tłumaczenia dla całej strony
    const translations = {
        pl: {
            buttonText: "🇬🇧 English",
            mainH3: "Randka ze mną",
            mainH2: "Dołącz już teraz",
            mainP: "Zarejestruj się już teraz",
            registerBtn: "Rejestracja",
            aboutTitle: "Coś o mnie",
            aboutText: `Hej, jestem Maja. Mam 23 lat i kręci mnie poznawanie nowych ludzi oraz
                        nabierać nowe doświadczenia. Uwielbiam spędzać czas w towarzystwie
                        osób, które mają pasję i potrafią dzielić się swoimi przeżyciami.
                        Szukam kogoś, kto ceni prawdziwe relacje i gotów jest na wspólne
                        przygody, zarówno te małe, jak i te wielkie.`,
            secondText: `Lubię robić zdjęcia mojego ciała oraz do nich pozować. Fascynuje mnie
                         gra światła, cieni i perspektywy, które potrafią całkowicie zmienić
                         charakter zdjęcia. Eksperymentuję z różnymi ustawieniami aparatu,
                         kątami ujęć i stylizacjami, aby jak najlepiej uchwycić siebie w
                         kadrach. Czasem inspiruję się profesjonalnymi sesjami fotograficznymi,
                         a innym razem stawiam na naturalność i spontaniczność. Fotografia
                         pozwala mi wyrazić siebie, dostrzec swoją estetykę z nowej perspektywy
                         i budować pewność siebie.`,
            thirdText: `Kocham podróżować, ponieważ każda wyprawa w nieznane miejsca, to dla
                        mnie nowa przygoda, jak i okazja do poznawania nowych rzeczy. Nowi
                        ludzie, kultury, tradycje to coś, co mogłabym poznawać całe życie.
                        Podróże dają mi niezapomniane wspomnienia oraz energię.`,
            reviewText: `EroDate to najlepszy portal randkowy, na którym znalazłam swoją
                         miłość! Dzięki intuicyjnej, prostej obsłudze i skutecznym dopasowaniom
                         poznałam osobę, z którą łączy mnie niezwykła więź. Jeśli szukasz
                         prawdziwego uczucia, zdecydowanie warto spróbować! 💕`,
            reviewAuthor: "Amelia S.",
            erodateText: `<strong>EroDate</strong> to nowoczesna i intuicyjna aplikacja
                          randkowa, która ułatwia nawiązywanie nowych ekscytujących znajomości.
                          Skuteczne dopasowania i prosty, przejrzysty interfejs czynią tę
                          aplikację popularną. Dzięki temu łatwo znajdziesz ludzi, którzy pasują
                          do ciebie. To świetne miejsce na flirt, jak i na bardziej trwałe
                          relacje 💕`,
            meetMeBtn: "Spotkaj się ze mną już dzisiaj",
            registerBtn2: "Zarejestruj się",
            footerText: "© 2025 Maja Veratti. Wszystkie prawa zastrzeżone."
        },
        en: {
            buttonText: "🇵🇱 Polski",
            mainH3: "Date with me",
            mainH2: "Join now",
            mainP: "Sign up now",
            registerBtn: "Register",
            aboutTitle: "Something about me",
            aboutText: `Hi, I'm Maja. I'm 23 years old and I love meeting new people and
                        gaining new experiences. I enjoy spending time with people who have
                        passion and can share their experiences. I'm looking for someone who
                        values true relationships and is ready for shared adventures, both
                        small and big.`,
            secondText: `I love taking pictures of my body and posing for them. I'm fascinated
                         by the play of light, shadows, and perspective that can completely
                         change the character of a photo. I experiment with different camera
                         settings, angles, and styles to best capture myself in the frame.
                         Sometimes I get inspired by professional photo sessions, and other
                         times I go for naturalness and spontaneity. Photography allows me to
                         express myself, see my aesthetics from a new perspective, and build
                         confidence.`,
            thirdText: `I love traveling because every journey to unknown places is a new
                        adventure and an opportunity to discover new things. New people,
                        cultures, and traditions are something I could explore for a lifetime.
                        Traveling gives me unforgettable memories and energy.`,
            reviewText: `EroDate is the best dating site where I found my love! Thanks to its
                         intuitive, simple operation and effective matchmaking, I met someone
                         with whom I share an incredible bond. If you're looking for true love,
                         it's definitely worth a try! 💕`,
            reviewAuthor: "Amelia S.",
            erodateText: `<strong>EroDate</strong> is a modern and intuitive dating app that
                          makes it easy to meet new and exciting people. Its effective
                          matchmaking and simple, transparent interface make this app
                          popular. Thanks to it, you can easily find people who match you.
                          It's a great place for flirting as well as for more lasting
                          relationships 💕`,
            meetMeBtn: "Meet me today",
            registerBtn2: "Register",
            footerText: "© 2025 Maja Veratti. All rights reserved."
        }
    };

    // Sprawdzenie, jaki język ma być domyślnie
    let currentLang = localStorage.getItem("lang") || "pl";
    updateLanguage(currentLang);

    // Obsługa kliknięcia w przycisk zmiany języka
    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "pl" ? "en" : "pl";
        localStorage.setItem("lang", currentLang);
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        langToggle.innerHTML = translations[lang].buttonText;
        document.querySelector(".main-h3").textContent = translations[lang].mainH3;
        document.querySelector(".main-h2").textContent = translations[lang].mainH2;
        document.querySelector(".main-p").textContent = translations[lang].mainP;
        document.querySelector(".text-main button").textContent = translations[lang].registerBtn;
        document.querySelector(".first-chapter h3").textContent = translations[lang].aboutTitle;
        document.querySelector(".first-chapter p").textContent = translations[lang].aboutText;
        document.querySelector(".second-chapter p").textContent = translations[lang].secondText;
        document.querySelector(".third-chapter p").textContent = translations[lang].thirdText;
        document.querySelector(".review-text").textContent = translations[lang].reviewText;
        document.querySelector(".review-author p strong").textContent = translations[lang].reviewAuthor;
        document.querySelector(".about-erodate p").innerHTML = translations[lang].erodateText;
        document.querySelector(".about-erodate-button").textContent = translations[lang].meetMeBtn;
        document.querySelector(".bot-button").textContent = translations[lang].registerBtn2;
        document.querySelector(".footer p").textContent = translations[lang].footerText;
    }
});
