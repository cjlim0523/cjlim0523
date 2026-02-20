import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './chungiham.css';

export default function Chungiham() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="chungiham">
            {/* HERO COVER ============================== */}
            <div className="hero">
                <Link to="/" className="back-link">← Back to Home</Link>
                <img
                    src="./project/smartguncabinet.png"
                    alt="Smart Gun Cabinet"
                    className="hero-img"
                />
                <div className="hero-overlay">
                    <h1 className="page-title">스마트 총기 보관함 (IoT)</h1>
                    <p className="hero-subtitle">자동 실셈 및 현황 관리 시스템</p>
                </div>
            </div>

            {/* INTRO & LINKS ========================= */}
            <section className="section">
                <h2>Project Motivation</h2>
                <div className="project-links">
                    <a href="https://www.swmaestro.org/sw/main/main.do" target="_blank" rel="noopener noreferrer" className="link-btn">
                        SW Maestro
                    </a>
                    <a href="https://ko-kr.facebook.com/swmaestro/" target="_blank" rel="noopener noreferrer" className="link-btn">
                        Facebook
                    </a>
                </div>
                <br />
                <p>
                    군대에서 총기는 총기보관함에 보관을 합니다. 이때 총기 현황판도 최신화를 해야 하는데요.<br />
                    훈련상황이나 오분대기조일 때 총기현황판을 최신화할 때면 시간이 많이 지체가 됩니다.
                </p>
                <p>
                    <strong>그래서 자동으로 총기를 실셈해주는 IoT 제품을 개발하였습니다.</strong>
                </p>

                <div className="stack-container">
                    <div className="stack-group">
                        <span className="stack-label">Frontend</span>
                        <div className="stack-list">
                            <span className="stack-tag">JavaScript</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Hardware</span>
                        <div className="stack-list">
                            <span className="stack-tag">Raspberry Pi</span>
                            <span className="stack-tag">Arduino</span>
                        </div>
                    </div>
                    <div className="stack-group">
                        <span className="stack-label">Collab</span>
                        <div className="stack-list">
                            <span className="stack-tag">GitHub</span>
                            <span className="stack-tag">Slack</span>
                            <span className="stack-tag">Notion</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES =============================== */}
            <section className="section">
                <h2>How it Works</h2>
                <ul>
                    <li>
                        <strong>레이저 센서 기반 자동 인식:</strong><br />
                        아두이노 레이저 센서를 활용하여 5cm 이내에 사물이 감지되면 총기가 보관된 것으로 판단해 입/출고 상태를 자동으로 갱신합니다.
                    </li>
                    <li>
                        <strong>원터치 사유 입력:</strong><br />
                        총기를 불출할 때 발생하는 다양한 사유(근무, 훈련, 정비 등)를 터치 한 번으로 손쉽게 입력할 수 있도록 UI를 구성했습니다.
                    </li>
                    <li>
                        <strong>대시보드 모니터링:</strong><br />
                        라즈베리파이와 모니터를 연결하여 자바스크립트로 구성된 현황판 화면을 실시간으로 띄워줍니다.
                    </li>
                </ul>
                <div className="notion-link-container">
                    <h3 className="notion-link-title">프로젝트 자세히 보기</h3>
                    <a href="https://www.notion.so/2c4b85e2669e4c588de0142283f704b0" target="_blank" rel="noopener noreferrer" className="link-btn">
                        프로젝트 내용 (Notion) ↗
                    </a>
                </div>
            </section>

            {/* RETROSPECTIVE ============================== */}
            <section className="section">
                <h2>Retrospective</h2>
                <p>
                    <strong>느낀 점:</strong><br />
                    병사 신분으로 서로 다른 부대에 소속된 팀원들과 비대면 환경에서 협업해야 했고,<br />
                    제한된 시간과 자원 속에서 프로젝트를 완수해야 하는 상황이었습니다.
                </p>
                <p>
                    이러한 제약을 극복하기 위해 Notion으로 일정과 역할을 정리하고,<br />
                    GitHub 기반 버전 관리와 Anaconda 환경 통일, Slack을 활용한 실시간 소통 체계를 구축했습니다.
                </p>
                <p>
                    결과적으로 장려상을 수상했으며, 열악한 환경에서도 역할 분담과 협업 도구를 적극 활용해<br />
                    프로젝트를 완성해냈다는 점에서 큰 의미가 있었습니다.<br />
                    이에 어떤 상황에서 해낼 수 있다는 강한 자신감을 갖게 되었습니다.
                </p>
                <p>
                    이 경험을 통해 제약이 많은 상황일수록 구조적인 문제 접근과 명확한 협업 체계가<br />
                    개발 성과를 좌우한다는 것을 체감했고,<br />
                    이는 이후 프로젝트에서도 우선적으로 고려하는 개발 원칙이 되었습니다.
                </p>
            </section>
        </div>
    );
}
