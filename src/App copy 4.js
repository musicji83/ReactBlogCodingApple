// 하단의 코드는 warning 메세지를 제거하기 위한것
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '뇌파 촬영 지점 GPS 정보';
  // State변수 선언 : 자주 바뀌는 숫자 및 변수를 state로 설정해 놓으면 좋다.
  // 뇌파 및 감정적인 정보도 State 형식의 변수로 선언해 놓으면 좋다.
  // a = useState에 저장된 변수이고 b = useState에 저장된 함수이다.
  let [실험제목, 실험제목을변경하는함수] = useState(['다.뇌파감정정보분석-221202', '나.뇌파감정정보분석-221203', '가.뇌파감정정보분석-221204']);
  let [플랫폼타이틀, 플랫폼타이틀변경함수] = useState('EEG데이터기반 감성지도');

  // 자주 바뀌는 숫자이므로 state로 만들자
  let [따봉, 따봉변경함수] = useState(0);

  // 뇌파 ERP 데이터를 state로 만들자
  let [ERP데이터, ERP데이터변경함수] = useState('ERP 데이터를 불러오는 중입니다.');

  // function 함수() {
  //   var newArray = [...실험제목];
  //   newArray[0] = '뇌파감정정보분석-221205';
  //   실험제목을변경하는함수(newArray);
  // }

  //return()안에는 병렬로 태그 2개이상 기입금지 
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{플랫폼타이틀}</h4>
      </div>

      <button onClick={()=>{
        let copy = [...실험제목];
        copy.sort();
        실험제목을변경하는함수(copy);
      }}> 가나다순 정렬 </button>

      <div className='list'>
        <h4>{실험제목[0]} <span onClick={() => { 따봉변경함수(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2021년 5월 20일</p> 
        {/* <button onClick={() => { 실험제목[0] = 'ERP 데이터를 불러오는 중입니다.'; 실험제목을변경하는함수(실험제목) }}>수정</button> */}
        {/* <button onClick={() => { 실험제목을변경하는함수(['ERP 데이터를 불러오는 중입니다.', '뇌파감정정보분석-221203', '뇌파감정정보분석-221204']) }}>수정</button> */}
        <button onClick={() => { let copy = [...실험제목]; copy[0] = 'ERP 데이터를 불러오는 중입니다.'; 실험제목을변경하는함수(copy) }}>수정</button>
      </div>
      <div className='list'>
        <h4>{실험제목[1]}</h4>
        <p>2021년 5월 20일</p>
      </div>
      <div className='list'>
        <h4>{실험제목[2]}</h4>
        <p>2021년 5월 20일</p>
      </div>

        <EEGDataDetailModal></EEGDataDetailModal>

      <h4 style={{ color: 'red', fontSize: '16px' }}> {post} </h4>
    </div>
  );
}

// 컴포넌트 만드는 법  1. function 함수로 만들고 2. return()안에 html 담기 3. App()안에 <함수명></함수명>쓰기 
// 어떤걸 컴포넌트로 만들면 좋은가? 1. 반복적인 html 축약할때 2. 큰페이지들 3. 자주변경되는것들

// function안의 컴포넌트에는 하나의 div태그만 들어가야함
function EEGDataDetailModal(){
  return(
    <div className='modal'>
        <h4>뇌파 감정정보 상세데이터</h4>
        <p>2022년 5월 20일</p>
        <p>집중도: 50, 스트레스: 50, 흥미도: 50</p>
      </div>
  )
}

export default App;
