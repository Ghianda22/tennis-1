import {v4 as uuidv4} from 'uuid';
import {Score} from "./Score";
import EnumUtils from "./EnumUtils";

export default class Player {
    #_id: string = uuidv4();
    #_score: Score = Score.Love;


    constructor(score: Score) {
        this.#_score = score;
    }


    get id(): string {
        return this.#_id;
    }

    get score(): Score {
        return this.#_score;
    }

    winPoint(): void {
        this.#_score = EnumUtils.of(Score).next(this.score);
    }
}