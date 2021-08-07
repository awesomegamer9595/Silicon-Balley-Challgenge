var Background1, BackgroundImage;
var car, Jake, zombie1, Jake_Image, zombieImage;
var edge, rock_image, rock, attack_animation, Jake_Attack;
var jake_jumpImage, ground, zombies, shurikens, rocks, broken_rock, broken_rockImage;
var shuriken, shurikenImage;
var life, life_image, meteors, meteor, meteorImage;
var deadZombieImage, deadzom, ammo, ammo_image, BOOM;
var shurikenAmmo = 20;
var isTouching = false
life = 3
var x = 0;
var levelState = "one"
var levelUp;

//var sound, SoundON, soundOFF, soundState;
var gameState = "start"
var titleScreen, titleButton, title, input;
var lifeDeducted = false;
var score = 0;
var sound, rocK, backGround;
function preload() {
    BackgroundImage = loadImage("level_One.gif.2.gif")
    Jake_Image = loadAnimation("ninja/Run_000.png", "ninja/Run_001.png", "ninja/Run_002.png", "ninja/Run_003.png", "ninja/Run_004.png", "ninja/Run_005.png", "ninja/Run_006.png", "ninja/Run_007.png", "ninja/Run_008.png", "ninja/Run_009.png")
    zombieImage = loadAnimation("zombie/Walk (1).png", "zombie/Walk (2).png", "zombie/Walk (3).png",
        "zombie/Walk (4).png", "zombie/Walk (5).png", "zombie/Walk (6).png", "zombie/Walk (7).png",
        "zombie/Walk (8).png")

    shurikenImage = loadImage("shuriken1.png")
    rock_image = loadImage("rock.png")
    jake_jumpImage = loadAnimation("ninja/Jump_000.png", "ninja/Jump_000.png", "ninja/Jump_001.png", "ninja/Jump_001.png", "ninja/Jump_002.png", "ninja/Jump_003.png", "ninja/Jump_004.png", "ninja/Jump_005.png", "ninja/Jump_006.png", "ninja/Jump_006.png", "ninja/Jump_007.png", "ninja/Jump_007.png", "ninja/Jump_008.png")
    attack_animation = loadAnimation("ninja/Throw__000.png", "ninja/Throw__000.png", "ninja/Throw__001.png", "ninja/Throw__003.png", "ninja/Throw__003.png", "ninja/Throw__004.png", "ninja/Throw__005.png", "ninja/Throw__006.png", "ninja/Throw__007.png", "ninja/Throw__007.png", "ninja/Throw__008.png", "ninja/Throw__009.png", "ninja/Throw__009.png")
    life_image = loadImage("heart1.png")
    deadZombieImage = loadAnimation("zombie/Dead1.png", "zombie/dead2.png", "zombie/dead3.png", "zombie/dead4.png", "zombie/dead5.png", "zombie/dead6.png", "zombie/dead6.png", "zombie/dead7.png", "zombie/dead7.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png", "zombie/dead8.png")
    broken_rockImage = loadImage("broken.png")
    broken_rockImage.scale = 0.5
    title = loadImage("title.jpg")
    "title.jpg".scale = 1.45
    sound = loadSound("hit.wav")
    rocK = loadSound("rock.wav")
    backGround = loadSound("background.mp3")
    meteorImage = loadImage("Meteor1.png")
    BOOM = loadSound("explosion.wav")
    levelUp = loadSound("LevelUp.wav")
}


function setup() {
    createCanvas(1000, 455)

    Background1 = createSprite(0, 225, 1000, 680)

    ground = createSprite(500, 454, 1000, 1)

    Jake = createSprite(400, 400, 10, 40)
    Jake.addAnimation("Jake_Image", Jake_Image)
    Jake.addAnimation("jake_jumpImage", jake_jumpImage)
    Jake.addAnimation("attack_animation", attack_animation)
    Jake.scale = 0.28;
    zombies = createGroup()
    shurikens = createGroup();
    rocks = createGroup();
    ammos = createGroup();
    meteors = createGroup();

    if (gameState === "start") {

        titleButton = createImg("Play.png");

         titleButton.size(200, 100)
        titleButton.position(803, 253)

        titleButton.mousePressed(function () {
            gameState = "play"
            Sound();
        })
    }




}
function draw() {
    background(title)

    if (gameState === "play") {
        titleButton.hide();
        //    Background1.x = Background1.width / 2
        Background1.addImage(BackgroundImage)
        console.log(levelState)
        switch (score) {
            case x = 60:
                levelState = "two"
                    ;
                break
            case x = 120:
                levelState = "three"



                break
            default: level = ""


        }


        Background1.velocityX = -2
        if (Background1.x < 0) {
            Background1.x = Background1.width / 2

        }


        if (Jake.velocityY === 0 || Jake.velocityY === 0.4) {
            Jake.changeAnimation("Jake_Image", Jake_Image)
            Jake.velocityX = 0
        }
        for (var i = 0; i < shurikens.length; i++) {

            for (var j = 0; j < zombies.length; j++) {
                if (shurikens[i] !== undefined && zombies[j] !== undefined) {

                    if (shurikens[i].isTouching(zombies[j]) && shurikens[i].x < width) {

                        shurikens[i].destroy();
                        i--
                        zombies[j].changeAnimation("deadZombieImage", deadZombieImage)
                        zombies[j].lifetime = 1;
                        j--
                        score = score + 15
                        sound.play()

                        //  setTimeout(function(){
                        //      zombies[j].destroy()
                        //  },2000);

                    }
                }
            }



        }


        for (var s = 0; s < shurikens.length; s++) {

            for (var r = 0; r < rocks.length; r++) {
                if (shurikens[s] !== undefined && rocks[r] !== undefined) {

                    if (shurikens[s].isTouching(rocks[r]) && shurikens[s].x < width) {

                        shurikens[s].destroy();
                        s--
                        rocks[r].addImage(broken_rockImage)
                        rocks[r].lifetime = 5;

                        rocK.play();
                        //  setTimeout(function(){
                        //      zombies[j].destroy()
                        //  },2000);
                        r--
                    }
                }
            }

        }



        // for (var m = 0; i < meteors.length; m++) {

        //     for (var j = 0; j < zombies.length; j++) {
        //         if (meteors[m] !== undefined && zombies[j] !== undefined) {

        //             if (meteors[m].isTouching(zombies[j]) &&  meteors[m].x <width) {

        //                 meteors[m].destroy();
        //               m--
        //                 zombies[j].changeAnimation("deadZombieImage", deadZombieImage)
        //                 zombies[j].lifetime = 1;






        //             }
        //         }
        //     }
        // }
        if (Jake.isTouching(ammos)) {
            shurikenAmmo = shurikenAmmo + 20
            ammos.destroyEach();
        }
        if (ground.x < 0) {
            ground.x = ground.x.width / 2
        }
        ground.visible = false
        if (keyDown(RIGHT_ARROW)) {
            Jake.x = Jake.x + 10

        }
        else if (keyDown(LEFT_ARROW)) {
            Jake.x = Jake
                .x - 10

        }

        else if (keyDown(DOWN_ARROW)) {
            Jake.y = Jake.y + 20

        }

        else if (keyDown("space") & Jake.y > 360) {
            Jake.velocityY = -9
            Jake.changeAnimation("jake_jumpImage", jake_jumpImage)
            Jake.velocityX = 1
        }
        else if (keyWentDown("g")) {
            Attack();

        }




        Jake.velocityY = Jake.velocityY + 0.4
        Jake.collide(ground)

        Asteroid();
        spawnZombie();
        spawnRock();
        Ammo()


        if (zombies.isTouching(Jake) || rocks.isTouching(Jake)) {
            if (life > 0 && lifeDeducted === false) {
                life--
                lifeDeducted = true;
                Jake.velocityX = 0;
                Background1.velocityX = 0;
                zombies.setVelocityXEach(0);
                rocks.setVelocityXEach(0);
                meteors.setVelocityYEach(0)
                gameState = "pause"
                gameOver();
            }
        }

        if (meteors.isTouching(Jake)) {
            if (life > 0 && lifeDeducted === false) {
                life--
                lifeDeducted = true;
                Jake.velocityX = 0;
                BOOM.play();
                Background1.velocityX = 0;
                zombies.setVelocityXEach(0);
                rocks.setVelocityXEach(0);
                meteors.setVelocityYEach(0)
                gameState = "pause"
                gameOver();

            }
        }
        drawSprites();
        textSize(20)
        fill("white")



        for (var h = 1; h <= life; h++) {
            x = 50 * h;
            image(life_image, x, 50, 40, 40)



        }
        fill("white")
        textSize(29)
        console.log(score)
        text("score: " + score, 500, 60)
        text("Shurikens:" + shurikenAmmo, 250, 60)
 
    }
}

function spawnZombie() {

    if (frameCount % 150 === 0 && gameState === "play") {
        zombie1 = createSprite(1100, 400, 40, 40)
        zombie1.velocityX = -(4 + score / 150)
        zombie1.collide(ground)
        zombie1.addAnimation("ZOMBIE", zombieImage)
        zombie1.addAnimation("deadZombieImage", deadZombieImage)

        deadZombieImage.scale = 1.2

        zombie1.setCollider("circle", 0, 0, 24)
        zombie1.scale = 0.25;
        zombies.add(zombie1)
    }



}
function spawnRock() {
    if (frameCount % 200 === 0 && gameState === "play") {
        rock = createSprite(1100, 430, 40, 40)
        rock.velocityX = -(3 + score / 200)
        rock.addImage(rock_image)
        rock.scale = 0.45
        rock.collide(ground)

        rock.setCollider("circle", 0, 0, 44)
        rock.scale = 0.75;
        rocks.add(rock)


    }
}

function Asteroid() {

    if (frameCount % 250 === 0 && gameState === "play" && levelState === "two" || frameCount % 140 === 0 && gameState === "play" && levelState === "three") {
        meteor = createSprite(Math.round(random(0, 1000)), 200, 10, 10)
        meteor.addImage(meteorImage)

        meteor.velocityY = (2 + score / 200)

        meteor.setCollider("circle", -6, 50, 70)
        meteors.add(meteor)
    }

}
function Attack() {
    if (shurikenAmmo > 0 && gameState === "play") {
        Jake.velocityX = 0;
        shuriken = createSprite(Jake.x, Jake.y, 10, 10)
        shuriken.velocityX = 2;

        shuriken.addImage(shurikenImage)

        shuriken.scale = 0.10
        Jake.changeAnimation("attack_animation", attack_animation)
        shurikenAmmo--
        shurikens.add(shuriken)
    }
}

function Ammo() {
    if (frameCount % 200 === 0 && gameState === "play") {
        ammo = createSprite(Math.round(random(200, 800)), 400, 10, 10)
        ammo.addImage(shurikenImage)
        ammo.lifetime = 180
        ammo.scale = 0.15
        ammo.velocityY = -2;

        ammo.setCollider("circle", 0, 0, 24)
        ammos.add(ammo)
    }

}
function gameOver() {

    console.log(life)
    if (life > 0 && Jake.isTouching(rocks)) {
        titleText = "Oh No a rock hit you";
        mainText = "This is your dead sensei speaking!You are a ninja, how did you get killed by a rock you fool! I'm going to send you back, and you better not die to some rock!!!!  ";
        confirmText = "Continue Playing"
    }
    else if (life > 0 && Jake.isTouching(meteors)) {
        titleText = "Oh No You got hit by a meteor";
        mainText = "This is your dead sensei spe... AHHH. What happened to your face?Oh ya, you got hit in a face by a falling asteroid.Ouch. Jeez you almost made me pee my pants! I'm sending you back and please don't get hit by it again. In heaven you only get one pair of pants.  ";
        confirmText = "Continue Playing"
    }

    else if (life > 0) {
        titleText = "Oh Oh! Zombie got you!";
        mainText = "Heres a tip, press g to shoot a shuriken.Also I know you can't really take a shower in a zombie Apocalypse, but boy you stink!";
        confirmText = "Continue Playing"
    }

    else {
        titleText = "Game Over";
        mainText = "Thanks for playing also this is your dead sensei speaking, you have to options now. Press game over and be a warrior, or close the game and be a coward. Personally, the coward option is a lot more comfy,just saying. Also please remember to like and and comment on this game.";
        confirmText = "Play Again at your own risk"
    }
    swal(
        {
            title: titleText,
            text: mainText,
            imageUrl:
                "heart1.png",
            imageSize: "150x150",
            confirmButtonText: confirmText
        },
        function (isConfirm) {
            if (isConfirm && life === 0) {
                location.reload();
            }
            else if (isConfirm) {

                Jake.x = 400;

                Jake.changeAnimation("jake_jumpImage", jake_jumpImage)
                lifeDeducted = false;
                Background1.velocityX = -2;
                rocks.destroyEach();
                zombies.destroyEach();
                meteors.destroyEach();
                Jake.velocityX = 1
                gameState = "play"
            }
        }
    );
}

function Sound() {
    backGround.play();
}