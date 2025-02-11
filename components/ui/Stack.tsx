import React, { useState, useCallback, memo, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { StackCard } from "@/types/featured";

// Memoized Card component to prevent unnecessary re-renders
const Card = memo(({ 
  card, 
  index, 
  totalCards, 
  onSendToBack, 
  sensitivity,
  randomRotate,
  cardDimensions,
  animationConfig,
  sendToBackOnClick 
}: {
  card: StackCard;
  index: number;
  totalCards: number;
  onSendToBack: (id: number) => void;
  sensitivity: number;
  randomRotate: number;
  cardDimensions: { width: number; height: number };
  animationConfig: { stiffness: number; damping: number };
  sendToBackOnClick: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  // Memoize the drag end handler
  const handleDragEnd = useCallback((_: any, info: any) => {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack(card.id);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [sensitivity, onSendToBack, card.id, x, y]);

  const motionStyle = useMemo(() => ({
    width: cardDimensions.width,
    height: cardDimensions.height
  }), [cardDimensions.width, cardDimensions.height]);

  const animateProps = useMemo(() => ({
    rotateZ: (totalCards - index - 1) * 4 + randomRotate,
    scale: 1 + index * 0.06 - totalCards * 0.06,
    transformOrigin: "90% 90%"
  }), [index, totalCards, randomRotate]);

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="rounded-2xl overflow-hidden border-4 border-white shadow-lg relative"
        onClick={() => sendToBackOnClick && onSendToBack(card.id)}
        animate={animateProps}
        transition={{ 
          type: "spring", 
          stiffness: animationConfig.stiffness, 
          damping: animationConfig.damping 
        }}
        style={motionStyle}
      >
        <img 
          src={card.img} 
          alt={card.name} 
          className="w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#3C2A1F]/80 text-white text-sm font-semibold py-1 px-3 rounded-lg shadow-md text-center w-auto">
          {card.name}
        </div>
      </motion.div>
    </motion.div>
  );
});

Card.displayName = 'Card';

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  cardsData: StackCard[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 220, height: 280 },
  cardsData,
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState<StackCard[]>(cardsData);

  const sendToBack = useCallback((id: number) => {
    setCards(prev => {
      const index = prev.findIndex(card => card.id === id);
      if (index === -1) return prev;
      const newCards = [...prev];
      const [card] = newCards.splice(index, 1);
      return [card, ...newCards];
    });
  }, []);

  const containerStyle = useMemo(() => ({
    width: cardDimensions.width, 
    height: cardDimensions.height, 
    perspective: 600
  }), [cardDimensions]);

  const randomRotations = useMemo(() => 
    cards.map(() => randomRotation ? Math.random() * 10 - 5 : 0),
    [cards.length, randomRotation]
  );

  return (
    <div className="relative flex justify-center" style={containerStyle}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          totalCards={cards.length}
          onSendToBack={sendToBack}
          sensitivity={sensitivity}
          randomRotate={randomRotations[index]}
          cardDimensions={cardDimensions}
          animationConfig={animationConfig}
          sendToBackOnClick={sendToBackOnClick}
        />
      ))}
    </div>
  );
}
