/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
class Product {
    constructor(id, name, image) {
        this.id = id,
        this.name = name,
        this.image = image
    }
    toPOJO() {
        return {
            id: this.id,
            name: this.name,
            image: this.image
        }
    }
    toJson() {
        return JSON.stringify(this.toPOJO())
    }
}

export default Product;

