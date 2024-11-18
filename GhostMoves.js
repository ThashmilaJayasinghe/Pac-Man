import { DIRECTIONS, OBJECT_TYPE } from "./setup";

// Random Movement

export function randomMovement(position, direction, objectExist){
    let dir = direction;
    let nextMovePos = position + dir.movement;
    // create an array from the directionsobject keys
    const keys = Object.keys(DIRECTIONS);

    while (
        objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
        objectExist(nextMovePos, OBJECT_TYPE.GHOST)
      ) {
        // Get a random key from that array
        const key = keys[Math.floor(Math.random() * keys.length)];
        // Set the new direction
        dir = DIRECTIONS[key];
        // Set the next move
        nextMovePos = position + dir.movement;
      }
    
      return { nextMovePos, direction: dir };
    }