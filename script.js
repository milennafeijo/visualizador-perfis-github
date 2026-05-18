const inputSearch = document.getElementById("input-search");

const button = document.getElementById("btn-search");

const results = document.getElementById("profile-results");

const base_url = 'https://api.github.com';

button.addEventListener("click", async () => {
    const userName = inputSearch.value.trim();

    if (userName) {

        results.innerHTML = '<p>Carregando...</p>';

        try {
            const response = await fetch(`${base_url}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado!');
                results.innerHTML = '';
                return;
            }

            const UserData = await response.json();
            console.log(UserData); //apenas para verificar se os dados foram obtidos corretamente

            results.innerHTML = `
                <div class="profile-card">
                    <img src="${UserData.avatar_url}" alt="${UserData.name}" class="profile-image">
                    <div class="profile-info">
                        <h2>${UserData.name}</h2>
                        <p>${UserData.bio || "Este usuário não possui bio 😕"}</p>
                    </div>
                </div>
            `;

        } catch (error) {
            console.error('erro ao buscar o perfil do usuário', error);
            alert('ocorreu um erro ao buscar o perfil do usuario');
            results.innerHTML = '';
        }

    } else {
        alert('Por favor, digite um usuário');
    }
});

inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});
