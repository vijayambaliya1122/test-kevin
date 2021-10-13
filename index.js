const fs = require('fs');
let data = require('./input.json')
class Fruit {
    constructor(basketId) {
        this.json = data
        this.basketId = basketId;
    }
    getFruits() {
        let finalRes1 = []
        let finalRes = {}
        finalRes["id"] = this.basketId;
        let data = this.json.find(e => e.id == this.basketId)
        finalRes["total_fruits"] = data && data.contents && data.contents.length
        finalRes["total_weight"] = data.contents.reduce((acc, curVal) => acc + parseFloat(curVal.weight), 0);
        finalRes["fruit_counts"] = []
        let groupeData = this.groupBy(data.contents, "type")
        for (let key of Object.keys(groupeData)) {
            let myFruitObj = {}
            myFruitObj['type'] = key;
            myFruitObj['count'] = groupeData[key].length
            finalRes["fruit_counts"].push(myFruitObj)
        }
        finalRes1.push(finalRes)
        return finalRes1
    }

    groupBy(arr, criteria) {
        const newObj = arr.reduce(function (acc, currentValue) {
            if (!acc[currentValue[criteria]]) {
                acc[currentValue[criteria]] = [];
            }
            acc[currentValue[criteria]].push(currentValue);
            return acc;
        }, {});
        return newObj;
    }
}

class FruitBasket extends Fruit {
    constructor(basketId) {
        super(basketId);
    }
}


let Fruitdata = new FruitBasket('1ceb8c95-736f-4da3-86d9-86d55893b38a');
let getData = Fruitdata.getFruits()

fs.writeFileSync("output.json", JSON.stringify(getData))