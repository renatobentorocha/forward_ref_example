import React, { useRef, useEffect } from "react";
import Input from "./components/Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    console.log({ inputRef });
  }, []);

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <Input ref={inputRef} />
    </div>
  );
}

export default App;