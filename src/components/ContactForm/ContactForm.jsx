import { useState } from 'react';
import shortid from 'shortid';
import s from 'components/ContactForm/ContactForm.module.scss';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    console.log(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <div className={s.Group}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />
        <label htmlFor={nameInputId}>Name</label>
        <div className="bar"></div>
      </div>

      <div className={s.Group}>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberInputId}
          onChange={handleChange}
        />
        <label htmlFor={numberInputId}>Number</label>
        <div className="bar"></div>
      </div>
      <button className={s.Btn} type="submit">
        add contact
      </button>
    </form>
  );
}

export default Form;

// Version 2
// const INITIAL_FORM_VALUES = {
//   name: '',
//   number: '',
// };
// function Form({ onSubmit }) {

//   const [values, setValues] = useState(INITIAL_FORM_VALUES);

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     console.log(name, value);

//     setValues(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(values);
//     reset();
//   };

//   const reset = () => {
//     setValues({ ...INITIAL_FORM_VALUES });
//   };

// ver 3
// const onNameChange = e => {
//   const { value } = e.currentTarget;
//   setName(value);
// };

// const onNumberChange = e => {
//   const { value } = e.currentTarget;
//   setNumber(value);
// };
