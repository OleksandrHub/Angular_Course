const warning = document.querySelector('warning');
async function getPostById(id_user) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id_user}`);
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const userData = await response.json();
        const postData = await response2.json();
        const filteredPosts = postData.filter(post => post.userId === id_user);
        return {
            user_id: userData.id,
            name: userData.name,
            posts: filteredPosts
        };
    } catch (error) {
        console.error('Не вдалося отримати дані:', error);
        return null;
    }
}

document.querySelector('.search-button').addEventListener('click', () => {
    warning.innerText = '';
    warning.classList.remove('todo-list__warning');
    const input = document.querySelector('.search-input');

    if (input.value === '' || input.value < 1 || input.value > 10) {
        
        return;
    }
    const id_user = input.value;
    getPostById(id_user).then(data => {
        if (data) {
            console.log("Отримана відповідь:", data);

        }
    }).catch(error => {
        console.error('Помилка:', error);
    });

});
