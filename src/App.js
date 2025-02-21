import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Main from "./pages/HomeMain";
import ImageMain from "./pages/ImageMain";
import Navbar from "./Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import LoginHandler from "./LoginHandler";
import MyPage from "./pages/mypage/Mypage";
import Record from "./pages/mypage/Record";
import PlanList from "./pages/mypage/PlanList";
import Bookmark from "./pages/mypage/Bookmark";
import Review from "./pages/mypage/Review";
import QNA from "./pages/qna/QNA";
import QNADetail from "./pages/qna/QNADetail";
import QuestionCreate from "./pages/qna/QuestionCreate";
import QuestionModify from "./pages/qna/QuestionModify";
import PlanMain from "./pages/createplan/PlanMain";
import ChoiceRecommendYn from "./pages/createplan/ChoiceRecommendYn";
import ChoiceAccommodation from "./pages/createplan/ChoiceAccommodation";
import ChoiceSightN from "./pages/createplan/recommendNo/ChoiceSightN";
import ChoiceSightY from "./pages/createplan/recommendYes/ChoiceSightY";
import ChoiceTransY from "./pages/createplan/recommendYes/ChoiceTransY";
import ChoiceTransN from "./pages/createplan/recommendNo/ChoiceTransN";
import UserinfoModify from "./pages/mypage/UserinfoModify";
import ShowSelection from "./pages/createplan/ShowSelection";
import ShowSelectionNo from "./pages/createplan/ShowSelectionNo";
import InputWeight from "./pages/createplan/recommendYes/InputWeight";
import PlanDetail from "./pages/mypage/PlanDetail";
import Sights from "./pages/Sights";
import ShareList from "./pages/mypage/Share";
import ShareDetail from "./pages/mypage/ShareDetail";


function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Login이 되어 있으면, setIsLogin상태 유지
    if (localStorage.getItem("userid") !== null) {
      setIsLogin(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<ImageMain />} />
            <Route path="/sights" element={<Sights />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>} />
            <Route path="/share" element={<ShareList />} />
            <Route path="/sharepost/:post_id" element={<ShareDetail />} />
            <Route path="/qna" element={<QNA />} />
            <Route path="/qna/:id" element={<QNADetail />} />
            <Route path="/qna/question-create" element={<QuestionCreate />} />
            <Route path="/qna/question-modify/:id" element={<QuestionModify />} />
            <Route path="/createplan" element={<PlanMain />} />
            <Route path="/createplan/choiceaccommodation" element={<ChoiceAccommodation />} />
            <Route path="/createplan/choicerecommedYN" element={<ChoiceRecommendYn />} />
            <Route path="/createplan/y/inputweights" element={<InputWeight />} />
            <Route path="/createplan/y/choicesights" element={<ChoiceSightY />} />
            <Route path="/createplan/n/choicesights" element={<ChoiceSightN />} />
            <Route path="/createplan/y/choicetransportation" element={<ChoiceTransY />} />
            <Route path="/createplan/n/choicetransportation" element={<ChoiceTransN />} />
            <Route path="/createplan/showselection" element={<ShowSelection />} />
            <Route path="/createplan/showselectionNo" element={<ShowSelectionNo />} />
            <Route path="/mypage/modify" element={<UserinfoModify />} />
            <Route path="/mypage/planlist" element={<PlanList />} />
            <Route path="/mypage/planlist/plan/:schedule_id" element={<PlanDetail />} />
            <Route path="/mypage/record" element={<Record />} />
            <Route path="/mypage/bookmark" element={<Bookmark />} />
            <Route path="/mypage/review" element={<Review />} />
            {/* <Route path="login/oauth/callback/kakao" 
              element={<LoginHandler />}  // redirect_url에 맞춰 꾸밀 컴포넌트
              /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
