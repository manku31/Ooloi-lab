import { useQuery } from "react-query";
import * as oolib from "oolib";

const fetchFormConfig = async () => {
  const response = await fetch("http://localhost:8000/api/form/formdata");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Form = () => {
  const { data, error, isLoading } = useQuery("formConfig", fetchFormConfig);
  const LoaderOverlay = oolib.LoaderOverlay;

  const componentMapping = { ...oolib };

  if (isLoading) {
    return <LoaderOverlay loaderText={"Components Loading....."} />;
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="form-container">
      <h1>Dynamic Form</h1>
      <form>
        {data.map((component, index) => {
          const Component = componentMapping[component.comp];
          if (!Component)
            return <LoaderOverlay loaderText={"Components Loading...."} />;
          return (
            <div key={index}>
              <Component
                {...component.props}
                isRequired={component.isRequired}
                onChange={() => {}}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Form;
