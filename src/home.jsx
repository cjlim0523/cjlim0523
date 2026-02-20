import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="background-glow"></div>

            <div className="content-wrapper">
                {/* Profile + Intro */}
                <section className="hero-section glass-panel hero-soft">
                    <div className="hero-grid hero-soft-grid">
                        {/* Left Column: Profile + Identity */}
                        <div className="profile-column">
                            <div className="profile-area">
                                <div className="profile-wrapper">
                                    <img src="./profile.jpg" alt="profile" className="profile-img" />
                                    <div className="profile-glow"></div>
                                </div>
                            </div>
                            <h1 className="name-title">임채주</h1>
                            <p className="role-badge">매일 정진하는 개발자 임채주 입니다</p>
                        </div>

                        {/* Right Column: Intro + Info List */}
                        <div className="info-area">
                            <div className="intro-area-inline">
                                <p className="intro-text">
                                    책임감을 갖고 임무완수하여 유의미한 성과를 창출하는 인재입니다.
                                </p>
                            </div>

                            <div className="info-list">
                                <div className="info-item">
                                    <span className="info-label">이메일</span>
                                    <span className="info-value">cjlim0523@naver.com</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">전화번호</span>
                                    <span className="info-value">010-8622-9529</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Github</span>
                                    <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer" className="info-value info-link">
                                        github.com/cjlim05
                                    </a>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">학력</span>
                                    <span className="info-value">서경대학교(소프트웨어학과)</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">이력서</span>
                                    <Link to="/resume" className="info-value info-link">
                                        이력서 보기
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stacks */}
                <section className="stack-section">
                    <h2 className="section-title">Tech Stack</h2>
                    <div className="stack-grid">
                        {[
                            { name: "React", img: "/stacks/React-icon.svg.png" },
                            { name: "Java", img: "/stacks/Java.png" },
                            { name: "AWS", img: "/stacks/aws.png" },
                            { name: "Python", img: "/stacks/Python.png" },
                            { name: "MySQL", img: "/stacks/mysql.png" },
                            { name: "Git", img: "/stacks/git.png" },
                            { name: "Linux", img: "/stacks/linux.png" }
                        ].map((stack) => (
                            <div
                                key={stack.name}
                                className="stack-card glass-card"
                                style={{ backgroundImage: `url(${stack.img})` }}
                            >
                                <div className="stack-overlay"></div>
                                <span className="stack-name">{stack.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Summary Grid */}
                <section className="summary-section">
                    <div className="summary-grid">
                        <div className="summary-card glass-card">
                            <h3>Experience</h3>
                            <ul className="custom-list">
                                <li>
                                    <Link to="/experience/persol" className="list-link">
                                        <img src="./project/persolkellythumbnail.webp" alt="persol" className="list-thumb" />
                                        <span>퍼솔켈리코리아 인턴십</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/experience/hdmid" className="list-link">
                                        <img src="./project/hdmedithumbnail.webp" alt="hdmedi" className="list-thumb" />
                                        <span>에이치디메디 인턴십</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/experience/swacademy" className="list-link">
                                        <img src="./project/sw.webp" alt="sw academy" className="list-thumb" />
                                        <span>SW인재양성 교육</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/experience/military" className="list-link">
                                        <img src="./project/osamthumbnail.webp" alt="military" className="list-thumb" />
                                        <span>군장병 SW 해커톤</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="summary-card glass-card">
                            <h3>Projects</h3>
                            <ul className="custom-list">
                                <li>
                                    <Link to="/projects/chanjurun" className="list-link">
                                        <img src="./project/chanjurunthumbnail.webp" alt="chanjurun" className="list-thumb" />
                                        <span>찬주런</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects/neurodiversity" className="list-link">
                                        <img src="./project/newrodiversitythumbnail.webp" alt="neuro" className="list-thumb" />
                                        <span>뉴로다이버시티 홈페이지</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects/aiyak" className="list-link">
                                        <img src="./project/iyakcover.webp" alt="iyak" className="list-thumb" />
                                        <span>아이약 데이터 크롤링</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects/autoshot" className="list-link">
                                        <img src="./project/smartguncabinet.png" alt="gun" className="list-thumb" />
                                        <span>자동 실셈 총기함</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="summary-card glass-card">
                            <h3>Awards</h3>
                            <ul className="custom-list">
                                <li>
                                    <Link to="/award/military" className="list-link">
                                        <img src="./project/osamthumbnail.webp" alt="award1" className="list-thumb" />
                                        <span>군장병 SW 장려상</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/award/hecto" className="list-link">
                                        <img src="./project/hecto.jpg" alt="award2" className="list-thumb" />
                                        <span>헥토 SW 아카데미 은상</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
