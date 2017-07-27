function getInfo(obj) {
	let xhr  = new XMLHttpRequest();
	xhr.open('GET', obj.url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status === 200) {
			obj.success(JSON.parse(xhr.responseText));
		};
	}
}

export { getInfo }