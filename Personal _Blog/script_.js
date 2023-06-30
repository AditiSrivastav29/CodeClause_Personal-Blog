document.addEventListener('DOMContentLoaded', () => {
  fetchArticles();
});

async function fetchArticles() {
  try {
    const response = await fetch('fetch_articles.php'); 
    const articles = await response.json();

    const articleContainer = document.querySelector('.article-container');
    articleContainer.innerHTML = '';

    articles.forEach((article) => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      const heading = document.createElement('h4');
      heading.textContent = article.title;

      const hr = document.createElement('hr');

      const content = document.createElement('p');
      content.textContent = article.content;

      articleDiv.appendChild(heading);
      articleDiv.appendChild(hr);
      articleDiv.appendChild(content);

      articleContainer.appendChild(articleDiv);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
