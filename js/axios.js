const postBtn = document.getElementById('post')



const postData = () => {
    axios.post("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=60e1cc5775e21fd5d753397fb5504c37").then(response => {
        console.log(response)
    });
}

postBtn.addEventListener('click', postData)