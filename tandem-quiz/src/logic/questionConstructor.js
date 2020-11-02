// this deconstructs the incoming object and inserts the correct answer into the array of answers

import { shuffle } from './shuffle';

export function questionConstructor(obj){
    const tempQuestion = obj.question;
    const tempAnswers = obj.incorrect;
    const tempCorrect = obj.correct;

    function arrangedQuestion(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct; 
    }

    tempAnswers.push(tempCorrect);

    //shuffles the new complete answer array so that if you take the quiz again, the answer is unlikely to be in the same spot
    shuffle(tempAnswers);
    const newQuestion = new arrangedQuestion(tempQuestion, tempAnswers, tempCorrect)

    return(newQuestion);
}