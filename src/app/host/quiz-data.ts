import { v4 as uuid } from 'uuid';
import { INewOption, INewQuestion, INewQuiz } from './host.model';

export const newOption = (id: string): INewOption => {
  return {
    id,
    optionText: '',
    optionImageUrl: '',
    status: false,
  };
};

export const newQuestion = (id: string): INewQuestion => {
  return {
    id,
    type: 'text',
    questionText: '',
    questionImageUrl: '',
    timer: 5,
    points: 500,
    isModified: false,
    options: {
      type: 'text',
      optionList: [
        newOption(uuid())
      ]
    }
  };
};

export const newQuiz = (id: string): INewQuiz => {
  return {
    id,
    name: '',
    description: '',
    questions: [
      newQuestion(uuid())
    ]
  };
};
