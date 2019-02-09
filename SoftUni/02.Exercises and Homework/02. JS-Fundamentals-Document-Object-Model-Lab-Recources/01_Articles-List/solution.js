function solve() {
	let createTitleElement = document.getElementById('createTitle');
	let createContentElement = document.getElementById('createContent');

	if(createTitleElement.value !== '' && createContentElement.value !== '') {
		let articleTitle = document.createElement('h3');
		articleTitle.textContent = createTitleElement.value;
		let articleContent = document.createElement('p');
		articleContent.textContent = createContentElement.value;
		let article = document.createElement('article');
		article.appendChild(articleTitle);
		article.appendChild(articleContent);
		let articles = document.getElementById('articles');
		articles.appendChild(article);

		createTitleElement.value = ''
		createContentElement.value = '';
	}
}