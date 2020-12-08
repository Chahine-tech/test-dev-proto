class Prof {
    constructor(name, firstname) {
            this.name = name;
            this.firstname = firstname


    }
    enseigne () {
        console.log(`${this.name} ${this.firstname} enseigne a efrei!`)
    }
}
const  prof1 = new Prof("Dylan", "De souza")
const  prof2 = new Prof("Chahine", "Benlahcen")
prof1.enseigne()