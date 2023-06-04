export type Answer = {
  /* Unique id of the answer */
  id: number;
  /* Title of the answer */
  title: string;
};
export interface Question {
  /* Unique id of the question */
  id: number;
  /* The title of the question */
  title: string;
  /* question List */

  answers: Array<Answer>;
}

export type Questions = Question[];
