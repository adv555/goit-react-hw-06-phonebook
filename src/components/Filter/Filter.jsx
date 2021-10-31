import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/actions';
import s from 'components/Filter/Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.FilterLabel} htmlFor="">
      Filter contacts by name
      <input className={s.FilterInput} type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
