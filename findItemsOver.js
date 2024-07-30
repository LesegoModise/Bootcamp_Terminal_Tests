var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

export function findItemsOver(itemList, threshold) {
    var itemsOverThreshold = [];
    for (var i = 0; i < itemList.length; i++) {
      if (itemList[i].qty > threshold) {
        itemsOverThreshold.push(itemList[i]);
      }
    }
    return itemsOverThreshold;
  }
  console.log(findItemsOver(itemList, 25));
