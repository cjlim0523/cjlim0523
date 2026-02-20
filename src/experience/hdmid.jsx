import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hdmid.css';

export default function HdMedi() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hdmid">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/hdmedicover.webp"
                    alt="HD Medi Cover"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">에이치디메디 (HD Medi) 인턴십</h1>
                    <p className="hero-subtitle">2023.12 ~ 2024.02 | Python Data Analyst Internship</p>
                </div>
            </div>

            {/* COMPANY INFO ========================= */}
            <section className="section">
                <h2>기업 소개</h2>
                <ul>
                    <li><strong>서비스:</strong> 의약품 부작용 문제 해결을 위한 의약 정보 서비스 (아이약 등)</li>
                    <li>
                        <strong>목표:</strong><br />
                        - 의료 빅데이터 활용을 통한 의료 정보 불균형 해소<br />
                        - 사용자 맞춤형 의약 정보 제공<br />
                        - 자사 앱을 통한 온라인 복약지도 확대
                    </li>
                    <li><strong>서비스 링크:</strong> <a href="https://www.hdmedi.site/" target="_blank" rel="noopener noreferrer" className="link-text">https://www.hdmedi.site/</a></li>
                </ul>
            </section>

            {/* WORK OVERVIEW ========================= */}
            <section className="section">
                <h2>업무 개요</h2>
                <p>
                    <strong>기간:</strong> 2023.12 ~ 2024.02
                </p>
                <p>
                    <strong>주요 업무:</strong><br />
                    Python 기반 의약품 데이터 수집·가공 업무를 수행하며,<br />
                    공공데이터 API와 웹 크롤링을 결합한 데이터를 수집했습니다.
                </p>
            </section>

            {/* DETAILED TASKS ========================= */}
            <section className="section">
                <h2>구체적 업무 사항</h2>
                <ul>
                    <li>의약품 안전나라 데이터를 대상으로 Python 기반 의약품 정보 크롤링 구현</li>
                    <li>공공데이터 포털 API 연동을 통해 인증키 기반 요청 처리 및 데이터 수집</li>
                    <li>API 응답 데이터를 Python으로 파싱·정제·변환하여 서비스 활용 구조로 가공</li>
                    <li>Selenium을 활용한 동적 웹페이지 자동화 크롤링으로 데이터 누락 영역 보완</li>
                    <li>Pandas를 활용한 데이터 정제 및 구조화 작업 수행</li>
                    <li>수집된 데이터를 바탕으로 자사 어플 ‘아이약’의 ‘쉬운 홈 화면’ 기능 기획에 참여</li>
                </ul>
            </section>

            {/* INTERNSHIP GOALS ========================= */}
            <section className="section">
                <h2>인턴십 목표 및 계획 수립</h2>

                <h3>직무 선택의 이유</h3>
                <p>
                    데이터 분야에 대한 관심을 바탕으로, 실제 서비스에 활용되는 데이터 수집·가공 업무를 경험하고자 인턴십에 참여했습니다.<br />
                    학교에서 학습한 Python 문법과 데이터 크롤링 수업 내용을 실무 환경에 적용하며,<br />
                    단순 과제가 아닌 <strong>서비스 관점의 데이터 처리 경험</strong>을 쌓는 것을 목표로 했습니다.
                </p>

                <h3>인재상 (어떤 개발자가 될 것인가)</h3>
                <p>
                    <strong>빠르게 변하는 요구사항에 대응할 수 있는 개발자</strong>를 목표로 삼고 있습니다.<br />
                    인턴십 기간 동안 팀원들과 사수의 업무 방식을 지켜보며,<br />
                    요구사항을 정확히 이해하고 구현으로 빠르게 연결하는 역량이 실무에서 얼마나 중요한지 체감했습니다.<br />
                    이후 어떠한 요구에도 근거 있는 설계와 구현으로 대응할 수 있는 개발자로 성장하기 위해 개인 역량 강화를 지속하고 있습니다.
                </p>
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>회고</h2>

                <h3>아쉬운 점</h3>
                <p>
                    초기에는 설계보다 빠른 구현에 집중하며 코드를 작성했고,<br />
                    그 결과 불필요한 연산이 늘어나 러닝타임 저하와 유지보수 어려움이 발생했습니다.<br />
                    이 경험을 통해 실무 환경에서는 기능 동작 여부뿐 아니라 <strong>구조와 성능을 함께 고려하는 개발</strong>이 필수적임을 깨달았습니다.
                </p>

                <h3>개선 방안</h3>
                <p>
                    이후 기능 구현 전 로직 흐름을 먼저 설계하고, 데이터 처리 단위를 분리하며 예외 상황을 사전에 검토하는 습관을 들였습니다.<br />
                    코드 작성 시 데이터 흐름과 연산 비용을 고려하며,<br />
                    선택한 구현 방식에 대해 스스로 설명할 수 있는 <strong>근거 중심 개발</strong>을 목표로 하고 있습니다.
                </p>

                <h3>느낀 점</h3>
                <p>
                    첫 인턴 경험을 통해 상업용 서비스 개발은 작은 코드 하나에도 <strong>사용자 영향과 운영 안정성</strong>이 직결된다는 점을 체감했습니다.<br />
                    실제 서비스 코드를 분석하고 개선하는 과정은 개발 기술뿐 아니라,<br />
                    문제를 바라보는 관점과 사고 방식을 한 단계 성숙하게 만들어 준 경험이었습니다.
                </p>
            </section>

            {/* CERTIFICATE ============================== */}
            <section className="section">
                <h2>수료증</h2>
                <img
                    src="./project/hdmediinternship.png"
                    alt="Internship Certificate"
                    style={{ maxWidth: '80%', margin: '2rem auto', display: 'block' }}
                />
            </section>
        </div>
    );
}
