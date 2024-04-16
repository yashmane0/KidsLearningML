const Upload = document.querySelector('#upload');
const Select = document.querySelector('#select');
const imgArea = document.querySelector('.img-area');

function clickHandler() {
    Select.click();
}

Select.addEventListener('change', function () {
    const image = this.files[0]
    console.log(image);
    const reader = new FileReader();
    reader.onload = () => {
        const imgUrl = reader.result;
        const img = document.createElement('img');
        img.src = imgUrl;
        imgArea.appendChild(img);
    }
    reader.readAsDataURL(image);
})
