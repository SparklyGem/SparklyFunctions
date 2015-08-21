var sparklyFunctions = {
  // Determines if a number is within a certain distance from another number (currently not working)
  aboutTheSame: function(num1, num2, maxDistance) {
    return Math.abs(num1 - num2) <= maxDistance;
  },
  // Determines if a number is in a certain range
  inRange: function(num, minNum, maxNum) {
    return num >= minNum && num <= maxNum;
  },    
  // Determines if a number is an integer
  isInt: function(num) {
    return num % 1 === 0;  
  },    
  // Determines if a number is even
  isEven: function(num) {
    return (num & 1) === 0;  
  },    
  // Determines if a number is odd
  isOdd: function(num) {
    return (num & 1) === 1;
  }, 
  // Rounds number to nearest [whatever number you want]
  roundToNearestX: function(num, numThatWeWillRoundToTheNearestOf) {
    return Math.round(num/numThatWeWillRoundToTheNearestOf) * numThatWeWillRoundToTheNearestOf;
  },  
  // Makes a button with a value (text, an image, or any HTML element), gives it an event listener, and, optionally, give it an id
  button: function(value, event, id) {
    var btn = document.createElement("button");
    btn.innerHTML = value;
    btn.addEventListener("click", event);
    btn.id = id;
    document.body.appendChild(btn);
  },
  // Make a background of an image (currently not working)
  backgroundImg: function(source) {
    document.body.style.backgroundImage = "url(" + source + ")";
    document.body.style.backgroundPosition = "center center";
    document.body.style.beckgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  },
  // Play a sound file (currently not working)
  sound: function(source) {
    var audio = document.createElement("audio");
    audio.src = source;
    audio.autoplay = "autoplay";
    document.body.appendChild(audio);
  }
};
