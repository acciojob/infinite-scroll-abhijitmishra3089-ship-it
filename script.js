//your code here!
const item=document.getElementById("infi-list");
	let count=1
function add(nums) {
for (let i = 1; i < nums; i++) {
	const li=document.createElement("li")
	li.innerText=`Item ${i}`
	item.appendChild(li)
   count++
}
}
add(100)
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
        addItems(2);
    }
});