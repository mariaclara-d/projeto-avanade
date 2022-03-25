let jogadores = ['Leonardo', 'Milena', 'Bryam'];

jogadores[1] = 'Shay';

jogadores.push('Bryam', 'Luan');

jogadores.sort();

for (posicao in jogadores){
console.log ('posicao:' + posicao + 'jogador:' + jogadores[posicao])
}

