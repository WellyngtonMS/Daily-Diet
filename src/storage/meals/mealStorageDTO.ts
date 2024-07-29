export type MealStorageDTO = {
  id: string;
  date: string;
  data: MealData[];
}

export type MealData = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'GOOD' | 'BAD';
}