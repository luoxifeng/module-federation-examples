import React from "react";
// import dd from 'app2/Button'
// import('app2/Button')
const RemoteButton = React.lazy(() => {
  // debugger;
  // return new Promise((resolve) => {
  //   resolve({
  //     default: dd,
  //   });
  // });
  // debugger
  return import('app2/Button')
});

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton ll="d222d" />
    </React.Suspense>
  </div>
);

export default App;
