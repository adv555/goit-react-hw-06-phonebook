import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
// import { FaUser, FaMobileAlt } from 'react-icons/fa';
import s from 'components/ContactForm/ContactForm.module.scss';
import { addContact } from 'redux/actions';

export default function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact(name, formatPhoneNumber(number)));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const formatPhoneNumber = number => {
    //Filter only numbers from the input
    let cleaned = ('' + number).replace(/\D/g, '');
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);

    return match ? +match[1] + '-' + match[2] + '-' + match[3] : number;
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <div className={s.Group}>
        {/* <label htmlFor={nameInputId}>Name</label> */}
        {/* <FaUser style={{ position: 'absolute', top: '22px', left: '5px' }} size="13px" /> */}
        <input
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />

        <div className="bar"></div>
      </div>

      <div className={s.Group}>
        {/* <label htmlFor={numberInputId}>Number</label> */}
        {/* <FaMobileAlt
          style={{ position: 'absolute', top: '20px', left: '5px' }}
          size="calc(14px + 0.3vmin)"
        /> */}
        <input
          type="tel"
          name="number"
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberInputId}
          onChange={handleChange}
        />

        <div className="bar"></div>
      </div>
      <button className={s.Btn} type="submit">
        add contact
      </button>
    </form>
  );
}

// With import { connect } from 'react-redux';

/** const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form); */
