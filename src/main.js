
const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div);

dom.style(div, 'color', 'red') // 设置 div.style.color
const div2 = dom.find('#test2')[0]
dom.style(div2, 'font-size', '50px') // 设置 div.style.font-size
console.log(`----`);
const divList = dom.find('.red') // 获取多个 div.red 元素

console.log(divList)
console.log(`----`);
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素