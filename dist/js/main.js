import {certificates,projects} from './modules/data.mjs';

window.addEventListener('load', () => {
    const profileImage = document.querySelector('.profile-pic');
    const isLoaded = profileImage.complete || profileImage.naturalHeight !== 0;
    if(isLoaded) profileImage.previousElementSibling.style.display = "none";
});

const sections = document.querySelectorAll('.section');
const icons = document.querySelectorAll('.icon-nav');
icons.forEach((icon) => {
    icon.addEventListener('click', function(){
        if(!this.classList.contains('active-icon')){
            window.scrollTo(0,0);
            document.querySelector('.active').classList.remove('active');
            document.querySelector('.active-icon').classList.remove('active-icon');
            const sectionName = this.getAttribute('data-section');
            document.querySelector('title').textContent = 'Asad Mujumder | ' + sectionName.split('-')[1];
            this.classList.add('active-icon');
            document.querySelector(`.${sectionName}`).classList.add('active');
        }
    })
});

const skillHeaders = document.querySelectorAll('.skill-heading-title');

skillHeaders.forEach(skillHeader => {
    const skillScore = skillHeader.children[1].textContent;
    skillHeader.parentElement.nextElementSibling.children[0].children[0].style.width = skillScore;

    skillHeader.addEventListener('click', function(event){
        event.stopPropagation();
        const showedDetails = document.querySelector('.show-skill-details');
        if(showedDetails && event.target !== showedDetails) {
            const contentShown = showedDetails.nextElementSibling;
            contentShown.style.padding = '0 1rem';
            contentShown.style.maxHeight = null;
            showedDetails.classList.remove('show-skill-details');
        }

        this.classList.toggle('show-skill-details');
        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.padding = '0 1rem';
            content.style.maxHeight = null;
        } else {
            content.style.padding = '0.8rem 1rem';
            content.style.maxHeight = (content.scrollHeight + 26) + "px";
        }
    });
});

const readMores = document.querySelectorAll('.desc-read-more');
readMores.forEach(readMore => {
    readMore.addEventListener('click', function(event){
        event.stopPropagation();
        const readDetails = document.querySelector('.read-more-details');
        if(readDetails && event.target !== readDetails) {
            const readDetailsShown = readDetails.previousElementSibling;
            readDetailsShown.style.maxHeight = '60px';
            readDetails.classList.remove('read-more-details');
        }

        this.classList.toggle('read-more-details');
        const readMoreContent = this.previousElementSibling;
        if (!this.classList.contains('read-more-details')){
            this.textContent = "read more...";
            readMoreContent.style.maxHeight = '60px';
        } else {
            this.textContent = "read less...";
            readMoreContent.style.maxHeight = readMoreContent.scrollHeight + "px";
        }
    });
});

const createCertificateModal = data => {
    const container = document.createElement('div');
    container.classList.add('modal','certificate-modal');
    container.style.display = 'block';

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const img = document.createElement('img');
    img.src = data.imgURL;
    img.alt = data.name;
    content.appendChild(img);

    const close = document.createElement('div');
    close.classList.add('modal-close');
    close.innerHTML = '&times;';
    close.addEventListener('click',function(){
        document.body.removeChild(this.parentElement.parentElement);
    })
    content.appendChild(close);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('modal-info');

    const url = document.createElement('p');
    url.classList.add('info-row');
    const link = document.createElement('a');
    link.classList.add('certificate-url');
    link.href = data.certificationURL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View Certificate';
    url.appendChild(link);
    infoContainer.appendChild(url);

    const name = document.createElement('p');
    name.classList.add('info-row');
    const nameTitle = document.createElement('span');
    nameTitle.classList.add('info-column');
    nameTitle.textContent = 'Certification Name: ';
    name.appendChild(nameTitle);
    const nameValue = document.createElement('span');
    nameValue.classList.add('info-column');
    nameValue.textContent = data.name;
    name.appendChild(nameValue);
    infoContainer.appendChild(name);

    const provider = document.createElement('p');
    provider.classList.add('info-row');
    const providerTitle = document.createElement('span');
    providerTitle.classList.add('info-column');
    providerTitle.textContent = 'Provider: ';
    provider.appendChild(providerTitle);
    const providerValue = document.createElement('span');
    providerValue.classList.add('info-column');
    providerValue.textContent = data.provider;
    provider.appendChild(providerValue);
    infoContainer.appendChild(provider);

    const issue = document.createElement('p');
    issue.classList.add('info-row');
    const issueTitle = document.createElement('span');
    issueTitle.classList.add('info-column');
    issueTitle.textContent = 'Issued on: ';
    issue.appendChild(issueTitle);
    const issueValue = document.createElement('span');
    issueValue.classList.add('info-column');
    issueValue.textContent = data.issued;
    issue.appendChild(issueValue);
    infoContainer.appendChild(issue);

    if(data.certificationId){
        const certificationId = document.createElement('p');
        certificationId.classList.add('info-row');
        const certificationIdTitle = document.createElement('span');
        certificationIdTitle.classList.add('info-column');
        certificationIdTitle.textContent = 'Certification ID: ';
        certificationId.appendChild(certificationIdTitle);
        const certificationIdValue = document.createElement('span');
        certificationIdValue.classList.add('info-column');
        certificationIdValue.textContent = data.certificationId;
        certificationId.appendChild(issueValue);
        infoContainer.appendChild(certificationId);
    }

    if(data.description){
        const description = document.createElement('p');
        description.classList.add('info-row','desc');
        description.textContent = data.description;
        infoContainer.appendChild(description);
    }
    

    content.appendChild(infoContainer);
    container.appendChild(content);
    return container;
}

const createCertificateEl = data => {
    const container = document.createElement('div');
    container.classList.add('certificate','card');

    const img = document.createElement('img');
    img.src = data.imgURL;
    img.alt = data.name;
    container.appendChild(img);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('certificate-info');

    const name = document.createElement('p');
    name.textContent = data.name;
    infoContainer.appendChild(name);

    const provider = document.createElement('h3');

    const spanHeading = document.createElement('span');
    spanHeading.textContent = 'Provider: ';
    spanHeading.classList.add('certificate-provider-heading');
    provider.appendChild(spanHeading);

    const spanValue = document.createElement('span');
    spanValue.textContent = data.provider;
    spanValue.classList.add('certificate-provider-value');
    provider.appendChild(spanValue);

    infoContainer.appendChild(provider);

    container.appendChild(infoContainer);

    container.addEventListener('click', function(){
        const modal = createCertificateModal(data);
        document.body.appendChild(modal);
    });

    return container;
}

const showCertificates = type => {
    let certificatesToShow = null;

    if(type === 'All'){
        certificatesToShow = certificates;
    }else{
        certificatesToShow = certificates.filter(certificate => certificate.type === type);
    }

    const container = document.querySelector('.certificates-container');
    if(certificatesToShow && certificatesToShow.length > 0){
        container.innerHTML = null;
        for(let i = 0;i < certificatesToShow.length;i++){
            const certificate = createCertificateEl(certificatesToShow[i]);
            container.appendChild(certificate);
        }
    }else{
        container.innerHTML = '<h3 class="empty">No certificates found in this category.</h3>';
    }
}

showCertificates('All');

const createLinkIcon = (url,title,iconClass) => {
    const link = document.createElement('a');
    link.classList.add('icon-project');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = title;
    let icon = document.createElement('i');
    for(let i = 0; i < iconClass.length; i++){
        icon.classList.add(iconClass[i]);
    }
    link.appendChild(icon);
    
    return link;
}

const createProjectEl = data => {
    const container = document.createElement('div');
    container.classList.add('project','card');

    const img = document.createElement('img');
    img.src = data.imgURL;
    img.alt = data.title;
    container.appendChild(img);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('project-info');

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags-container');
    for(let i = 0; i < data.type.length; i++){
        let tag = document.createElement('span');
        tag.classList.add('tag');
        tag.textContent = data.type[i];
        tagsContainer.appendChild(tag);
    }
    container.appendChild(tagsContainer);

    const title = document.createElement('h3');
    title.textContent = data.title;
    infoContainer.appendChild(title);

    const overlayInfo = document.createElement('div');
    overlayInfo.classList.add('overlay-project');

    if(data.link){
        const link = createLinkIcon(data.link,'View live demo',['fa-solid','fa-arrow-up-right-from-square']);
        overlayInfo.appendChild(link);
    }
    
    if(data.githubLink){
        for(let repoLink in data.githubLink){
            let link = createLinkIcon(data.githubLink[repoLink],`View ${repoLink} repo on Github`,['fa-brands','fa-github']);
            overlayInfo.appendChild(link);
        }
    }

    if(data.youtubeLink){
        const link = createLinkIcon(data.youtubeLink,'View video on YouTube',['fa-brands','fa-youtube']);
        overlayInfo.appendChild(link);
    }

    container.appendChild(overlayInfo);

    container.appendChild(infoContainer);

    return container;
}

const showProjects = type => {
    let projectsToShow = null;

    if(type === 'all'){
        projectsToShow = projects;
    }else{
        projectsToShow = projects.filter(project => {
            for(let i = 0; i < project.type.length; i++){
                if(project.type[i] === type){
                    return true;
                }
            }
            return false;
        });
    }

    const container = document.querySelector('.projects-container');
    if(projectsToShow && projectsToShow.length > 0){
        container.innerHTML = null;
        for(let i = 0;i < projectsToShow.length;i++){
            const project = createProjectEl(projectsToShow[i]);
            container.appendChild(project);
        }
    }else{
        container.innerHTML = '<h3 class="empty">No certificates found in this category.</h3>';
    }
}

showProjects('all');

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(){
        const content = this.children[1];
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

const dropdownContents = document.querySelectorAll('.dropdown-content');
dropdownContents.forEach(dropdownContent => {
    dropdownContent.addEventListener('click', function(event){
        if(this.previousElementSibling.children[0].textContent !== event.target.textContent){
            this.previousElementSibling.children[0].textContent = event.target.textContent;
            if(this.classList.contains('filterCertOptions')){
                showCertificates(event.target.getAttribute('data-value'));
            }else if(this.classList.contains('filterPortOptions')){
                showProjects(event.target.getAttribute('data-value'));
            }
        }
    });
});


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const content = dropdowns[i];
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }
      }
    }
    if (event.target.matches('.modal')) {
        document.body.removeChild(document.querySelector('.modal'));
    }
}

document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('change', function(){
        if(this.value){
            this.classList.add('has-value');
            this.nextElementSibling.nextElementSibling.textContent = "";
        }else{
            this.classList.remove('has-value');
            this.nextElementSibling.nextElementSibling.textContent = this.nextElementSibling.textContent + ' is needed.';
        }
    })
})

document.querySelector('.email-form').addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();

    const title = document.querySelector('#title');
    if(!title.value){
        title.nextElementSibling.nextElementSibling.textContent = "Title is needed.";
    }
    const message = document.querySelector('#message');
    if(!message.value){
        message.nextElementSibling.nextElementSibling.textContent = "Message is needed.";
    }

    if(title.value && message.value){
        window.open(`mailto:asaduzzaman.anik.me@gmail.com?subject=${title.value}&body=${message.value}`);
    }
});

document.querySelector('.email-form').addEventListener('reset', function(){
    const title = document.querySelector('#title');
    title.nextElementSibling.nextElementSibling.textContent = "";
    const message = document.querySelector('#message');
    message.nextElementSibling.nextElementSibling.textContent = "";
});