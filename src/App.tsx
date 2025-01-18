import { Logo } from "./components/Logo";
import { FileUpload } from "./components/FileUpload";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <FileUpload />
    </div>
  );
}

export default App;
