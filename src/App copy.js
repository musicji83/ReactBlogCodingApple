import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '뇌파 촬영 지점 GPS 정보';
  // State변수 선언
  // a = useState에 저장된 변수이고 b = useState에 저장된 함수이다.
  let [실험제목,실험제목을변경하는함수] = useState('뇌파감정정보분석-221202','뇌파감정정보분석-221203','뇌파감정정보분석-221204');
  let [플랫폼타이틀,플랫폼타이틀변경함수] = useState('EEG데이터기반 감성지도');

  //return()안에는 병렬로 태그 2개이상 기입금지 
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{플랫폼타이틀}</h4>
      </div>
      <div className='list'>
        <h4>{실험제목}</h4>
        <p>2021년 5월 20일</p>
      </div>
      <h4 style={{color:'red', fontSize:'16px'}}> { post } </h4>
    </div>
  );
}

export default App;
