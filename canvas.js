window.addEventListener("load", () => {
    console.log("hello");
    const canvas = document.querySelector("#myCanvas");
    const context = canvas.getContext("2d");

    
    const canvasOffsetX = (0.83*canvas.getBoundingClientRect().left);
    const canvasOffsetY = (1.43*canvas.getBoundingClientRect().top);
    const myWidth = (screen.width/3);
    const myHeight = (screen.height/2);

    canvas.width = myWidth;
    canvas.height = myHeight;

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        context.beginPath();
    }
    function draw(e){
        if (!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";
        context.strokeStyle = "black";


        context.lineTo(e.screenX - canvasOffsetX, e.screenY - canvasOffsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.screenX - canvasOffsetX, e.screenY - canvasOffsetY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove" , draw);
});