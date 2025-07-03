async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postData = await response.json();
        return postData; // 1. Повертаємо дані з функції
    } catch (error) {
        console.error('Не вдалося отримати дані:', error);
        return null; // Повертаємо null у випадку помилки
    }
}

getPost().then(data => {
    if (data) {
        console.log("Отримана відповідь:", data);
        for (post of data) {
            const li = document.createElement('li');
            document.querySelector('.posts-list').appendChild(li);
            const index = document.createElement('span');
            index.classList.add('post-index');
            index.innerText = post.id;
            li.appendChild(index);
            const title = document.createElement('h4');
            title.classList.add('post-title');
            title.innerText = post.title;
            li.appendChild(title);
            const text = document.createElement('p');
            text.classList.add('post-text');
            text.innerText = post.body;
            li.appendChild(text);
            const link = document.createElement('a');
            link.classList.add('post-link');
            link.href = '#';
            link.innerText = 'Read more';
            li.appendChild(link);
        }
    }
});