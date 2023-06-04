import {createEntityAdapter} from '@reduxjs/toolkit';

import {Question} from '~/api/types';

export default createEntityAdapter<Question>({
  selectId: question => question.id,
  sortComparer: (a, b) => a.id - b.id,
});
