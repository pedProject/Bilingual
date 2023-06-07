import { useEffect, useState } from "react";

const SelectConcept = () => {
  const [state, setState] = useState("string");
  console.log(state);

  useEffect(() => {
    return () => {
      setState("");
    };
  }, []);

  return <div>SelectConcept</div>;
};

export { SelectConcept as SelectTheMainIdea, SelectConcept as SelectBestTitle };
