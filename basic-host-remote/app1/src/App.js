import React from "react";
debugger;
const RemoteButton = React.lazy(() => {
  debugger;
  return new Promise((resolve) => {
    resolve({
      default: () => "sss",
    });
  });
  // return import("app2/Button")
});

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton ll="dd" />
    </React.Suspense>
  </div>
);

export default App;
