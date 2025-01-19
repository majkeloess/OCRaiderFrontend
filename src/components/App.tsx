import { LogoAndDescription } from "./App/Logo";
import { FileUpload } from "./FileUpload";

function App() {
  return (
    <div className="flex flex-col justify-center gap-12 mt-10">
      <LogoAndDescription />
      <FileUpload />
    </div>
  );
}

export default App;
