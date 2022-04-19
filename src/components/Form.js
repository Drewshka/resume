import FormSubmit from "./FormSubmit";
import FormModal from "./FormModal/FormModal";

export default function Form(props) {
  const submitted = props.submittted;
  if (submitted) {
    return <FormSubmit />;
  }
  return <FormModal />;
}
