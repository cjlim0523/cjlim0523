import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './persol.css';

export default function Persol() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="persol">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/persolkellycover.webp"
                    alt="PERSOLKELLY Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">퍼솔켈리코리아 IT부서 인턴쉽</h1>
                    <p className="hero-subtitle">2024.06 ~ 2024.08 | IT Department Internship</p>
                </div>
            </div>

            {/* OVERVIEW ========================= */}
            <section className="section">
                <h2>인턴십 개요</h2>
                <ul>
                    <li><strong>기업:</strong> 퍼솔켈리코리아 (글로벌 헤드헌팅 기업)</li>
                    <li><strong>소속:</strong> 기업 내 IT 부서</li>
                    <li><strong>기간:</strong> 2024.06 ~ 2024.08</li>
                </ul>
                <p>
                    <strong>주요 업무:</strong><br />
                    - JSP·MySQL 기반 협회 소개 웹페이지 개발 및 운영<br />
                    - 사내 IT Helpdesk 업무 수행 및 사용자 이슈 트러블슈팅
                </p>
            </section>

            {/* GOALS ========================= */}
            <section className="section">
                <h2>인턴십 목표 및 계획 수립</h2>
                <p>
                    <strong>직무 선택의 이유:</strong><br />
                    기본적으로 개발자라면 IT 회사만 떠올리기 쉽지만, 대부분의 기업에는 IT 부서가 존재합니다.<br />
                    시각의 폭을 넓혀 일반 기업 내 IT 부서에서의 근무를 경험해보고자 지원했습니다.
                </p>
                <p>
                    또한, 학부 과정에서는 깊이 있게 다루기 어려운 <strong>실무 서버 및 보안 환경</strong>을 직접 경험하며<br />
                    현업에서의 개발 프로세스를 익히는 것을 목표로 했습니다.
                </p>
            </section>

            {/* DETAIL TASKS ========================= */}
            <section className="section">
                <h2>구체적 업무 사항</h2>

                <h3>1. 협회 사업 소개 웹페이지 개발 (JSP & MySQL)</h3>
                <ul>
                    <li><strong>KND(뉴로다이버시티) 협회 웹페이지 개발:</strong> JSP와 MySQL을 활용하여 전반적인 사이트 구축</li>
                    <li><strong>관리자 페이지(CRUD) 구축:</strong> 협회 운영진이 직접 사업 정보를 관리할 수 있도록 CMS 설계 및 구현</li>
                    <li><strong>요구사항 기반 개선:</strong> 기획 변경에 따른 화면 구조 및 데이터 모델의 반복적인 최적화 및 유지보수</li>
                </ul>

                <h3>2. IT Helpdesk & Troubleshooting</h3>
                <ul>
                    <li><strong>이슈 대응:</strong> 사내 계정, 장비, 소프트웨어 관련 장애 진단 및 원인 분석</li>
                    <li><strong>효율 개선:</strong> 반복적으로 발생하는 사용자 문의 유형을 분석하여 대응 매뉴얼 정립 및 효율 개선</li>
                </ul>
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>회고</h2>
                <p>
                    <strong>책임감과 실행력:</strong><br />
                    IT 인력이 제한된 환경에서 기획·디자인·개발·배포·유지보수 전 과정을 홀로 주도했습니다.<br />
                    초기 요구사항 분석부터 배포 후 대응까지 <strong>전체 개발 사이클(Full-cycle)</strong>을 경험하며 프로젝트 완수 능력을 길렀습니다.<br />
                    이러한 성과를 인정받아 인턴 종료 후에도 프리랜서로서 프로젝트를 지속할 수 있었습니다.
                </p>
                <br />
                <p>
                    <strong>사용자 중심의 소통:</strong><br />
                    비개발자 현업 담당자와의 협업 과정에서 <strong>'사용자 관점'</strong>의 중요성을 체감했습니다.<br />
                    기술적인 구현 난이도나 제약을 단순히 전달하는 것을 넘어,<br />
                    사용자가 이해할 수 있는 언어로 설명하고 조율하는 과정이 원활한 협업의 핵심임을 배웠습니다.
                </p>
                <br />
                <p>
                    이 경험은 단순히 코드를 짜는 개발자가 아니라,<br />
                    <strong>조직의 문제를 이해하고 기술로 해결책을 제시하는 개발자</strong>로 성장하는 밑거름이 되었습니다.
                </p>
            </section>

            {/* CERTIFICATE ============================== */}
            <section className="section">
                <h2>수료증</h2>
                <img
                    src="./project/persolinternship.png"
                    alt="Internship Certificate"
                    style={{ maxWidth: '80%', margin: '2rem auto', display: 'block' }}
                />
            </section>
        </div>
    );
}
