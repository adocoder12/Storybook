import "./App.css";

//components
import { ClientCard } from "./components/projectCard/Client_card";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <div className="App">
        <h1>React App</h1>
        <ClientCard
          logo="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          title="Google"
          backgroundImgUrl="https://picsum.photos/500"
          category="Search Engine"
        />
        <Service
          title="Service Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor mauris et ipsum varius, et ultrices ligula cursus. Mauris congue finibus libero sit amet consectetur. Donec pulvinar tortor a velit semper, at sollicitudin risus feugiat. Nunc dictum, lorem eget convallis luctus, odio tortor iaculis diam, in volutpat odio purus quis augue. Nam nibh odio, ultrices nec quam ut, viverra aliquam ligula. Sed velit ante, gravida eget condimentum et, malesuada sit amet nibh. Etiam et massa in felis finibus posuere. Nullam tempus iaculis turpis accumsan sagittis. Quisque id sapien quis ante efficitur tincidunt."
          img="https://picsum.photos/500"
        />
      </div>
    </>
  );
}

export default App;
