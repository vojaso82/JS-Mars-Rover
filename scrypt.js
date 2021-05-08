//Rover object goes here:
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog:[]
  }
  
  //OBSTACLE
  
  let obstacle = {
    x: Math.floor(Math.random() * 9),
    y: Math.floor(Math.random() * 9),
  }
  
  //OTHER ROVERS
  
  
  
  
  
  
  function turnLeft(rover){
    switch(rover.direction){
      case "N":
        rover.direction = "W";
        console.log(rover.direction)
        break;
      case  "W":
        rover.direction = "S";
        console.log(rover.direction)
        break;
      case "S":
        rover.direction = "E";
        console.log(rover.direction)
        break;
      default:
        rover.direction = "N"
        console.log(rover.direction)
    }
  }
  
  
  
  function turnRight(rover){
    switch(rover.direction){
      case "N":
        rover.direction = "E";
        console.log(rover.direction)
        break;
      case  "E":
        rover.direction = "S";
        console.log(rover.direction)
        break;
      case "S":
        rover.direction = "W";
        console.log(rover.direction)
        break;
      default:
        rover.direction = "N"
        console.log(rover.direction)
    }
  }
  
  //turnLeft(rover)
  //turnRight(rover)
  
  
  
  function moveForward(rover){
    if(rover.x >= 0 && rover.x < 9){
     switch(rover.direction){
      case "N":
        rover.y -= 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "S":
        rover.y += 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "E":
        rover.x += 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "W":
        rover.x -= 1;
        console.log(`${rover.x},${rover.y}`)
        break;
    }   
    let newPosition = {x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition); 
      if(rover.x === obstacle.x && rover.y === obstacle.y){
        moveBackward(rover)
        console.log('You are facing an obstacle, move rover to other direction')
      }
    } else{
      console.log("You can't place player outside of the board!");
    }
    
  } 
  
  
  
  function moveBackward(rover){
    if(rover.x >= 0 && rover.x < 9){
     switch(rover.direction){
      case "N":
        rover.y += 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "S":
        rover.y -= 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "E":
        rover.x -= 1;
        console.log(`${rover.x},${rover.y}`)
        break;
      case "W":
        rover.x += 1;
        console.log(`${rover.x},${rover.y}`)
        break;
    }   
    let newPosition = {x: rover.x, y: rover.y};
    rover.travelLog.push(newPosition);
      if(rover.x === obstacle.x && rover.y === obstacle.y){
        moveForward(rover)
        console.log('You are facing an obstacle, move rover to other direction')
      }
    } else{
      console.log("You can't place player outside of the board!");
    }
    
  } 
  
  
  function command(rover, letters){
    for(let i=0; i < letters.length; i++){
      let order = letters[i];
      switch (order) {
       case 'l':
        turnLeft(rover)
        //console.log(`Rover has position ${rover.x}, ${rover.y}`)
        break;
       case 'r':
        turnRight(rover)
        //console.log(`Rover has position ${rover.x}, ${rover.y}`) 
        break;  
       case 'f':
        moveForward(rover)
        //console.log(`Rover has position ${rover.x}, ${rover.y}`)
        break;
       case 'b':
        moveBackward(rover)
        //console.log(`Rover has position ${rover.x}, ${rover.y}`)
        default:
          console.log('This command does not exist, inputs must be f, b, r, or l')
      } 
    } console.log(`Rover has position ${rover.x}, ${rover.y}`)
    
  }
  
  
  command(rover, `rffrfflfrff`)
  
  
  
  