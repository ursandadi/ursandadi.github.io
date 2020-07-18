function AddTwoNumbers()
{
  document.getElementById("answer").innerHTML = "";

  var first = document.getElementById("number1").value;
  var second = document.getElementById("number2").value;
  
  document.getElementById("answer").innerHTML = Number(first) + Number(second);
}

function ClearAnswer()
{
  document.getElementById("answer").innerHTML = "";
}

function SwitchImage() {
  var img = document.getElementById("starwars");
  if (img.src.includes("d-o-main")) {
    img.src = "https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496&width=768";
  } else {
    img.src = "https://lumiere-a.akamaihd.net/v1/images/d-o-main_9e3a2e61.jpeg?region=0%2C0%2C1280%2C720&width=768";
  }
}

