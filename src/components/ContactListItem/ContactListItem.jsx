import ContactListItemCss from '../ContactListItem/ContactListItemCss.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact })=> {
   const handleClick = () => {
    onDeleteContact(id);
  };

    return (
      <li className={ContactListItemCss.item}>
        <p>{name}: {number}</p>
        <button className={ContactListItemCss.button} onClick={handleClick}>Delete</button>
      </li>
    );
  }

export default ContactListItem;



