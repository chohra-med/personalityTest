import { Questions} from 'api/types';
import {questionList} from '../dataMocks';

class QuestionApi {
  /*get the list of the questions */
  loadAllQuestions(): Questions {
    /* in case of an API call, we use it here*/
    return questionList;
  }
}
export default new QuestionApi();
