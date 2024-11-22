// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home/home";
// import Questions from "./pages/questions/questions";
// import Response from "./pages/response/response";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/questions" element={<Questions />} />
//           <Route path="/response" element={<Response />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; //import Home page Component
import Login from "./pages/Login/Login"; //import Login page Component
import Register from "./pages/Login/Register"; //import Register page Component
import Response from "./pages/response/response"; 
import Questions from "./pages/questions/questions"; 
import NotFound from "./pages/NotFound"
import DefaultLayout from "./Layouts/DefaultLayout"; //import Component for all Users
import ProtectedLayout from "./Layouts/ProtectedLayout"; //import Component for Users with tokens
import NotificationBar from "./NotificationBar"; //import NotificationBar 
import { Roles } from "./constants"; //Having the Roles object will determine if the User has a role which can be authenticated
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { getUsers } from "./slices/userSlice";

function App() {
  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUsers());;
    }
  }, [basicUserInfo]);

  return (
    <>
      <NotificationBar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          element={
            <ProtectedLayout
              allowedRoles={[
                Roles.User,
              ]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedLayout allowedRoles={[Roles.User]} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/response" element={<Response />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
