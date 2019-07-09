'use strict';

function printReceipt(inputs) {
    var items = loadAllItems();
    var items2 = [];

    var map = inputs.reduce((m, key) => m.set(key, (m.get(key) || 0) + 1), new Map()); // key:barcode -- value:number

    for(var item of items){
        for(let m of map){
            var obj = {};
            if(m[0] == item.barcode){
                obj["barcode"] = item.barcode;
                obj["name"] = item.name;
                obj["price"] = item.price.toFixed(2);
                obj["unit"] = item.unit;
                obj["number"] = m[1];
              
                items2.push(obj);
            }
        }  
    }

    var price = ""
    var sum = 0;
    for(var item of items2) {
        
        price += '\n名称：'+item["name"]+
        '，数量：'+item["number"]+item["unit"]+
        '，单价：'+item["price"]+
        '(元)，小计：'+(item["number"]*item["price"]).toFixed(2)+'(元)';

        sum += item["number"]*item["price"];
    }
   
    var result =  `***<没钱赚商店>收据***`+
    price
    +
    `\n----------------------\n总计：`+sum.toFixed(2)+`(元)\n**********************`
    console.log(result);
}  
