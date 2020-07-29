controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tree = sprites.create(img`
        . . . . . . c c c c 6 . . . . . 
        . . . . c c 6 7 7 5 5 6 6 . . . 
        . . c c 6 6 6 6 7 5 5 7 c c . . 
        . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
        . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
        c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
        c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
        . c c 6 6 6 6 c 6 6 6 6 6 c c c 
        . c c 6 6 c 6 6 c 6 c 6 6 c c . 
        . . c c f f 6 6 c f f c c f . . 
        . . . . c f c c c f c f f . . . 
        `, SpriteKind.Player)
    tree.setPosition(mySprite.x, mySprite.y)
})
let tree: Sprite = null
let mySprite: Sprite = null
game.splash("Adam and Eve", "survival")
if (game.ask("do you want to be Adam?")) {
    mySprite = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f 6 6 6 6 6 6 f e f 
        e 4 f 6 6 6 6 6 6 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
} else {
    mySprite = sprites.create(img`
        . . . . c c c c c c c c . . . . 
        . . . c c c c c c c c c c . . . 
        . . c c c c c c c c c c c c . . 
        . . c c c c c c c c c c c c . . 
        . c c c c c c 4 4 c c c c c c . 
        c c f f c c 4 4 4 4 c c f f c c 
        c c f f f b f 4 4 f b f f f c c 
        c c f f 4 1 f d d f 1 4 f f c c 
        c c . f f d d d d d d f f . c c 
        c . . e f e 4 4 4 4 e f e . . c 
        c . e 4 f b 3 3 3 3 b f 4 e . c 
        c . 4 d f 3 3 3 3 3 3 c d 4 . c 
        c . 4 4 f 6 6 6 6 6 6 f 4 4 . c 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
}
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
