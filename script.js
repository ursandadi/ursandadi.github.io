// Add two numbers
function AddTwoNumbers()
{
  document.getElementById("answer").innerHTML = ""; // this clears the text in the control with id="answer"

  var first = document.getElementById("number1").value; // this will get the first number -> 32
  var second = document.getElementById("number2").value; // this will get the second number -> 43
  
  document.getElementById("answer").innerHTML = Number(first) + Number(second); // this will set the answer for the control with id="answer"
}

// clear the answer
function ClearAnswer()
{
  document.getElementById("answer").innerHTML = "";
}

// every 3 seconds, call the function SwitchImage
// to run as slide show, uncomment the following line
// setInterval(SwitchImage, 3000);

function SwitchImage() 
{
  var img = document.getElementById("starwars"); // get the img control/tag
  
  // define variables to hold links for the 3 images we will show; you can replace these with your favorite three photo links
  var img1 = "https://cdn.glitch.com/855902cd-73f3-4236-8e52-e7218a77a20f%2F67628-image_5ea1d4d33f0ad.jpg?v=1594501308137";
  var img2 = "https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496&width=768";
  var img3 = "https://lumiere-a.akamaihd.net/v1/images/d-o-main_9e3a2e61.jpeg?region=0%2C0%2C1280%2C720&width=768";
  
  if (img.src.includes(img1)) 
  {
    img.src = img2; // we are currently displaying img1 -> switch to image 2
  } 
  else if (img.src.includes(img2))
  {
    img.src = img3; // we are currently displaying img2 -> switch to img3
  }
  else 
  {
    img.src = img1; // we are currently displaying img3 -> switch back to img1
  }
}
