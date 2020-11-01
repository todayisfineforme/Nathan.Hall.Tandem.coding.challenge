import { shuffle } from './shuffle';
import { questionConstructor } from './questionConstructor';

export function roundConstructor(questions){
    const roundTemp = []
    shuffle(questions);
    for(let i=0; i < 10; i++){
        roundTemp.push(questionConstructor(questions[i]));
    };
    questions = roundTemp
    return(questions);
}