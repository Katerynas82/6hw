import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const phoneRegExp = /^(\+380|0)\d{9}$/;

const ContactFormSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short! Min 3 symbols.")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNum: Yup.string()
    .matches(
      phoneRegExp,
      "Invalid phone number. Must be a valid Ukrainian number"
    )
    .required("Phone number is required"),
});

const ContactForm = () => {
  const initialValues = {
    contactName: "",
    number: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
   const newContact = { id: nanoid(), contactName: values.contactName, number: values.number };
   console.log("New contact:", newContact);
    dispatch(addContact(newContact));
    options.resetForm();
  };
 
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactFormSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              name="contactName"
              className={styles.input}
              placeholder="Add contact name"
            />
            <ErrorMessage
              name="contactName"
              component="p"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            <span>Phone number</span>
            <Field
              type="tel"
              name="number"
              className={styles.input}
              placeholder="Add contact phone"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            />
          </label>
          <button
            type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
