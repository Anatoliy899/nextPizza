import { CartItemDTO } from '@/services/dto/cart.dto';
import React from 'react';

interface Props {
  className?: string;
}

export const CalcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );
  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
