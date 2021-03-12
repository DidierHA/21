let baraja = [], 
palos = ['S','C','D','H'], 
figuras = ['J','Q','K','A'];

let puntosJugador = 0;

const btnNuevo = document.querySelector('#btnNuevo'),
      btnPedirCarta = document.querySelector('#btnPedirCarta'),
      btnDetenerse = document.querySelector('#btnDetenerse'),
      btnSalir = document.querySelector('#btnSalir'),
      btnCambiarNombre = document.querySelector('#btnCambiarNombre');

const resultados = document.querySelectorAll('span');

const cartaJugador = document.querySelector('#cartas-jugador');

const crearBaraja = () => {

    baraja = [];

    for(let i = 2; i <= 10; i++){
        for(let palosDeCartas of palos){
            baraja.push(i + palosDeCartas);
        }
    }

    for(let figurasDeCartas of figuras){
        for(let palosDeCartas of palos){
            baraja.push(figurasDeCartas+palosDeCartas);
        }
    }

    baraja = _.shuffle(baraja);

}

const pedirCarta = () => {
    return baraja.length == 0 ? alert('No hay más cartas') : baraja.pop();
}

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length -1);
    return isNaN(valor) ? (valor === 'A') ? 11 : 10 :valor * 1;
}

btnPedirCarta.addEventListener('click', () => {
   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta(carta);
   resultados[0].innerText = puntosJugador;
   const imgCarta = document.createElement('img');
   imgCarta.src = `cartas/${carta}.png`;
   imgCarta.classList.add('carta');
   cartaJugador.append(imgCarta);
})

btnNuevo.addEventListener('click', ()=> {
    crearBaraja();
})