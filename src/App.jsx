import Button from "./components/Button";
import { faHome, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="w-[700px] h-screen mx-auto overflow-hidden grid grid-cols-1 sm:grid-cols-4 place-items-center">
      <Button>Default</Button>
      <Button disableShadow>Disable Shadow</Button>
      <Button disabled>Disabled</Button>
      <Button icon={faHome}>Icon Left</Button>
      <Button icon={faUser} iconPosition="right">
        Icon Right
      </Button>
      <Button size="small">Small</Button>
      <Button size="large">Large</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary" outline>
        Outline
      </Button>
      <Button color="secondary" text>
        Text
      </Button>
      <Button color="danger" text>
        Danger
      </Button>
      <Button color="success" text>
        Success
      </Button>
      <Button color="warning" text>
        Warning
      </Button>
      <Button color="secondary" disableShadow>
        No Shadow
      </Button>
      <Button color="secondary" disabled>
        Disabled
      </Button>
      <Button color="secondary" icon={faSearch} iconPosition="right">
        Icon Right
      </Button>
      <Footer />
    </div>
  );
};

export default App;
