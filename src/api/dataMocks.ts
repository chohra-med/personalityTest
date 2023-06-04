import {Questions} from './types';


/* Here We mock all our data for testing purpose */

export const questionList: Questions = [
  {
    id: 0,
    title:
      "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      {id: 0, title: "Don't dare to interrupt them"},
      {
        id: 1,
        title:
          "Think it's more important to give them some of your time; work can wait",
      },
      {id: 2, title: 'Listen, but with only with half an ear'},
      {
        id: 3,
        title: 'Interrupt and explain that you are really busy at the moment',
      },
    ],
  },
  {
    id: 1,
    title:
      "You/'ve been sitting in the doctor/'s waiting room for more than 25 minutes. You:",
    answers: [
      {id: 0, title: 'Look at your watch every two minutes'},
      {
        id: 1,
        title: 'Bubble with inner anger, but keep quiet',
      },
      {
        id: 2,
        title:
          'Explain to other equally impatient people in the room that the doctor is always running late',
      },
      {
        id: 3,
        title: 'Complain in a loud voice, while tapping your foot impatiently',
      },
    ],
  },
  {
    id: 2,
    title:
      "You/'re having an animated discussion with a colleague regarding a project that you/'re in charge of. You:",
    answers: [
      {id: 0, title: "Don/'t dare contradict them"},
      {
        id: 1,
        title: 'Think that they are obviously right',
      },
      {id: 2, title: 'Defend your own point of view, tooth and nail'},
      {
        id: 3,
        title: 'Continuously interrupt your colleague',
      },
    ],
  },
];

export const dataMocks = {
  questionList,
};
