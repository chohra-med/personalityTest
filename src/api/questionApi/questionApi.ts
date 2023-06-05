import {AnswersId, Questions} from 'api/types';
import {questionList} from '../dataMocks';

class QuestionApi {
  /*get the list of the questions */
  loadAllQuestions(): Questions {
    /* in case of an API call, we use it here*/
    return questionList;
  }
  getResult(answerListId: AnswersId): number {
    /* A small example, we calculate the result based on the */
    const nextResults = answerListId.reduce((a, b) => {
      return a + b;
    }, 3);

    return nextResults;
  }
}
export default new QuestionApi();
