import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        const originalTitle = document.title;
        document.title = '임채주_이력서';
        window.print();
        document.title = originalTitle;
    };

    return (
        <div className="resume-page">
            <div className="resume-container">
                <header className="resume-header">
                    <Link to="/" className="back-link">← Home</Link>
                    <div className="header-top">
                        <div className="profile-img-container">
                            <img src="./profileimg.jpg" alt="임채주 프로필" className="resume-profile-img" />
                        </div>
                        <div className="header-content">
                            <h1>임채주</h1>
                            <p className="title">Full Stack Developer</p>
                            <div className="contact-info">
                                <span>📧 cjlim000523@gmail.com</span>
                                <span>📱 010-8622-9529</span>
                                <span>🚀 <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer">github.com/cjlim05</a></span>
                                <span>📝 <a href="https://cjlim05.github.io/" target="_blank" rel="noreferrer">Portfolio</a></span>
                                <span>🔗 <a href="https://www.linkedin.com/in/chaeju/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                            </div>
                        </div>
                    </div>
                    <button className="download-btn" onClick={handleDownload}>
                        <span className="icon">⬇️</span> PDF로 다운로드 하기
                    </button>
                </header>

                <main className="resume-body">
                    <section className="resume-section intro-section">
                        <div className="intro-card glass-card">
                            <p>👋 <strong>“풀스택 개발자 임채주입니다”</strong></p>
                            <p>꾸준한 성장에 가치를 두는 개발자입니다. 새로운 기술을 접하면 스스로 실습하며 동작 원리를 완전히 이해할 때까지 파고드는 습관을 가지고 있습니다. 소통과 기록을 중요하게 생각하며, 팀과 함께 성장하는 안정적인 시스템을 지향합니다.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>경력</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>퍼솔켈리코리아 IT부서</h3>
                                    <span className="date">2024.06 - 2024.08 (인턴)</span>
                                </div>
                                <p className="role">IT 부서 개발 인턴</p>
                                <ul>
                                    <li>JSP를 활용한 사업 소개 사이트 개발</li>
                                    <li>가비아 클라우드 배포 및 MySQL 데이터베이스 구축</li>
                                    <li>HelpDesk 업무 및 사내 시스템 관리</li>
                                </ul>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>에이치디메디 R&D</h3>
                                    <span className="date">2023.12 - 2024.02 (인턴)</span>
                                </div>
                                <p className="role">크롤링 및 데이터 수집 인턴</p>
                                <ul>
                                    <li>BeautifulSoup, Scrapy, Selenium 활용 약국/약 정보 데이터 크롤링</li>
                                    <li>공공데이터 API를 활용한 대규모 데이터 수집 및 전처리</li>
                                    <li>배포 전 QA 작업 및 테스팅 계획 수립/실행</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-cat">
                                <strong>Java</strong>
                                <ul>
                                    <li>JSP 기반 웹 페이지 개발 경험</li>
                                    <li>Spring Boot / Security 활용 프로젝트 수행</li>
                                    <li>REST API 설계 및 서버 연동</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Python</strong>
                                <ul>
                                    <li>BeautifulSoup / Selenium 데이터 수집 자동화</li>
                                    <li>OpenCV 활용 이미지 처리 / Pandas 데이터 분석</li>
                                    <li>TensorFlow 기반 머신러닝 기초 모델 실습</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>React & JS</strong>
                                <ul>
                                    <li>React 기반 SPA 아키텍처 설계</li>
                                    <li>상태 관리 및 REST API 비동기 연동</li>
                                    <li>사용자 친화적인 UI/UX 구현</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Infra & Tools</strong>
                                <ul>
                                    <li>AWS (EC2, S3, CloudFront) 배포 경험</li>
                                    <li>Docker 기반 컨테이너 환경 구축</li>
                                    <li>Git 협업 및 브랜치 관리 전략</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>학력</h2>
                        <div className="edu-list">
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>서경대학교</h3>
                                    <span className="date">2020.03 - 2026.02 (졸업예정)</span>
                                </div>
                                <p>소프트웨어학과 학사</p>
                            </div>
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>단국대학교사범대학부속고등학교</h3>
                                    <span className="date">2016.03 - 2019.02</span>
                                </div>
                                <p>졸업</p>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section languages">
                        <h2>외국어 능력</h2>
                        <div className="lang-grid">
                            <div className="lang-item"><strong>한국어 🇰🇷</strong><span>원어민</span></div>
                            <div className="lang-item"><strong>영어 🇺🇸</strong><span>상급 (OPIC AL, 국제학교 3년 재학)</span></div>
                            <div className="lang-item"><strong>중국어 🇨🇳</strong><span>초급 (중국 거주 경험)</span></div>
                        </div>
                    </section>

                    <section className="resume-section essays">
                        <h2>자기소개서</h2>
                        <div className="essay-item">
                            <h3>본인의 장점 단점</h3>
                            <p>
                                눈앞의 성과보다 꾸준한 성장에 가치를 두는 개발자입니다. 특출난 재능이 없어도 어제보다 성장하며 배우는것이 목표입니다. 작은 문제라도 그냥 넘기지 않고 끝까지 원인을 찾아내며 반복되는 과정을 통해 실력을 쌓아왔습니다. 이런 꾸준함은 개발뿐 아니라 평생을 살아온 삶의 기준이기도 합니다. 그래서 새로운 기술을 접하면 먼저 스스로 실습하며 동작 원리를 이해하고 이해가 완전히 자리 잡을 때까지 직접 구현해보는 습관을 가지고 있습니다.
                            </p>
                            <p>
                                협업에서는 소통과 기록의 힘을 가장 중요하게 생각합니다. 혼자 해결하는 데 한계를 느낀 이후부터는 문제를 투명하게 공유하고 해결 과정을 문서화하여 팀이 함께 성장할 수 있도록 노력해왔습니다. slack과 notion을 활용해 발생한 오류와 해결 방법을 정리하며 한 번의 실수가 같은 팀 내에서 반복되지 않도록 구조를 만드는 데 집중했습니다. 이런 습관은 프로젝트의 완성도뿐 아니라 팀 전체의 신뢰도를 높이는 데 큰 도움이 되었습니다.
                            </p>
                            <p>
                                기술적으로는 Spring Boot, MySQL, React, AWS 환경을 기반으로 데이터베이스 설계부터 서버 배포, 인프라 운영, 모니터링 자동화까지 전 과정을 경험했습니다. 로드밸런싱을 통한 트래픽 분산, JWT 기반 인증 구조, Lambda를 이용한 서버 상태 모니터링 자동화 등 <strong>서비스의 안정성과 지속 가능성</strong>을 높이는 구조를 설계했습니다. 이 경험을 통해 단순히 기능을 만드는 개발자가 아니라, 시스템이 멈추지 않도록 관리하고 개선하는 개발자로 성장했습니다.
                            </p>
                            <p>
                                한편, 저는 완벽을 추구하기보다 ‘꾸준함’으로 부족함을 채워나가는 사람입니다. 어떤 문제를 만나도 포기하지 않고 매일 조금씩 개선하려는 태도로 임합니다. 이러한 성향은 긴 시간 동안 쌓여 신뢰할 수 있는 결과를 만들어낸다고 믿습니다. 완벽하게 모든 걸 아는 사람보다는, 하루하루 배움을 멈추지 않는 사람으로 기억되고 싶습니다. 그 꾸준함이 결국 안정적인 금융시스템을 만드는 원동력이 될 것이라 확신합니다.
                            </p>
                            <p>
                                인생은 마라톤이라는 말이 있듯 꾸준함이 장기적인 성장을 만드는 힘이라고 믿습니다. 10년, 20년이 지나도 뒤쳐지지 않기 위해 매일 작은 학습과 개선을 이어가며 시스템의 안정성과 신뢰도를 높이는 엔지니어로 성장하고자 합니다.
                            </p>
                        </div>

                        <div className="essay-item">
                            <h3>해당 직무와 관련한 경험</h3>
                            <p>
                                프로그래밍을 시작하면서 프로그래밍은 외우는 것이 아니라 학습하는 과정이라고 생각합니다. 프로그래밍뿐만 아니라 모든 학습은 단순 암기가 아닌 직접 사용하고 경험 해야지만 진짜 내것을 만들 수 있다고 생각을 합니다. 그래서 스스로 문제를 마주하고 해결하는 과정을 거치면서 기술들을 익히며 성장해오고 있습니다.
                            </p>
                            <p>
                                퍼솔켈리코리아 인턴십을 하면서 개발자로서 가장 큰 변화를 경험했습니다. 당시 기업 소개 사이트를 개발하는 프로젝트에 참여하여 기획부터 프론트엔드와 백엔드, 데이터베이스 연결까지 전 과정을 혼자 맡았습니다. 개발자로서 첫 실무였던 만큼 부족한 점이 많았고 단순한 기능 하나를 구현하는 데도 많은 시간이 걸렸습니다. 특히 마감 기한이 정해진 상황에서 시간 압박과 예상치 못한 오류들을 많이 맞닥뜨리며 여러 좌절을 겪었지만 야근을 하고 집에 와서 혼자 생각하고 찾아보며 답을 계속해서 찾아갔습니다. 이 경험을 통해 개발은 못하는 게 아니라 안 하는 것이라는 굳은 신념을 갖으며 개발자로서 근본적 태도를 바꾸는 계기가 되었습니다.
                            </p>
                            <p>
                                이후 여러 프로젝트를 진행하며 로컬 환경에서의 개발과 실제 배포 환경의 차이를 뼈저리게 느꼈습니다. 개발 단계에서는 잘 작동하던 코드가 서버에 올리면 예상치 못한 오류를 일으키거나, 트래픽이 몰릴 때 응답이 느려지는 현상을 자주 겪었습니다.
                            </p>
                            <p>
                                이를 해결하기 위해 서버 구조 전반을 이해하기 시작했고, AWS를 기반으로 EC2, S3, CloudFront를 연동한 서버 아키텍처를 직접 구축했습니다. 특히 배포 과정에서는 단순히 서비스 실행이 아니라, 보안·부하·복구 체계까지 고려한 운영 설계의 중요성을 체감했습니다. 그리고 로드밸런서를 도입해 트래픽을 분산시키고, 장애 발생 시 특정 서버가 자동으로 복구되는 구조를 만들었습니다. 하지만 이 과정에서 깨달은 점이 있습니다. 어떠한 서비스도 100% 완벽한 안정성을 보장할 수는 없습니다. 진정한 안정성이란 오류를 없애는 것이 아니라, 예상치 못한 문제를 빠르게 감지하고 대응할 수 있는 구조를 만드는 것이라고 생각합니다. 이런 관점에서 최근에는 AWS Lambda와 CloudWatch를 연동하여 서버 상태를 실시간으로 모니터링하고, 오류 발생 시 텔레그램 알림을 받는 자동화 시스템을 구축했습니다. 이를 통해 최대 1분 안에 서버가 다운된 것을 인지할 수 있게 되었습니다. 이 경험을 통해 장애를 예상 밖의 사건이 아닌 즉시 대응 가능한 관리 대상으로 바라보는 사고방식을 갖게 되었습니다. 이를 통해 더더욱 혼자 개발하는 것보다 실제 업무에 투입되어 실전 경력을 쌓는 것이 중요하며 하루 빨리 실전 경력을 쌓아야겠다고 생각했습니다.
                            </p>
                            <p>
                                지금까지의 과정을 통해 단순히 코드를 작성하는 사람이 아니라, 데이터의 신뢰성과 인프라의 안정성으로 서비스 품질을 설계하는 개발자로 성장했습니다. 입사 후에도 이러한 경험을 바탕으로 어떤 상황에서도 안정적으로 작동할 수 있도록 시스템 설계 및 개선하는 일에 기여하고 싶습니다.
                            </p>
                        </div>

                        <div className="essay-item">
                            <h3>업무를 하면서 가장 중요하게 생각하는 가치</h3>
                            <p>
                                업무를 하면서 제가 가장 중요하게 생각하는 가치는 소통 능력입니다. 특히 협업이 필수적인 환경에서는 개인의 능력만큼이나 팀원 간 원활한 소통이 결과물의 완성도를 결정짓는 핵심 요소라고 생각합니다. 협업 없이 각자 개별적으로 작업한 결과물은 완성도가 떨어질 뿐 아니라, 작업자 입장에서도 동기 부여가 약해질 가능성이 높습니다. 저는 두 번의 주요 프로젝트를 통해 이러한 소통의 중요성을 깊이 깨닫게 되었습니다.
                            </p>
                            <p>
                                첫 번째는 대학 시절 진행한 기말 프로젝트였습니다. 같은 학과 친구와 함께 개발을 진행했던 프로젝트였기 때문에 소통이 매우 자유로웠습니다. 주로 개인 메시지인 카카오톡을 통해 어려운 부분이나 만족스럽지 못한 부분을 거리낌 없이 공유할 수 있었으며, 이러한 즉각적이고 편안한 소통 덕분에 프로젝트는 순조롭게 진행되었습니다. 물론 어려운 문제와 버그들이 많았지만, 서로 의지하며 해결해 나가는 과정이 즐거웠고, 협업의 가치와 재미를 경험할 수 있었습니다.
                            </p>
                            <p>
                                두 번째는 퍼솔켈리코리아에서 진행한 웹사이트 제작 업무입니다. 실무 현장에서 실질적으로 사용될 웹사이트를 제작하며 비개발자인 실무자와 직접 소통해야 하는 상황에 직면했는데, 초기에는 관점 차이로 인해 어려움을 겪었습니다. 예를 들어, 실무자는 사용자 관점에서 직관적이고 시각적인 부분을 중시한 반면, 저는 개발자 관점에서 기능성과 효율성을 더 우선적으로 고려하는 경우가 많았습니다.
                            </p>
                            <p>
                                이러한 차이를 극복하기 위해 많은 시간을 회의와 소통에 투자하며 이해하려고 노력했습니다. 당시 이러한 경험은 개발자로서 시야를 넓힐 수 있는 기회가 되었습니다. 나아가 실무자의 요구사항을 바탕으로 구현할 방법과 개발 계획을 문서화하여 서로의 이해관계를 좁히기 위해 노력했습니다. 이러한 과정은 단순한 소통을 넘어 상호 이해와 신뢰 구축으로 이어졌고, 결과적으로 만족스러운 결과물을 도출할 수 있었습니다.
                            </p>
                            <p>
                                이 두 경험은 소통의 중요성을 깨닫게 해주었습니다. 자유롭고 편안한 소통은 팀의 유대를 강화하고, 다른 관점을 이해하려는 노력이 결합될 때 비로소 더 나은 결과를 만들어낼 수 있음을 배웠습니다. 앞으로도 협업 속에서 원활한 소통을 기반으로 문서화하여 체계적으로 팀과 함께 목표를 이루어나가는 개발자가 되고자 합니다.
                            </p>
                        </div>

                        <div className="essay-item">
                            <h3>입사 후 계획 및 포부</h3>
                            <p>
                                여러 인턴십과 다양한 프로젝트를 경험하면서 한 가지 확실히 깨달은 점은 필요한 인재가 되자는 것이었습니다. 그래서 입사 후에도 단순히 개발을 수행하는 사람이 아니라, <strong>시스템을 안정적으로 운영하고 개선할 수 있는 핵심 인력</strong>으로 성장하고 싶습니다.
                            </p>
                            <p>
                                입사 초기에는 유진투자증권의 <strong>서버 인프라 구조와 네트워크 흐름, 트랜잭션 처리 과정</strong>을 정확히 이해하는 데 집중하겠습니다. 서버 로그를 분석하고 장애 발생 원인을 추적하며 트래픽 분산 구조를 검토해 시스템 병목을 개선하겠습니다. 이를 통해 서비스가 끊기지 않고 안정적으로 유지되도록 하는 <strong>운영 중심의 기술 감각</strong>을 익히고자 합니다.
                            </p>
                            <p>
                                중기적으로는 <strong>자동화와 가용성 향상</strong>을 목표로 삼겠습니다. AWS 기반 인프라 환경에서 로드밸런서를 최적화하고, CloudWatch와 Lambda를 활용한 실시간 모니터링 체계를 강화하여 장애가 발생하더라도 <strong>즉시 탐지·대응 가능한 인프라 환경</strong>을 구축하겠습니다. 또한 서버 리소스 사용량을 효율화하고, 로그 기반 분석으로 시스템 부하를 사전에 예측하여 <strong>무중단 운영 구조</strong>를 만드는 것을 목표로 하고 있습니다.
                            </p>
                            <p>
                                장기적으로는 인프라 운영뿐만 아니라 <strong>보안, 데이터베이스, 배포 아키텍처까지 아우르는</strong> 역량을 갖춘 엔지니어로 성장하고 싶습니다. 저는 완벽한 시스템은 없다고 생각하기에 언제든 <strong>빠르게 복구하고 안정성을 회복할 수 있는 시스템을 설계하는 것</strong>이 소프트웨어 엔지니어의 핵심 역할이라고 믿습니다. 이러한 철학을 바탕으로 어떤 상황에서도 안정적으로 이루어질 수 있도록 <strong>보이지 않는 곳에서 시스템 신뢰성을 지탱하는 엔지니어</strong>가 되고 싶습니다.
                            </p>
                        </div>
                    </section>
                </main>

                <footer className="resume-footer">
                    <p>© 2024 Chaeju Lim. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
