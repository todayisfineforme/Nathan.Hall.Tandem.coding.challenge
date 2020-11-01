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

    console.log("pre");
    tempAnswers.push(tempCorrect);
    console.log("post")
    console.log(tempAnswers)
    shuffle(tempAnswers);
    const newQuestion = new arrangedQuestion(tempQuestion, tempAnswers, tempCorrect)

    return(newQuestion);
}