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
  // 동적모달로 모달창이 닫히고 열리는 상태를 보여줌
  let [동적모달, 셋팅동적모달] = useState(false);

  // 자주 바뀌는 숫자이므로 state로 만들자
  // let [따봉, 따봉변경함수] = useState(0);
  let [따봉, 따봉변경함수] = useState([0,0,0]);

  // 뇌파 ERP 데이터를 state로 만들자
  let [ERP데이터, ERP데이터변경함수] = useState('ERP 데이터를 불러오는 중입니다.');

  // function 함수() {
  //   var newArray = [...실험제목];
  //   newArray[0] = '뇌파감정정보분석-221205';
  //   실험제목을변경하는함수(newArray);
  // }

  //모든 array자료 뒤에는 map을 붙일 수 있음
  // [1,2,3].map(function(){ })
  // map함수 안의 function은 배열의 갯수만큼 반복실행을 해줌.

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

    

        {
          실험제목.map(function (글, i) {
            return (
              <div className='list'>
                <h4 onClick={()=>{셋팅동적모달(!동적모달)}}> {실험제목[i]} <span onClick={() => { let 따봉copy = [...따봉]; 따봉copy[i] = 따봉copy[i] + 1; 따봉변경함수(따봉copy); console.log(따봉); }}>👍</span> {따봉[i]} </h4>
                <p>2021년 5월 20일</p>
                {/* <hr /> */}
              </div>
            )
          })
        }


        {
          // [<div>안녕</div>, <div>안녕</div>, <div>안녕</div>]과 같이 반복은 하단의 map함수를 사용하면 됨.
          // map함수는 배열의 갯수만큼 반복실행을 해줌.
          // map함수 안의 function은 배열의 갯수만큼 반복실행을 해줌.
          [1, 2, 3].map(function () {
            return (
              <div>
                <h4>안녕</h4>
              </div>
            )
          })
        }


        {/* <EEGDataDetailModal></EEGDataDetailModal> */}
        {/* 상단의 동적Modal변수가 true면 작동, false면 비작동을 뜻함. */}
        {/* 모달창 작동 조건식 */}
        {
          동적모달 == true ? <EEGDataDetailModal color = {'skyblue'} 작명={실험제목} 실험제목을변경하는함수={실험제목을변경하는함수} ></EEGDataDetailModal> : null
        }


      <h4 style={{ color: 'red', fontSize: '16px' }}> {post} </h4>
    </div>
  );
}

// 컴포넌트 만드는 법  1. function 함수로 만들고 2. return()안에 html 담기 3. App()안에 <함수명></함수명>쓰기 
// 어떤걸 컴포넌트로 만들면 좋은가? 1. 반복적인 html 축약할때 2. 큰페이지들 3. 자주변경되는것들


// prop는 무조건 부모가 자식에게만 전송이 진행됨
// 부모 -> 자식 state 전송하는 법
// 1.<자식컴포넌트 작명={state이름}>
// 2.자식객체 파라미터에 props를 입력하고 props.작명 사용

// function안의 컴포넌트에는 하나의 div태그만 들어가야함
function EEGDataDetailModal(props){
  return(
    <div className='modal' style={{background : props.color}}>
        <h4>{props.작명[0]}</h4>
        <p>2022년 5월 20일</p>
        <p>집중도: 50, 스트레스: 50, 흥미도: 50</p>
        <button onClick={()=>{let copy = [...props.작명]; copy[0] = '여성뇌파감정정보분석-221210'; props.실험제목을변경하는함수(copy)}}>글수정</button>
      </div>
  )
}

/*[동적인 UI만드는 step]
1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성
*/ 

// git 테스트를 위해서 해당 주석을 추가함
// git 테스트를 위해서 해당 주석을 2번 추가함.

export default App;
