
// ======================================
// CONFIGURAÇÕES DO SITE
// ======================================

// Coloque a data em que vocês começaram a namorar.
// Formato: ANO, MÊS (janeiro = 0), DIA, HORA, MINUTO

const dataInicio = new Date(2026, 4, 3, 0, 0);

// Exemplo:
// const dataInicio = new Date(2026, 1, 14, 0, 0);


// ======================================
// CONTADOR DE TEMPO
// ======================================

function atualizarContador() {

    const dias = document.getElementById("days");
    const horas = document.getElementById("hours");
    const minutos = document.getElementById("minutes");
    const segundos = document.getElementById("seconds");
    const aviso = document.getElementById("counterNote");

    if (!dataInicio || isNaN(dataInicio.getTime())) {

        dias.textContent = "♡";
        horas.textContent = "--";
        minutos.textContent = "--";
        segundos.textContent = "--";

        aviso.textContent = "Em breve, nosso contador terá uma data especial.";

        return;
    }

    const agora = new Date();
    const diferenca = agora - dataInicio;

    if (diferenca < 0) {
        aviso.textContent = "Nossa contagem começa em breve! ❤️";
        return;
    }

    const totalSegundos = Math.floor(diferenca / 1000);

    const totalDias = Math.floor(totalSegundos / 86400);
    const totalHoras = Math.floor((totalSegundos % 86400) / 3600);
    const totalMinutos = Math.floor((totalSegundos % 3600) / 60);
    const totalSegundosRestantes = totalSegundos % 60;

    dias.textContent = totalDias;
    horas.textContent = String(totalHoras).padStart(2, "0");
    minutos.textContent = String(totalMinutos).padStart(2, "0");
    segundos.textContent = String(totalSegundosRestantes).padStart(2, "0");
}

atualizarContador();

setInterval(atualizarContador, 1000);


// ======================================
// MÚSICA DE FUNDO
// ======================================

const musica = document.getElementById("musica");
const musicButton = document.getElementById("musicButton");

let tocando = false;

musicButton.addEventListener("click", async () => {

    if (!tocando) {

        try {
            await musica.play();

            tocando = true;
            musicButton.textContent = "♫ Pausar música";

        } catch (erro) {

            musicButton.textContent = "Não foi possível tocar";

        }

    } else {

        musica.pause();

        tocando = false;
        musicButton.textContent = "♫ Tocar nossa música";
    }

});

musica.addEventListener("ended", () => {
    tocando = false;
    musicButton.textContent = "♫ Tocar nossa música";
});
