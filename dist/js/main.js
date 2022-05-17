const sections = document.querySelectorAll('.section');
const icons = document.querySelectorAll('.icon');
icons.forEach((icon) => {
    icon.addEventListener('click', function(){
        if(!this.classList.contains('active-icon')){
            document.querySelector('.active').classList.remove('active');
            document.querySelector('.active-icon').classList.remove('active-icon');
            const sectionName = this.getAttribute('data-section');
            document.querySelector('title').textContent = 'Asad Mujumder | ' + sectionName.split('-')[1];
            this.classList.add('active-icon');
            document.querySelector(`.${sectionName}`).classList.add('active');
        }
    })
})