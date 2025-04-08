import React from "react";

function AboutMe() {
  return (
    <div id="aboutme" className="container-fluid p-4 vh-90">
      <h2 className="text-center mt-4 mb-4">About Me</h2>
      <div className="d-flex flex-column align-items-center m-4 p-4">
        <img
          src={`${process.env.PUBLIC_URL}/images/dahyun_photo.png`}
          className="profile"
          alt="김다현 프로필"
        />
        <div className="badge-container">
          <span className="neon-badge">#즉시실행</span>
          <span className="neon-badge">#반응형퍼블리싱</span>
          <span className="neon-badge">#UIUX중심</span>
        </div>
      </div>
      <h3 className="text-center mb-4">김다현</h3>
      <h3 className="text-center"> | 웹표준과 사용자 중심을 추구하는 웹 퍼블리셔 </h3>
      <div className="lists pt-4 d-flex justify-content-center">
        <ul className="nes-list is-circle text-white">
          <li>
            <span className="highlight">즉시 실행하는 실전형 웹 퍼블리셔</span>
          </li>
          <li>
            <p>
              HTML, CSS, JavaScript 기반으로{" "}
              <span className="highlight">웹사이트 UI 구현 및 퍼블리싱</span>을 수행한 경험이
              있습니다.
            </p>
          </li>
          <li>
            <span className="highlight">반응형 웹 구현 경험 보유</span>
          </li>
          <li>
            <p>
              다양한 디바이스 해상도에 대응하는 레이아웃을 구현하며{" "}
              <span className="highlight">Bootstrap 및 Media Query를 활용</span>하였습니다.
            </p>
          </li>
          <li>
            <span className="highlight">전 직장에서 웹사이트 기획 및 퍼블리싱을 담당</span>
          </li>
          <li>
            <p>
              교육기관 홈페이지를 리뉴얼하며{" "}
              <span className="highlight">정보 구조를 재설계하고 콘텐츠 UI를 개선</span>하였습니다.
            </p>
          </li>
          <li>
            <span className="highlight">RPA+시큐어코딩 수강 중 실전 프로젝트 수행</span>
          </li>
          <li>
            <p>
              ‘휴일도 안심’ 프로젝트에서는{" "}
              <span className="highlight">Figma를 활용한 기획과 HTML/CSS/JS 퍼블리싱</span>을 직접
              수행했습니다.
            </p>
          </li>
          <li>
            <p>
              단순 구현을 넘어{" "}
              <span className="highlight">사용자 흐름과 시각적 직관성을 고려한 설계</span>에
              집중했습니다.
            </p>
          </li>
          <li>
            <span className="highlight">React 기반 프로젝트 경험 보유</span>
          </li>
          <li>
            <p>
              React와 Axios를 통해 API 연동을 구현하며{" "}
              <span className="highlight">컴포넌트 기반 개발</span>을 익혔고, 현재 Next.js도 학습
              중입니다.
            </p>
          </li>
          <li>
            <span className="highlight">웹 표준 & 접근성 기반 UI 구현 지향</span>
          </li>
          <li>
            <p>
              의미 있는 마크업과 시맨틱 구조를 기반으로,{" "}
              <span className="highlight">모두가 접근 가능한 UI</span>를 만드는 것을 목표로 합니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
