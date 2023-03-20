// ALL TO DO

const ajoutArticle = async() => {
    let formAjout = document.getElementById("formAjout");
    let data = new FormData(formAjout);
    data.append('action', 'createArticle');
    try {
        const response = await fetch('http://localhost/web-transaction/turbo-molotov/server/article/controlleurArticle.php', {
            method: 'POST',
            body: data
        });
        const json = await response.text();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
  }