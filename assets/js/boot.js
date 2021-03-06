let bootState = {
    preload : function preload () {
        // Load IMAGES
        this.load.image("logo","assets/pics/upperLogo.png");
        this.load.image("white_background", "assets/pics/white.png");
        this.load.image("thanaBackground", "assets/pics/fond_thanatalys.png");
        this.load.image("zombiBackground", "assets/pics/fond_zombixel.png");
        this.load.image("zanBackground", "assets/pics/fond_zanersky.png");
        this.load.image("characBackground", "assets/pics/fond_menu.png");
        this.load.image("choose", "assets/pics/choose.png");

        // Load SPRITESHEET
        this.load.spritesheet(
            'zombixel',
            'assets/pics/zombixel_spritesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            'zanersky',
            'assets/pics/zanersky_spritesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.spritesheet(
            'thanatalys',
            'assets/pics/thanatalys_spritesheet.png',
            { frameWidth: 70, frameHeight: 70 }
        );
        this.load.spritesheet(
            "menu",
            "assets/pics/start_menu.png",
            { frameWidth: 648, frameHeight: 250 }
        );
        let cardsSpritesheet = this.load.spritesheet(
            "cards",
            "assets/pics/cards_spritesheet.png",
            { frameWidth: 64, frameHeight: 80 }
        );
        this.load.spritesheet("lifebar", "assets/pics/lifebar.png",
            { frameWidth: 100, frameHeight: 20}
        );
        this.load.spritesheet("confirmAttack", "assets/pics/cardValidator-spritesheet.png",
            {frameWidth: 60, frameHeight: 20}
        );
        this.load.spritesheet("endButton", "assets/pics/endbutton.png",
            {frameWidth: 150, frameHeight: 100}
        );
    },
    create : function create () {
        // Création des animations

        let charactersName = ['zombixel', 'zanersky', 'thanatalys'];
        let animations = [
            {
                key: 'idle',
                frames: {start: 0, end: 1},
                frameRate: 4,
                repeat: -1
            },
            {
                key: 'punch',
                frames: 2
            },
            {
                key: 'kick',
                frames: 3
            },
            {
                key: 'block',
                frames: 4
            },
            {
                key: 'damage',
                frames: 5
            }
        ];
        let lifebarState = [
            {
                key: "backLife",
                frames: 0
            },
            {
                key: "status",
                frames: 1
            }
        ];
        let confirmAttack = [
            {
                key: "buttonUp",
                frames: 0
            },
            {
                key: "buttonDown",
                frames: 1
            }
        ];
        let endButton = [
            {
                key: "loose",
                frames: 0
            },
            {
                key: "win",
                frames: 1
            }
        ];
        setupSpritesheet(this, lifebarState, ['lifebar']);
        setupSpritesheet(this, confirmAttack, ['confirmAttack']);
        setupSpritesheet(this, endButton, ['endButton']);
        setupSpritesheet(this, animations, ['zombixel', 'zanersky', 'thanatalys']);

        animations = [
            {
                key: 'left',
                frames: 0
            },
            {
                key: 'up',
                frames: 1
            },
            {
                key: 'right',
                frames: 2
            },
            {
                key: 'down',
                frames: 3
            },
            {
                key: 'punch',
                frames: 4
            },
            {
                key: 'kick',
                frames: 5
            }
        ];
        setupSpritesheet(this, animations, ['cards']);

        let backBoot = this.add.image(400,0,"white_background");
        backBoot.scaleX = 4;
        backBoot.scaleY = 4;
        let logoBoot = this.add.image(200,112,"logo");
        logoBoot.scaleX = 0.3;
        logoBoot.scaleY = 0.3;
        character = this.add.sprite(screenWidth(0.3), screenHeight(0.8), 'zombixel');
        character.displayOriginY = character.displayHeight;
        character.anims.play('zombixel-idle');
        character2 = this.add.sprite(screenWidth(0.5), screenHeight(0.8), 'zanersky');
        character2.displayOriginY = character2.displayHeight;
        character2.anims.play('zanersky-idle');
        character3 = this.add.sprite(screenWidth(0.7), screenHeight(0.8), 'thanatalys');
        character3.displayOriginY = character3.displayHeight;
        character3.anims.play('thanatalys-idle');

        // timedEvent = this.time.addEvent({delay: 5000, callback: loadMenu, callbackScope: this});
        timedEvent = this.time.addEvent({delay: 3000, callback: loadMenu, callbackScope: this});
        function loadMenu () {
            upperCards.scene.sleep("bootState");
            upperCards.scene.start("menu");
        }

    },
    update : function update () {

    }
};
