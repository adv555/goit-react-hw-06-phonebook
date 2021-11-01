import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import s from 'components/Filter/Filter.module.scss';

export default function Filter() {
  const value = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.FilterLabel} htmlFor="">
      Filter contacts by name
      <input
        className={s.FilterInput}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// With import { connect } from 'react-redux';

/**
 const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
 */
