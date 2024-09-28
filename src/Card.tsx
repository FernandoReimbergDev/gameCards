import React from 'react';

// Definir a interface para os tipos de dados do card
interface CardType {
  image: string;
  força: number;
  ataque: number;
  defesa: number;
  agilidade: number;
}

// Definir a interface para as props do componente Card
interface CardProps {
  card: CardType | null;  // O card pode ser um objeto do tipo CardType ou null
}

export const Card: React.FC<CardProps> = ({ card }) => {
  // Se o card for nulo, retorna um placeholder
  if (!card) return <div className="w-64 h-[211px] bg-gray-200 rounded-lg shadow-lg"></div>;

  // Renderiza o card se ele existir
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <img src={card.image} alt="card" className="h-fit object-cover rounded-lg mb-4" />
      <div className="text-sm">
   
      </div>
    </div>
  );
};
