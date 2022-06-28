// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")

// lab goal: implement liking functionality
document.addEventListener("DOMContentLoaded", () => {
 // 1. Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
  errorModal.classList.add("hidden")
  clickListener()
})

function hideError() {
  errorModal.classList.add("hidden")
}

function findLikes() {
  const likeArr = document.querySelectorAll(".like-glyph")

  likeArr.forEach((singularLike) => {
    singularLike.addEventListener("click", () =>
    console.log("yay"))
  })
}

// #1 When a user clicks on an empty heart:
function clickListener(){
  document.addEventListener("click", (event) => {
    // -- Invoke mimicServerCall tosimulate making a server request
    if(event.target.classList[0] === 'like-glyph'){  
      mimicServerCall()
        .then(response => {
          const activated = event.target.classList.contains("activated-heart")
          activated 
            ? event.target.classList.remove("activated-heart")
            : event.target.classList.add("activated-heart")
        })
        // #2 When the "server" returns a failure status:
        //  -- Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
        .catch(error => {
          // -- Display the error modal by removing the .hidden class
          errorModal.classList.remove("hidden")
          // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
          setTimeout( () => { 
            hideError()
            }, 3000)
            })
      }
  })
}











//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
