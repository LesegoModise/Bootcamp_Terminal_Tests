var itemList3 = [
  { name: 'apples', qty: 40 },
  { name: 'pears', qty: 20 },
  { name: 'bananas', qty: 23 },
  { name: 'apples', qty: 37 }
];

export function findItemsOver20(itemList3) {
  var itemsOver20 = [];
  for (var i = 0; i < itemList3.length; i++) {
    if (itemList3[i].qty > 20) {
      itemsOver20.push(itemList3[i]);
    }
  }
  return itemsOver20;
}
// console.log(findItemsOver20(itemList3));

