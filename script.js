//your code here!
const item=document.getElementById("infi-list");
for (let i = 1; i < 100; i++) {
	const li=document.createElement("li")
	li.innerText=`Item ${i}`
	item.appendChild(li)
}
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
        addItems(2);
    }
});