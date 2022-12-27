// Creating array of songs with the details
let songs=[{id:"0",src:"./music/don't you worry child.mp3",isrc:"./images/don't you worry child.jpg",desc:"Don't you worry child"},{id:"1",src:"./music/i need your love.mp3",isrc:"./images/i need your love.jpg",desc:"I need your love"}
,{id:"2",src:"./music/vente paca.mp3",isrc:"./images/vente paca.jpg",desc:"Vente Paca"},{id:"3",src:"./music/blame.mp3",isrc:"./images/blame.jpg",desc:"Blame"},{id:"4",src:"./music/wavin flag.mp3",isrc:"./images/wavin flag.jpg",desc:"Wavin Flag"}
,{id:"5",src:"./music/dekha hazaro dafa.mp3",isrc:"./images/dekha hazaro dafa.jpg",desc:"Dekha Hazaro Dafa"},{id:"6",src:"./music/bapu-zimmedar.mp3",isrc:"./images/bapu zimedar.jpg",desc:"Bapu Zimmedar"},{id:"7",src:"./music/kahani.mp3",isrc:"./images/kahani.jpg",desc:"Kahaniyan"},
{id:"8",src:"./music/mitwa.mp3",isrc:"./images/mitwa.jpg",desc:"Mitwa"},{id:"9",src:"./music/tere naina.mp3",isrc:"./images/tere naina.jpg",desc:"Tere Naina"}];
// Song array ended
let audioelement=document.getElementById("myaudio");
let previous=document.getElementById("previous");
let next=document.getElementById("next");
let c=0;
let current_id;
let song_image=document.getElementById("song-image");
let pause_class="fa-solid fa-pause"
let play_class="fa-solid fa-play"
let before_id=null;

// Visualizer variable
let audioContext;
let analyser;
let source;
let start=document.getElementById("start");
let canvas1=document.getElementById("canvas1");
canvas1.width=900;
canvas1.height=600;
let canvasCtx=canvas1.getContext("2d")

// AudioContext initialised by user activity as it is now necessary
start.addEventListener("click",()=>{
    audioContext=new AudioContext();
})
// Adding functions to next button
next.addEventListener("click",()=>{
    if(c<9)
    {
    before_id=c.toString();   
    c++;
    }
    current_id=c.toString();
    song_image.src=songs[current_id].isrc;
    audioelement.src=songs[current_id].src;
    change_symbol();
})

// Adding functions to previous button
previous.addEventListener("click",()=>{
    if(c>0)
    {
    before_id=c.toString();    
    c--;
    }
    current_id=c.toString();
    song_image.src=songs[current_id].isrc;
    audioelement.src=songs[current_id].src;
    change_symbol();
})

//Adding functions to play button og playlist section
let buttons=Array.from(document.getElementsByClassName("playlist-play"));
buttons.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(before_id==null)
      {
         before_id=item.id;
        current_id=item.id;
      }
    else
    {
        before_id=current_id;
        current_id=item.id;
    }
    c=parseInt(current_id);
    change_symbol();
    })
})

//Function to play song and visualize
function play_song()
{
  console.log(canvas1.width)
  audioelement.play();
  source =audioContext.createMediaElementSource(audioelement);
  analyser=audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination)
  analyser.fftSize =512;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const barWidth = (canvas1.width / bufferLength);
  console.log(bufferLength);
  let barHeight;
  let x;
 function draw()
 {   
     x=0;
     canvasCtx.clearRect(0, 0, canvas1.width,canvas1.height);
     analyser.getByteFrequencyData(dataArray);
     for (let i = 0; i < bufferLength; i++) {
         barHeight = dataArray[i]*2;
         canvasCtx.fillStyle = `#FFAC1C`;
         if(barHeight===0)
         barHeight=25;
         canvasCtx.fillRect(x,canvas1.height - barHeight, barWidth, barHeight);
         x += barWidth + 1;
       }
       requestAnimationFrame(draw);
 }
 draw()
}

function pausesong()
{
    audioelement.pause();
}

const repeat=()=>setInterval(()=>{
    if(audioelement.paused===true)
    document.getElementById(current_id).children[0].className=play_class;
    else 
    document.getElementById(current_id).children[0].className=pause_class;
},1000)
//Function to change symbols at various places
function change_symbol()
{   
    repeat()
    if(parseInt(current_id)==0)
    previous.disabled=true;
    else
    previous.disabled=false;

    if(parseInt(current_id)==9)
    next.disabled=true;
    else
    next.disabled=false;
    
    document.getElementById("details").innerText=songs[current_id].desc;
    song_image.src=songs[current_id].isrc;
    audioelement.src=songs[current_id].src;
    if(document.getElementById(current_id).children[0].className===play_class)
    {
    if(before_id!=null)
    document.getElementById(before_id).children[0].className=play_class;    
    document.getElementById(current_id).children[0].className=pause_class;
    play_song();
    }
    else
    {
    if(before_id!=null)
    document.getElementById(before_id).children[0].className=pause_class;    
    document.getElementById(current_id).children[0].className=play_class;
    pausesong();
    }
}