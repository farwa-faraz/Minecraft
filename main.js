canvas = new fabric.Canvas("myCanvas");

player_x = 5;
player_y = 5;

width_of_block = 30;
height_of_block = 30;

player_object = "";
block_object = "";

function player_image()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
        
    })
}

function block_image(get_img)
{
    fabric.Image.fromURL(get_img, function(Img) {
        block_object = Img;

        block_object.scaleToWidth(width_of_block);
        block_object.scaleToHeight(height_of_block);
        block_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_object);
    }) 
}

window.addEventListener("keydown", keydown);

function keydown(e)
{
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80')
    {
        height_of_block = height_of_block + 10;
        width_of_block = width_of_block + 10;
        
        document.getElementById("width").innerHTML = width_of_block;
        document.getElementById("height").innerHTML = height_of_block;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        height_of_block = height_of_block - 10;
        width_of_block = width_of_block - 10;
        
        document.getElementById("width").innerHTML = width_of_block;
        document.getElementById("height").innerHTML = height_of_block;
    }

    if(keyPressed == "37")
    {
        left()
    }

    if(keyPressed == "38")
    {
        up()
    }

    if(keyPressed == "39")
    {
        right()
    }

    if(keyPressed == "40")
    {
        down()
    }

    if(keyPressed == '67')
    {
        block_image("cloud.jpg")
        console.log("c")
    }

    if(keyPressed == '68')
    {
        block_image("dark_green.png")
        console.log("d")
    }

    if(keyPressed == '71')
    {
        block_image("ground.png")
        console.log("g")
    }

    if(keyPressed == '76')
    {
        block_image("light_green.png")
        console.log("l")
    }

    if(keyPressed == '82')
    {
        block_image("roof.jpg")
        console.log("r")
    }

    if(keyPressed == '84')
    {
        block_image("trunk.jpg")
        console.log("t")
    }

    if(keyPressed == '85')
    {
        block_image("unique.png")
        console.log("u")
    }

    if(keyPressed == '87')
    {
        block_image("wall.jpg")
        console.log("w")
    }

    if(keyPressed == '89')
    {
        block_image("yellow_wall.png")
        console.log("y")
    }
}

function left() 
{
    if(player_x >0)
    {
        player_x = player_x - width_of_block;
        canvas.remove(player_object)
        player_image()
    }
}

function up()
{
    if(player_y >0)
    {
        player_y = player_y - height_of_block;
        canvas.remove(player_object)
        player_image()
    }
}

function right() 
{
    if(player_x <850)
    {
        player_x = player_x + width_of_block;
        canvas.remove(player_object)
        player_image()
    }
}

function down() 
{
    if(player_y <460)
    {
        player_y = player_y + height_of_block;
        canvas.remove(player_object)
        player_image()
    }
}

