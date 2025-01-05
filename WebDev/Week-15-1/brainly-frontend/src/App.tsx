import "./App.css";
import { Button } from "./components/Buttons";
import { Card } from "./components/Card";
import { Sidebar } from "./components/Sidebar";
import { PlusIcon } from "./icons/Plusicon";
import { ShareIcon } from "./icons/Shareicon";

function App() {
  return <div className="p-4">
      <div className="flex justify-end gap-4">
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
        <div className="flex space-x-8 ">
        <Card type="youtube" title="Youtube Video" link="https://www.youtube.com/watch?v=ktb_SIQKErQ" />
        <Card type="twitter" title="Twitter Tweet" link="https://x.com/FabrizioRomano/status/1875972548904796406" />
        <Card type="twitter" title="Twitter Tweet" link="https://x.com/FabrizioRomano/status/1875972548904796406" />
        </div>
        </div>
}

export default App;
