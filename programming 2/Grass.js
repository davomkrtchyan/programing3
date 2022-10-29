let LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8;

    }
   
    mul() {
        this.energy++;
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            this.energy = 0;
        } else {
            console.error('there is no way to multiply');
        }
    }
}