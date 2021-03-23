import React from "react";
import styles from "./appContent.module.scss";

function AppContent() {
  console.log("AppContent init");
  return <div>Sharan</div>;
}

interface AppContentProps {
  AppContent: string;
}

export default React.memo(AppContent);

// import React, {
//   createContext,
//   ReactChild,
//   ReactChildren,
//   useReducer,
// } from "react";

// const initialState = {
//   isAuthenticated: false,
// };

// export const AuthContext = createContext(initialState);
// function AppContent({ children }: AppContentProps) {
//   const reducer = (reducer_state: AuthType, action: AuthAction) => {
//     switch (action.type) {
//       case "LOGIN":
//         return {
//           ...reducer_state,
//           isAuthenticated: true,
//         };
//       case "LOGOUT":
//         localStorage.clear();
//         return {
//           ...reducer_state,
//           isAuthenticated: false,
//         };
//       default:
//         return reducer_state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// interface AppContentProps {
//   children: ReactChild | ReactChildren;
// }

// export default AppContent;
