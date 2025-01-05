import "./App.css";
import { Button } from "./components/Buttons";
import { PlusIcon } from "./icons/Plusicon";
import { ShareIcon } from "./icons/Shareicon";

function App() {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <h1 className="text-3xl font-bold flex"><img src="/public/brainly-icon.png" alt="logo" className="w-8 h-8"/>Second Brain</h1> 
      </div>
      <div className="flex-1 mt-4 p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">All Notes</h1>
        </div>
        <div className="flex">
          <Button
            startIcon={<ShareIcon size="md" />}
            size="md"
            variant="secondary"
            text="Share Brain"
            onClick={() => {}}
          />
          <Button
            startIcon={<PlusIcon size="md" />}
            size="md"
            variant="primary"
            text="Add Content"
            onClick={() => {}}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
