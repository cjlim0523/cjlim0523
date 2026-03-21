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
                            <h3>자기소개 (장단점)</h3>
                            <p>
                                백문이불여일견이라는 생각으로 이론에 그치지 않고 실제 서비스를 구현하는 경험을 통해 개발 역량을 키워왔습니다. 저의 가장 큰 강점은 새로운 기술을 학습하고 문제를 해결하는 실행력입니다. 강의를 통해 이론부터 시작하기보다 필요한 기능이 생기면 스스로 기술 문서와 자료를 찾아보고 이를 직접 구현하며 학습해왔습니다.
                            </p>
                            <p>
                                이러한 경험은 개인 프로젝트 '찬주런'을 개발하면서 가장 크게 발휘되었습니다. 당시 위치 기반 러닝 기록 기능 구현을 위해 GPS 데이터를 활용했는데, 위치 정보 처리와 지도 API 사용 경험이 전혀 없었습니다. 카카오 지도 API 문서를 찾아보며 위치 데이터를 수집하고 지도에 표시하는 방식을 학습했지만, 구현 과정에서 GPS 특성상 위치가 순간적으로 튀는 문제가 발생했습니다. 이를 해결하기 위해 자료를 찾던 중 데이터 노이즈를 보정하는 칼만 필터 기법을 알게 되었고, 알고리즘 원리를 학습한 뒤 위치 데이터에 적용해 보정 로직을 구현했습니다. 그 결과 러닝 경로의 정확도를 안정적으로 개선할 수 있었습니다. 이처럼 새로운 기술을 학습하는 것에 거부감 없이 도전하며 성장해왔습니다.
                            </p>
                            <p>
                                반면 단점은 속도를 우선하다 보니 초기 설계가 미흡할 때가 있다는 점입니다. 학교 기말 프로젝트에서 결과물을 완성하지 못해 발표하지 못했던 트라우마가 초안이라도 빠르게 만들어야 한다는 강한 강박을 가지게 만들었습니다. 실제로 사전 설계의 중요성을 깊이 고려하지 못한 채 개발을 진행했던 경험이 있습니다. 당시 신속하게 작업하기 위해 데이터베이스 구조를 충분히 설계하지 않고 작업을 시작했고, 예상치 못한 테이블과 컬럼이 추가되면서 시스템이 비효율적으로 변해 결국 구조 설계부터 다시 해야 했습니다.
                            </p>
                            <p>
                                이 경험을 통해 개발 속도보다 초기 설계를 충분히 고민하는 것이 오히려 프로젝트를 더 효율적으로 진행하는 방법이라는 것을 깨달았습니다. 이후에는 계획 툴을 사용하고 ERD를 작성하며 프로젝트 설계에 많은 노력을 기울이고 있습니다.
                            </p>
                            <p>
                                디지털 서비스가 일상 전반에 깊이 자리 잡은 현재, 기업의 경쟁력은 개별 기능이 아니라 이를 안정적으로 연결하고 확장할 수 있는 구조에서 나온다고 생각합니다. 특히 다양한 기능과 데이터를 하나의 흐름으로 통합하여 사용자에게 끊김 없는 경험을 제공하는 시스템 설계에 매력을 느껴 지원하게 되었습니다.
                            </p>
                            <p>
                                입사 후에는 서비스 구조와 업무 흐름을 빠르게 파악하고, 안정적인 기능 구현을 통해 서비스의 기반을 견고히 하는 데 기여하겠습니다. 이후에는 시스템 간 연계 구조를 개선하고, 데이터 처리 효율과 확장성을 고려한 아키텍처 설계에 참여하며 더 안정적이고 유연한 서비스를 만드는 역할로 성장하고 싶습니다. 장기적으로는 다양한 환경에서도 일관된 품질을 유지할 수 있는 시스템을 설계하고 운영하는 개발자로 성장하는 것을 목표로 하고 있습니다.
                            </p>
                        </div>

                        <div className="essay-item">
                            <h3>직무역량</h3>
                            <p>실제 서비스를 구축하며 개발 역량을 키워왔습니다. 단순한 기능 구현을 넘어 사용자가 실제 환경에서 사용할 수 있는 시스템을 만드는 것을 목표로 프로젝트를 진행해왔습니다.</p>
                            <p>React 기반 SPA와 Spring Boot 백엔드를 연동하여 위치 데이터 처리와 사용자 상호작용 기능을 포함한 웹 서비스를 구현했습니다. 프론트엔드에서는 React Router를 활용해 화면 전환 구조를 설계하고, 컴포넌트 단위로 기능을 분리하여 유지보수성과 확장성을 확보했습니다. 특히 지도 기반 기능과 사용자 인터랙션이 결합된 환경에서 상태 관리를 통해 실시간 데이터 흐름을 처리하고, 사용자 입력과 위치 데이터에 따라 화면이 동적으로 반영되도록 구현했습니다.</p>
                            <p>백엔드에서는 Spring Boot와 JPA를 활용해 REST API를 설계하고, 사용자 정보 및 활동 데이터를 안정적으로 처리할 수 있는 구조를 구축했습니다. OAuth 2.0 기반 소셜 로그인과 JWT 인증을 적용하여 인증과 인가를 분리하고, 클라이언트와 서버 간 stateless 구조를 유지하도록 설계했습니다. 또한 QueryDSL을 활용해 복잡한 조건의 조회 로직을 효율적으로 처리하며 데이터 접근 성능을 개선했습니다.</p>
                            <p>서비스 특성상 GPS 기반 위치 데이터의 정확도가 중요했기 때문에, 좌표 간 이동 거리와 시간 간격을 기준으로 이상 데이터를 필터링하는 로직을 구현해 데이터 신뢰도를 높였습니다. 이를 통해 실제 사용자 환경에서 발생하는 오차를 줄이고 핵심 기능의 품질을 개선할 수 있었습니다.</p>
                            <p>또한 AWS를 활용해 전체 서비스의 인프라를 직접 설계하고 운영했습니다. EC2 인스턴스에 Spring Boot 애플리케이션과 MySQL 데이터베이스를 배포했으며, Nginx 없이 Spring Boot 내장 Tomcat을 8080 포트로 직접 서비스했습니다. 프론트엔드는 S3에 정적 파일을 업로드하고 CloudFront를 연결하여 CDN을 통한 빠른 콘텐츠 전송과 HTTPS를 적용했습니다. S3는 사용자 프로필 이미지 등과 같은 사진 저장소로도 활용하여 확장 가능한 파일 관리 시스템을 구축했습니다.</p>
                            <p>특히 AWS Lambda를 활용한 자동화에도 주력했습니다. Selenium 기반의 마라톤 데이터 크롤링을 Lambda 함수로 구현하여 CloudWatch를 통해 일일 자동 실행되도록 스케줄링했고, 서버 모니터링용 Lambda 함수를 별도로 개발하여 EC2 인스턴스의 상태를 주기적으로 확인하고 문제 발생 시 알람과 함께 서버를 재시작할 수 있는 관리 시스템을 구축했습니다.</p> <p>보안 측면에서는 개발 환경과 프로덕션 환경을 분리하여, 로컬에서는 환경 변수를 통한 Static Credentials를 사용하고 프로덕션에서는 IAM Role 기반 인증을 적용했습니다. 또한 환경 변수를 통해 Disk와 S3 스토리지를 선택적으로 전환할 수 있도록 설계하여 개발과 운영 환경의 유연성을 확보했습니다.</p>
                            <p>이러한 경험을 통해 프론트엔드, 백엔드, 인프라를 하나의 흐름으로 이해하게 되었고, 기술 선택과 구조 설계가 서비스 품질과 직결된다는 것을 체감했습니다.</p>
                        </div>

                        <div className="essay-item">
                            <h3>협업 및 소통의 경험</h3>
                            <p>
                                퍼솔켈리코리아에서 근무하며 협업 과정 속에서 사용자 중심의 기준으로 의사결정을 조율하는 경험을 했습니다. 개발은 단순한 기능 구현이 아니라, 다양한 이해관계자의 관점을 정렬하고 실제 사용자의 관점에서 최적의 방향을 도출하는 과정임을 깨달았습니다.
                            </p>
                            <p>
                                JSP 기반 웹 서비스 개발을 진행하던 중, 프로젝트 중반에 담당자로부터 화면 구조 전면 수정 요청을 받았습니다. 이미 주요 기능이 구현된 상태였기 때문에 일정 지연과 기능 안정성에 대한 부담이 컸고, 저는 기술적 안정성과 일정을 우선 고려해야 한다고 판단했습니다. 반면 담당자는 사용자가 이해하지 못하는 기능은 의미가 없다며 사용자 경험 중심의 개선을 강조했고, 이 과정에서 개발자와 기획자 간 관점 차이로 의견 충돌이 발생했습니다.
                            </p>
                            <p>
                                처음에는 개발자로서 기능 구현이 중요하다고 생각했지만 실제 사용자 이용 흐름을 다시 검토하는 과정에서 기존 화면 구조가 직관적이지 않다는 점을 인지하게 되었습니다. 이를 통해 기술적으로 완성도가 높더라도 사용자가 쉽게 이해하고 활용할 수 없다면 좋은 서비스라고 보기 어렵다는 것을 깨달았습니다.
                            </p>
                            <p>
                                이후 담당자와 서로의 우려와 목적을 공유하며, 사용자 동선을 기준으로 개선 범위를 함께 재정의했습니다. 전면 수정이 아닌 주요 사용자 흐름에 영향을 주는 화면을 중심으로 개선하고, 부가 기능은 유지하는 방향으로 협의했습니다. 또한 변경 사항과 진행 상황을 지속적으로 공유하며 협업 과정에서의 혼선을 줄였습니다.
                            </p>
                            <p>
                                그 결과 일정 지연을 최소화하면서 프로젝트를 안정적으로 마무리할 수 있었고, 협업에서 중요한 것은 각자의 관점을 주장하는 것이 아니라 공통의 목표를 기준으로 문제를 재정의하는 것임을 깨달았습니다.
                            </p>
                            <p>
                                또한 군 복무 중 참여한 군장병 SW 해커톤에서는 제한된 환경 속 협업을 통해 문제 해결 능력을 입증했습니다. 불규칙한 훈련과 근무로 개발 시간이 제한된 상황에서 개인의 속도보다 팀 전체의 흐름을 유지하는 것이 중요했습니다. 클라우드 IDE와 Git을 활용해 개발 환경의 제약을 해결하고, Notion과 Slack을 통해 작업과 진행 상황을 투명하게 공유했습니다. 또한 팀원들의 상황에 따라 역할을 유연하게 조정하고 스프린트 회의를 통해 작업 우선순위를 지속적으로 조율했습니다. 그 결과 제한된 환경 속에서도 프로젝트를 완수하여 장려상을 수상할 수 있었습니다.
                            </p>
                            <p>
                                이러한 경험을 통해 예기치 않은 갈등이나 제약이 발생하더라도 상황을 분석하고 해결 방안을 실행으로 옮긴다면 어떤 환경에서도 성과를 만들어낼 수 있다는 자신감을 갖게 되었습니다. 앞으로도 사용자 중심의 기준과 열린 소통을 바탕으로, 다양한 이해관계자와 함께 더 나은 서비스를 만들어가는 개발자가 되겠습니다.
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
