import { useState } from 'react';
import {Card} from './Card';
import fundo from '../public/bg.png';

// Interface para definir a estrutura de uma carta
interface CardType {
  id: number;
  image: string;
  força: number;
  ataque: number;
  defesa: number;
  agilidade: number;
}

const cards: CardType[] = [
  {
    id: 1,
    image: '/images/1.png',
    força: 10000,
    ataque: 7000,
    defesa: 2000,
    agilidade: 50,
  },
  {
    id: 2,
    image: '/images/2.jpg',
    força: 15000,
    ataque: 3000,
    defesa: 3000,
    agilidade: 45,
  },
  {
    id: 3,
    image: '/images/3.png',
    força: 30000,
    ataque: 2000,
    defesa: 1000,
    agilidade: 30,
  },
  {
    id: 4,
    image: '/images/4.png',
    força: 25000,
    ataque: 5000,
    defesa: 7000,
    agilidade: 35,
  },
  {
    id: 5,
    image: '/images/5.png',
    força: 30000,
    ataque: 1000,
    defesa: 9000,
    agilidade: 30,
  },
  {
    id: 6,
    image: '/images/6.png',
    força: 35000,
    ataque: 9000,
    defesa: 8000,
    agilidade: 25,
  },
  {
    id: 7,
    image: '/images/7.png',
    força: 20000,
    ataque: 8000,
    defesa: 10000,
    agilidade: 40,
  },
  {
    id: 8,
    image: '/images/8.png',
    força: 45000,
    ataque: 7000,
    defesa: 10000,
    agilidade: 15,
  },
  {
    id: 9,
    image: '/images/9.png',
    força: 50000,
    ataque: 3000,
    defesa: 3000,
    agilidade: 10,
  },
  {
    id: 10,
    image: '/images/10.png',
    força: 10000,
    ataque: 3000,
    defesa: 2000,
    agilidade: 50,
  },
  {
    id: 11,
    image: '/images/11.png',
    força: 15000,
    ataque: 9000,
    defesa: 4000,
    agilidade:45,
  },
  {
    id: 12,
    image: '/images/12.png',
    força: 20000,
    ataque: 7000,
    defesa: 5000,
    agilidade: 40,
  },
  {
    id: 13,
    image: '/images/13.png',
    força: 25000,
    ataque: 5000,
    defesa: 7000,
    agilidade: 35,
  },
  {
    id: 14,
    image: '/images/14.png',
    força: 30000,
    ataque: 3000,
    defesa: 9000,
    agilidade: 30,
  },
  {
    id: 15,
    image: '/images/15.png',
    força: 35000,
    ataque: 1000,
    defesa: 5000,
    agilidade: 25,
  },
  {
    id: 24,
    image: '/images/24.png',
    força: 45000,
    ataque: 5000,
    defesa: 9000,
    agilidade: 15,
  },
  {
    id: 25,
    image: '/images/24.png',
    força: 20000,
    ataque: 9000,
    defesa: 8000,
    agilidade: 45,
  },
  {
    id: 41,
    image: '/images/41.png',
    força: 10000,
    ataque: 8000,
    defesa: 4000,
    agilidade: 50,
  },
  {
    id: 42,
    image: '/images/42.png',
    força: 15000,
    ataque: 4000,
    defesa: 3000,
    agilidade:45,
  },
  {
    id: 52,
    image: '/images/52.png',
    força: 50000,
    ataque: 8000,
    defesa: 6000,
    agilidade: 10,
  },
  {
    id: 53,
    image: '/images/53.png',
    força: 20000,
    ataque: 9000,
    defesa: 6000,
    agilidade: 40,
  },
  {
    id: 54,
    image: '/images/54.png',
    força: 30000,
    ataque: 1000,
    defesa: 5000,
    agilidade: 30,
  },
  {
    id: 55,
    image: '/images/55.png',
    força: 35000,
    ataque: 9000,
    defesa: 4000,
    agilidade: 25,
  },
  {
    id: 60,
    image: '/images/60.png',
    força: 40000,
    ataque: 1000,
    defesa: 7000,
    agilidade: 20,
  },
  {
    id: 61,
    image: '/images/61.png',
    força: 45000,
    ataque: 8000,
    defesa: 6000,
    agilidade: 15,
  },
  {
    id: 62,
    image: '/images/62.png',
    força: 25000,
    ataque: 5000,
    defesa: 9000,
    agilidade: 35,
  },
  {
    id: 63,
    image: '/images/63.png',
    força: 10000,
    ataque: 4000,
    defesa: 4000,
    agilidade: 50,
  },
  {
    id: 64,
    image: '/images/64.png',
    força: 15000,
    ataque: 10000,
    defesa: 6000,
    agilidade: 45,
  },
  {
    id: 65,
    image: '/images/65.png',
    força: 20000,
    ataque: 8000,
    defesa: 8000,
    agilidade: 40,
  },
  {
    id: 74,
    image: '/images/74.png',
    força: 25000,
    ataque: 5000,
    defesa: 10000,
    agilidade: 35,
  },
  {
    id: 76,
    image: '/images/6.png',
    força: 45000,
    ataque: 7000,
    defesa: 6000,
    agilidade: 15,
  },
  {
    id: 77,
    image: '/images/77.png',
    força: 40000,
    ataque: 4000,
    defesa: 9000,
    agilidade: 20,
  },
  {
    id: 78,
    image: '/images/6.png',
    força: 45000,
    ataque: 6000,
    defesa: 5000,
    agilidade: 15,
  },
  {
    id: 92,
    image: '/images/92.png',
    força: 40000,
    ataque: 6000,
    defesa: 2000,
    agilidade: 20,
  },
  {
    id:93,
    image: '/images/93.png',
    força: 45000,
    ataque: 10000,
    defesa: 4000,
    agilidade: 15,
  },
  {
    id: 94,
    image: '/images/94.png',
    força: 50000,
    ataque: 2000,
    defesa: 1000,
    agilidade:10,
  },
  {
    id: 116,
    image: '/images/116.png',
    força: 15000,
    ataque: 4000,
    defesa: 7000,
    agilidade:45,
  },
  {
    id: 117,
    image: '/images/117.png',
    força: 20000,
    ataque: 10000,
    defesa: 10000,
    agilidade:40,
  },
  {
    id: 118,
    image: '/images/118.png',
    força: 25000,
    ataque: 6000,
    defesa: 8000,
    agilidade:35,
  },
  {
    id: 119,
    image: '/images/119.png',
    força: 15000,
    ataque: 6000,
    defesa: 2000,
    agilidade:45,
  },
  {
    id: 120,
    image: '/images/120.png',
    força: 35000,
    ataque: 10000,
    defesa: 10000,
    agilidade:25,
  },
  {
    id: 121,
    image: '/images/121.png',
    força: 40000,
    ataque: 2000,
    defesa: 3000,
    agilidade:20,
  },
  {
    id: 133,
    image: '/images/133.png',
    força: 35000,
    ataque: 2000,
    defesa: 1000,
    agilidade:25,
  },
  {
    id: 134,
    image: '/images/134.png',
    força: 30000,
    ataque: 2000,
    defesa: 1000,
    agilidade:30,
  },
  {
    id: 135,
    image: '/images/135.png',
    força: 40000,
    ataque: 6000,
    defesa: 5000,
    agilidade:20,
  },
  {
    id: 136,
    image: '/images/136.png',
    força: 45000,
    ataque: 10000,
    defesa: 8000,
    agilidade:15,
  },
  {
    id: 143,
    image: '/images/143.png',
    força: 40000,
    ataque: 1000,
    defesa: 1000,
    agilidade:20,
  },
  {
    id: 150,
    image: '/images/150.png',
    força: 50000,
    ataque: 7000,
    defesa: 2000,
    agilidade:10,
  },
];


export function App(){
  const [playerChoice, setPlayerChoice] = useState<string>('');  // Atributo escolhido pelo jogador
  const [cardsSelected, setCardsSelected] = useState<{ playerCard: CardType | null; computerCard: CardType | null }>({
    playerCard: null,
    computerCard: null,
  });  // Estado para armazenar as cartas selecionadas
  const [winner, setWinner] = useState<string>('');  // Resultado do jogo
  const [playerPoints, setPlayerPoints] = useState<number>(0);  // Pontuação do jogador
  const [computerPoints, setComputerPoints] = useState<number>(0);  // Pontuação do computador

  // Atributos que podem ser escolhidos
  const attributes: string[] = ['força', 'ataque', 'defesa', 'agilidade'];

  // Função para selecionar duas cartas aleatoriamente
  const startGame = (): void => {
    const shuffledCards = [...cards].sort(() => 0.5 - Math.random());  // Embaralha as cartas
    const playerCard = shuffledCards[0];  // Seleciona a primeira carta para o jogador
    const computerCard = shuffledCards[1];  // Seleciona a segunda carta para o computador

    setCardsSelected({ playerCard, computerCard });
    setWinner('');  // Reseta o resultado anterior

    
  };

  // Função para revelar as cartas e comparar o atributo selecionado
  const revealCards = (): void => {
    if (!playerChoice || !cardsSelected.playerCard || !cardsSelected.computerCard) return;

    const playerValue = cardsSelected.playerCard[playerChoice as keyof CardType];
    const computerValue = cardsSelected.computerCard[playerChoice as keyof CardType];

    if (playerValue > computerValue) {
      setWinner('Jogador 1 ganhou!');
      setPlayerPoints((prev) => prev + 1);
    } else if (playerValue < computerValue) {
      setWinner('Jogador 2 ganhou!');
      setComputerPoints((prev) => prev + 1);
    } else {
      setWinner('Empate!');
    }
  };

  return (
    <div className="min-h-screen bg flex flex-col white items-center justify-start mt-8">
      <img src={fundo} className='absolute top-0 left-0 -z-10 w-screen h-screen' />

      {/* Escolha de Atributos */}
      <div className="flex gap-2 w-fit mt-8 mb-2">
        {attributes.map((attr) => (
          <button
            key={attr}
            className={`py-2 px-4 bg-blue-500 text-white rounded ${playerChoice === attr ? 'bg-green-500' : ''}`}
            onClick={() => setPlayerChoice(attr)}
          >
            {attr}
          </button>
        ))}
      </div>

      <button className="py-2 px-4 bg-green-500 text-white rounded mb-2" onClick={startGame}>
        Iniciar Jogo
      </button>

      {/* Cartas dos Jogadores */}
      <div className="flex flex-col gap-2 md:flex-row items-center justify-around w-64 mb-2">
        <Card card={cardsSelected.playerCard} />
        <Card card={cardsSelected.computerCard} />
      </div>

      {/* Botão para Revelar as Cartas */}
      <button
        className="py-2 px-4 bg-red-500 text-white rounded z-10"
        onClick={revealCards}
        disabled={!cardsSelected.playerCard || !cardsSelected.computerCard || !playerChoice}
      >
        Revelar Cartas
      </button>

      {/* Exibição do Resultado */}
      {winner && <p className="mt-4 text-lg font-bold absolute top-4 text-white">{winner}</p>}

      {/* Pontuação */}
      <div className="flex space-x-4 mt-4 absolute top-0 text-white">
        <div>Jogador 1: {playerPoints}</div>
        <div>Computador: {computerPoints}</div>
      </div>
    </div>
  );
};


