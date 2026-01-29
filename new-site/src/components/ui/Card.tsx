import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'md',
}) => {
  const baseStyles = 'bg-white rounded-xl border border-cool-gray shadow-md';

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hoverable ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '';

  return (
    <motion.div
      className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
