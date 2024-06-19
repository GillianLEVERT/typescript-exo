
//type
type GreetingType = {
  name?: string;
  items: string[];
};

const Greeting = (props: GreetingType) => {
  return (
    <div>
      <p>Hello {props.name ?? "Default"}</p>
      <ul className="list-disc list-inside">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const App = () => {
  return (
    <div className="m-auto px-4 max-w-sm my-4 font-bold">
      <Greeting items={["Item 1"]} name="Gillian" />
    </div>
  );
};
