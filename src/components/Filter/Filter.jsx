import FilterCss from '../Filter/FilterCss.module.css';

const Filter = ({ value, onChange }) =>{
        return (
      <label className={FilterCss.label}>
        Find contacts by name:
        <input className={FilterCss.input} type="text" value={value} onChange={onChange} />
              </label>
    );
  }

export default Filter;
