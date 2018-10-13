
const vspan = document.createElement('span');
vspan.style.visibility = 'hidden';
vspan.style.whiteSpace = 'nowrap';
vspan.style.fontSize = '12px';
document.body.appendChild(vspan);

// Fix character display incompleteness and width
export default function (str) {
	if (str === null) {
		return 0;
	}
	vspan.innerHTML = str;
	return vspan.offsetWidth;
}
