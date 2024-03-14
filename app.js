const box = document.querySelectorAll(".box");
const btn = document.querySelector("#btn");
const nav2 = document.querySelector(".nav2");
const playBtn = document.querySelector("#apple");

let video;


function change1() {

    let x = document.getElementById("nav2");
    x === "none";
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

    // document.getElementById("box1").style.display.hidden;
    
    // document.getElementById("bd").style.backgroundImage="url(video1.mp4)";

   

    // let videoUrl = 'video1.mp4';

    //  // Create video element
    //  let video = document.createElement('video');
    //  video.src = videoUrl;
    //  video.autoplay = true;
    //  video.loop = true;
    //  video.muted = true;
    //  video.overflow = true;
    //  video.style.display = "center";

    //  video.style.display = 'block';
    //  video.play();
  
 
    //  // Set video as background
    //  document.body.style.background = 'transparent'; 
    // //  document.body.style.overflow = 'hidden'; 
    //  document.body.appendChild(video);

   
}

// playBtn.addEventListener('click', function() {
//     video.style.display = 'block';
//     video.play();
//   });






function change2() {
    let x = document.getElementById("nav2");
    x === "none";
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

    // document.getElementById("box1").style.display.hidden;
    
    document.getElementById("bd").style.backgroundImage="url(video1.mp4)";





    let videoUrl = 'video1.mp4';

     // Create video element
     let video = document.createElement('video');
     video.src = videoUrl;
     video.autoplay = true;
     video.loop = true;
     video.muted = true;
     video.overflow = true;
     video.style.display = "center";
 
     // Set video as background
     document.body.style.background = 'transparent'; // Clear existing background
    //  document.body.style.overflow = 'hidden'; // Hide scroll bars
     document.body.appendChild(video);

      
      
}




function change3() {
    let x = document.getElementById("nav2");
    x === "none";
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

    // document.getElementById("box1").style.display.hidden;
    
    document.getElementById("bd").style.backgroundImage="url(video1.mp4)";





    let videoUrl = 'DS.mp4';

     // Create video element
     let video = document.createElement('video');
     video.src = videoUrl;
     video.autoplay = true;
     video.loop = true;
     video.muted = true;
     video.overflow = true;
    
 
     // Set video as background
     document.body.style.background = 'transparent'; // Clear existing background
    //  document.body.style.overflow = 'hidden'; // Hide scroll bars
     document.body.appendChild(video);


      
      
}

function change4() {
    let x = document.getElementById("nav2");
    x === "none";
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

    // document.getElementById("box1").style.display.hidden;
    
    document.getElementById("bd").style.backgroundImage="url(video1.mp4)";





    let videoUrl = 'video1.mp4';

     // Create video element
     let video = document.createElement('video');
     video.src = videoUrl;
     video.autoplay = true;
     video.loop = true;
     video.muted = true;
     video.overflow = true;
     
     video.style.display = "relative";


    //  video.addEventListener("canplay", function () {
    //     video.play();
    // });

    // // Add event listener to pause the video when it ends
    // video.addEventListener("ended", function () {
    //     video.pause();
    // });

 
     // Set video as background
     document.body.style.background = 'transparent'; // Clear existing background
    //  document.body.style.overflow = 'hidden'; // Hide scroll bars
     document.body.appendChild(video);    
      
}

// btn.addEventListener('click', function() {
//     video.style.display = 'none';
//     video.pause();
// });



function show() {


    // let originalBackground = document.body.style.backgroundImage="url(bg-img-learn.jpg)";


    document.getElementById('nav2').style.display="flex"
    nav2.classList.add("body");
    // document.body.style.backgroundImage = originalBackground;

    // document.getElementById("btn").disabled = true;
  
    
    
    
}















