const cvData = {
    profile: {
        name: { kor: "홍길동", eng: "Gildong Hong" },
        tagline: { kor: "소프트웨어로 세상을 연결하는 개발자", eng: "Software Engineer Connecting the World with Code" },
        email: "gildong.hong@example.com",
        phone: "010-1234-5678",
        location: { kor: "대한민국, 서울", eng: "Seoul, South Korea" }
    },
    externalLinks: {
        github: "https://github.com/example",
        linkedin: "https://linkedin.com/in/example",
        blog: "https://example.blog.com"
    },
    keywords: {
        title: { kor: "주요 키워드", eng: "Keywords" },
        items: [
            { kor: "백엔드 개발", eng: "Backend Development" },
            { kor: "시스템 아키텍처", eng: "System Architecture" },
            { kor: "클라우드 네이티브", eng: "Cloud Native" },
            { kor: "DevOps", eng: "DevOps" },
            { kor: "대규모 트래픽 처리", eng: "Large-scale Traffic" }
        ]
    },
    qualifications: {
        title: { kor: "주요 자격 요약", eng: "Qualifications Summary" },
        items: [
            { kor: "정보처리기사 (2020)", eng: "Engineer Information Processing (2020)" },
            { kor: "AWS Certified Developer – Associate (2022)", eng: "AWS Certified Developer – Associate (2022)" }
        ]
    },
    introduction: {
        title: { kor: "소개", eng: "Introduction" },
        aboutMe: {
            title: { kor: "자기소개", eng: "About Me" },
            content: {
                kor: "안녕하세요. 저는 7년차 백엔드 개발자 홍길동입니다. ... (1000자 미만 자기소개 텍스트) ... 안정적이고 확장 가능한 시스템을 설계하고 구축하는 것에 큰 보람을 느낍니다. ...",
                eng: "Hello, I am Gildong Hong, a backend developer with 7 years of experience. ... (About me text under 1000 characters) ... I find great satisfaction in designing and building stable and scalable systems. ..."
            }
        },
        goals: {
            title: { kor: "목표", eng: "My Goals" },
            content: {
                kor: "저의 장기적인 목표는 기술을 통해 사회에 긍정적인 영향을 미치는 것입니다. ... (2000자 미만 목표 텍스트) ... 특히 클라우드 네이티브 기술과 MSA(Microservices Architecture)를 깊이 있게 연구하여...",
                eng: "My long-term goal is to make a positive impact on society through technology. ... (Goals text under 2000 characters) ... I am particularly interested in deeply researching cloud-native technologies and Microservices Architecture (MSA) to..."
            }
        }
    },
    education: {
        title: { kor: "학력", eng: "Education" },
        items: [
            {
                degree: { kor: "소프트웨어공학 석사", eng: "Master of Science in Software Engineering" },
                institution: { kor: "한국대학교 대학원", eng: "Korea University Graduate School" },
                period: "2018.03 - 2020.02",
                desc: { kor: "논문: '대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구'", eng: "Thesis: 'A Study on Efficient Data Processing Techniques in Large-Scale Distributed Systems'" }
            },
            {
                degree: { kor: "컴퓨터공학 학사", eng: "Bachelor of Science in Computer Science" },
                institution: { kor: "한국대학교", eng: "Korea University" },
                period: "2014.03 - 2018.02",
                desc: { kor: "수석 졸업, 학부 연구생 참여", eng: "Graduated Summa Cum Laude, Participated as an undergraduate researcher" }
            }
        ]
    },
    experience: {
        title: { kor: "경력", eng: "Experience" },
        items: [
            {
                position: { kor: "시니어 소프트웨어 엔지니어", eng: "Senior Software Engineer" },
                company: "Tech Corp",
                period: "2022.03 - 현재",
                tasks: [
                    { kor: "주요 서비스 백엔드 시스템 설계 및 개발", eng: "Designed and developed backend systems for major services" },
                    { kor: "MSA 기반 신규 프로젝트 리딩", eng: "Led a new project based on MSA" },
                    { kor: "CI/CD 파이프라인 구축 및 운영 자동화", eng: "Established and automated CI/CD pipelines" }
                ]
            },
            {
                position: { kor: "소프트웨어 엔지니어", eng: "Software Engineer" },
                company: "NextGen Solutions",
                period: "2020.03 - 2022.02",
                tasks: [
                    { kor: "사내 인증/인가 시스템 개발", eng: "Developed the in-house authentication/authorization system" },
                    { kor: "API 게이트웨이 성능 개선", eng: "Improved the performance of the API Gateway" },
                    { kor: "코드 리뷰 및 주니어 개발자 멘토링", eng: "Conducted code reviews and mentored junior developers" }
                ]
            },
            {
                position: { kor: "주니어 개발자", eng: "Junior Developer" },
                company: "Startup Valley",
                period: "2019.01 - 2020.02",
                tasks: [
                    { kor: "웹 서비스 유지보수 및 기능 추가", eng: "Maintained and added features to web services" },
                    { kor:tinue generation
 kor: "데이터베이스 마이그레이션 작업 참여", eng: "Participated in database migration tasks" }
                ]
            }
        ]
    },
    projects: {
        title: { kor: "프로젝트", eng: "Projects" },
        items: Array.from({ length: 8 }, (_, i) => ({
            id: i + 1,
            title: { kor: `프로젝트 ${i + 1}`, eng: `Project ${i + 1}` },
            shortDesc: { kor: `프로젝트 ${i + 1}에 대한 간략한 설명입니다.`, eng: `This is a brief description for Project ${i + 1}.` },
            longDesc: { kor: `프로젝트 ${i + 1}의 상세 설명입니다. 이 프로젝트는 ... 기술을 사용하여 ... 문제를 해결했습니다. 주요 성과로는 ...`, eng: `Detailed description of Project ${i + 1}. This project solved... problems using... technologies. Key achievements include...` },
            techs: ["Java", "Spring Boot", "React", "AWS"],
            imageUrl: `assets/images/project_${i + 1}.png`,
            link: "https://github.com/example"
        }))
    },
    skills: {
        title: { kor: "기술", eng: "Skills" },
        categories: [
            {
                name: { kor: "프로그래밍 언어", eng: "Programming Languages" },
                items: [
                    { name: "Java", level: 90 },
                    { name: "Kotlin", level: 80 },
                    { name: "Python", level: 75 },
                    { name: "JavaScript", level: 70 }
                ]
            },
            {
                name: { kor: "백엔드", eng: "Backend" },
                items: [
                    { name: "Spring Boot", level: 95 },
                    { name: "JPA / Hibernate", level: 85 },
                    { name: "Node.js", level: 60 },
                    { name: "MySQL / PostgreSQL", level: 80 }
                ]
            },
            {
                name: { kor: "DevOps & Cloud", eng: "DevOps & Cloud" },
                items: [
                    { name: "AWS", level: 85 },
                    { name: "Docker", level: 90 },
                    { name: "Kubernetes", level: 70 },
                    { name: "Jenkins", level: 75 }
                ]
            }
        ]
    },
    research: {
        title: { kor: "연구", eng: "Research" },
        items: [
            {
                title: { kor: "대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "A Study on Efficient Data Processing Techniques in Large-Scale Distributed Systems" },
                publication: { kor: "대한소프트웨어학회 논문지", eng: "Journal of The Korean Society for Software" },
                date: "2020.02"
            }
        ]
    },
    awards: {
        title: { kor: "수상 및 자격증", eng: "Awards & Certifications" },
        items: [
            {
                name: { kor: "AWS Certified Developer – Associate", eng: "AWS Certified Developer – Associate" },
                issuer: "Amazon Web Services",
                date: "2022.08"
            },
            {
                name: { kor: "정보처리기사", eng: "Engineer Information Processing" },
                issuer: { kor: "한국산업인력공단", eng: "HRD Korea" },
                date: "2020.05"
            },
            {
                name: { kor: "Top Coder 알고리즘 대회 3위", eng: "3rd Place, Top Coder Algorithm Competition" },
                issuer: "Top Coder",
                date: "2019.11"
            }
        ]
    },
    // UI Texts
    ui: {
        nav: {
            intro: { kor: "소개", eng: "Intro" },
            education: { kor: "학력", eng: "Education" },
            experience: { kor: "경력", eng: "Experience" },
            projects: { kor: "프로젝트", eng: "Projects" },
            skills: { kor: "기술", eng: "Skills" },
            research: { kor: "연구", eng: "Research" },
            awards: { kor: "수상/자격증", eng: "Awards" }
        },
        contactCTA: { kor: "연락 제안하기", eng: "Contact Me" },
        viewProjectBtn: { kor: "프로젝트 보기", eng: "View Project" },
        viewPaperBtn: { kor: "논문 보기", eng: "View Paper" },
        footer: { kor: "© 2025 홍길동. All Rights Reserved.", eng: "© 2025 Gildong Hong. All Rights Reserved." },
        contactModal: {
            title: { kor: "연락처 남기기", eng: "Leave a Message" },
            name: { kor: "이름/회사명", eng: "Name / Company" },
            email: { kor: "이메일", eng: "Email" },
            message: { kor: "메시지", eng: "Message" },
            submit: { kor: "제출", eng: "Submit" }
        },
        projectModal: {
            techs: { kor: "사용 기술", eng: "Technologies Used" },
            link: { kor: "프로젝트 링크", eng: "Project Link" }
        }
    }
};
