export const mapPizzaSize = {
  20: 'Маденькая',
  30: 'Средняя',
  40: 'Большая',
};

export const mapPizzaType = {
  1: 'традиционная',
  2: 'тонкая',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));
