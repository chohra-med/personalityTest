import {Author} from 'api/types';
import {authorList} from '../dataMocks';

class AuthorApi {

  /*get the list of the authors */
  loadAllAuthors(): Author[] {
    // We do Api call here
    return authorList;
  }

}
export default new AuthorApi();

