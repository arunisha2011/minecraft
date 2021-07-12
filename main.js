var canvas=new fabric.Canvas("canvas")
var block_width=30
var block_height=30
var player_x=10
var player_y=10
var player_object=""
var block_object=""
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(150)
    player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object)
})
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode
    console.log(keypress)
    if (keypress=="80" && e.shiftKey==true){
        console.log("p and shift are pressed together")
        block_width=block_width+10
        block_height=block_height+10
        document.getElementById("current_width").innerHTML=block_width
        document.getElementById("current_height").innerHTML=block_height
    }
    if (keypress=="77" && e.shiftKey==true){
        console.log("m and shift are pressed together")
        block_width=block_width-10
        block_height=block_height-10
        document.getElementById("current_width").innerHTML=block_width
        document.getElementById("current_height").innerHTML=block_height
    }
    if (keypress=="38"){
        console.log("up")
        up()
    }
    if (keypress=="40"){
        console.log("down")
        down()
    }
    if (keypress=="37"){
        console.log("left")
        left()
    }
    if (keypress=="39"){
        console.log("right")
        right()
    }
    if (keypress=="87"){
        console.log("w")
        new_image('wall.jpg')
    }
    if (keypress=="71"){
        console.log("g")
        new_image("ground.png")
    }
    if (keypress=="76"){
        console.log("l")
        new_image("light_green.png")
    }
    if (keypress=="84"){
        console.log("t")
        new_image("trunk.jpg")
    }
    if (keypress=="82"){
        console.log("r")
        new_image("roof.jpg")
    }
    if (keypress=="89"){
        console.log("y")
        new_image("yellow_wall.png")
    }
    if (keypress=="68"){
        console.log("d")
        new_image("dark_green.png")
    }
    if (keypress=="85"){
        console.log("u")
        new_image("unique.png")
    }
    if (keypress=="67"){
        console.log("c")
        new_image("cloud.jpg")
    }
}
function up(){
if (player_y>=0){
    player_y=player_y-block_height
    canvas.remove(player_object)
    player_update()
}
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_height
        canvas.remove(player_object)
        player_update()
    }
}
function left(){
    if (player_x>=0){
player_x=player_x-block_width
canvas.remove(player_object)
player_update()
    }
}
function right(){
    if (player_x<=1000){
        player_x=player_x+block_width
        canvas.remove(player_object)
        player_update()
    }
}
