
document.addEventListener('DOMContentLoaded', () => {
    // --- STATE ---
    let currentLang = localStorage.getItem('cv-lang') || 'kor';

    // --- UTILITY FUNCTIONS ---
    const T = (keyPath) => {
        return keyPath.split('.').reduce((acc, key) => acc && acc[key], cvData)[currentLang] || '';
    };

    // --- DOM ELEMENTS ---
    const navbar = document.getElementById('navbar');
    const summaryArea = document.getElementById('summary-area');
    const contentsArea = document.getElementById('contents-area');
    const introductionSection = document.getElementById('introduction');
    const educationSection = document.getElementById('education');
    const experienceSection = document.getElementById('experience');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const researchSection = document.getElementById('research');
    const awardsSection = document.getElementById('awards');
    const footer = document.getElementById('footer');

    // Modals
    const contactModal = document.getElementById('contact-modal');
    const projectModal = document.getElementById('project-modal');
    const contactModalBody = document.getElementById('contact-modal-body');
    const projectModalBody = document.getElementById('project-modal-body');


    // --- RENDER FUNCTIONS ---
    const renderAll = () => {
        renderNavbar();
        renderSummary();
        renderIntroduction();
        renderEducation();
        renderExperience();
        renderProjects();
        renderSkills();
        renderResearch();
        renderAwards();
        renderFooter();
        renderContactModal();
        attachEventListeners();
    };
    
    // ... (rest of the script)
    const renderNavbar = () => {
        navbar.innerHTML = `
            <div id="navbar-title">${cvData.profile.name[currentLang]}</div>
            <div id="navbar-menu">
                <a href="#introduction">${T('ui.nav.intro')}</a>
                <a href="#education">${T('ui.nav.education')}</a>
                <a href="#experience">${T('ui.nav.experience')}</a>
                <a href="#projects">${T('ui.nav.projects')}</a>
                <a href="#skills">${T('ui.nav.skills')}</a>
                <a href="#research">${T('ui.nav.research')}</a>
                <a href="#awards">${T('ui.nav.awards')}</a>
            </div>
            <button id="lang-toggle">${currentLang.toUpperCase()}</button>
        `;
    };

    const renderSummary = () => {
        summaryArea.innerHTML = `
            <div class="profile-info">
                <img src="assets/images/profile.png" alt="Profile Picture" class="profile-pic">
                <h2 class="profile-name">${cvData.profile.name[currentLang]}</h2>
                <p class="profile-tagline">${cvData.profile.tagline[currentLang]}</p>
            </div>
            <div class="contact-info summary-section">
                <ul>
                    <li>...</li>
                </ul>
            </div>
            <div class="keywords summary-section">
                <h3>${cvData.keywords.title[currentLang]}</h3>
                <div class="keywords-container">
                    ${cvData.keywords.items.map(item => `<span class="keyword-tag">${item[currentLang]}</span>`).join('')}
                </div>
            </div>
            <button id="contact-cta">${T('ui.contactCTA')}</button>
        `;
    };

    const renderIntroduction = () => {
        introductionSection.innerHTML = `
            <h2 class="section-title">
                <img src="assets/icons/intro.svg" alt="icon">
                ${cvData.introduction.title[currentLang]}
            </h2>
            <div class="subsection">
                <h4>${cvData.introduction.aboutMe.title[currentLang]}</h4>
                <p>${cvData.introduction.aboutMe.content[currentLang]}</p>
            </div>
            <div class="subsection">
                <h4>${cvData.introduction.goals.title[currentLang]}</h4>
                <p>${cvData.introduction.goals.content[currentLang]}</p>
            </div>
        `;
    };

    const renderEducation = () => {
        educationSection.innerHTML = `
            <h2 class="section-title">...</h2>
            <div class="timeline">
                ${cvData.education.items.map(item => `
                    <div class="timeline-item">
                        <p class="timeline-date"><span class="math-inline">\{item\.period\}</p\>
<h5 class\="timeline\-title"\></span>{item.degree[currentLang]}</h5>
                        <p class="timeline-subtitle"><span class="math-inline">\{item\.institution\[currentLang\]\}</p\>
<p class\="timeline\-desc"\></span>{item.desc[currentLang]}</p>
                    </div>
                `).join('')}
            </div>
        `;
    };

    const renderProjects = () => {
        projectsSection.innerHTML = `
            <h2 class="section-title">...</h2>
            <div class="project-grid">
                ${cvData.projects.items.map(p => `
                    <div class="project-card">
                        <img src="<span class="math-inline">\{p\.imageUrl\}" alt\="</span>{p.title[currentLang]}" class="project-thumbnail">
                        <div class="project-info">
                            <h5 class="project-title"><span class="math-inline">\{p\.title\[currentLang\]\}</h5\>
<p class\="project\-desc"\></span>{p.shortDesc[currentLang]}</p>
                            <button class="project-view-btn" data-project-id="<span class="math-inline">\{p\.id\}"\></span>{T('ui.viewProjectBtn')}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    };
    
    const renderContactModal = () => {
        contactModalBody.innerHTML = `
            <h3>${T('ui.contactModal.title')}</h3>
            <form id="contact-form">
                <div class="modal-form-group">
                    <label for="name">${T('ui.contactModal.name')}</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="modal-form-group">
                    <label for="email">${T('ui.contactModal.email')}</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="modal-form-group">
                    <label for="message">${T('ui.contactModal.message')}</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="modal-submit-btn">${T('ui.contactModal.submit')}</button>
            </form>
        `;
    };

    const openProjectModal = (projectId) => {
        const project = cvData.projects.items.find(p => p.id == projectId);
        if (!project) return;
        
        projectModalBody.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title[currentLang]}">
            <h3>${project.title[currentLang]}</h3>
            <p>${project.longDesc[currentLang]}</p>
            <div class="project-techs">
                <h4>${T('ui.projectModal.techs')}</h4>
                <div class="keywords-container">
                    ${project.techs.map(tech => `<span class="keyword-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <a href="${project.link}" target="_blank" class="project-view-btn">${T('ui.projectModal.link')}</a>
        `;
        projectModal.style.display = 'flex';
    };

    // --- EVENT LISTENERS ---
    const attachEventListeners = () => {
        // Language Toggle
        document.getElementById('lang-toggle').addEventListener('click', () => {
            currentLang = (currentLang === 'kor') ? 'eng' : 'kor';
            localStorage.setItem('cv-lang', currentLang);
            renderAll();
        });

        // CTA and Modal buttons
        document.getElementById('contact-cta').addEventListener('click', () => {
            contactModal.style.display = 'flex';
        });

        // Modal close buttons
        document.querySelectorAll('.close-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal-wrapper').style.display = 'none';
            });
        });
        
        // Project modal open (Event Delegation)
        projectsSection.addEventListener('click', (e) => {
            if (e.target.classList.contains('project-view-btn')) {
                const projectId = e.target.dataset.projectId;
                openProjectModal(projectId);
            }
        });
        
        // Form submission (placeholder)
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (API connection needed)');
            contactModal.style.display = 'none';
        });
    };

    // --- INITIAL RENDER ---
    renderAll();
});
