window.onload = function() {
    var musica1 = document.getElementById("musica1");
    var musica2 = document.getElementById("musica2");
    var musica3 = document.getElementById("musica3");
    var musica4 = document.getElementById("musica4");

    // Toca a primeira música ao carregar o site
    musica1.play();

    // Quando a primeira música terminar, toca a segunda
    musica1.onended = function() {
        musica2.play();
    };

    // Quando a segunda música terminar, toca a terceira
    musica2.onended = function() {
        musica3.play();
    };

    // Quando a terceira música terminar, toca a quarta
    musica3.onended = function() {
        musica4.play();
    };
};