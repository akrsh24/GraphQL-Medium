enum Rating {
  ONE = "one",
  TWO = "two",
  THREE = "three",
}
export type SeriesModel = {
  id: string;
  name: string;
  year: number;
  rating: Rating;
};
