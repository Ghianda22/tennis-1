/** TEST LIST
 *  [-] When a player who won less than three points wins a point, the score should be updated
 *  [-] Given a player with a score of 40, if they win the next point and have a lead of at least two points, they should win the game
 *  [-] Given a game with at least three points scored by each player, when the scores are equal the game score should be "deuce"
 *  [-] Given a game in deuce, when a player win a point the game score should be "advantage" for that player
 *  [-] Given a game score of "advantage", if the player with advantage wins the next point they should win the game
 *  [-] Given a game score of "advantage", if the player without advantage wins the next point, game score should be back at "deuce"
 *  [-]
 * */

import {Score} from "../src/Score";
import Player from "../src/Player";

describe('When a player who won less than three points wins a point, the score should be updated', () => {
    it.each([
        ["Love","15"],
        ["15","30"],
        ["30","40"]
    ])('When the previous score is %s, new score should be %s', (prevScore: Score, expectedNewScore: Score) => {
        //given
        const player: Player = new Player(prevScore);

        //when
        player.winPoint();
        const actualNewScore: Score = player.score;

        //then
        expect(actualNewScore).toBe(expectedNewScore);
    })
})