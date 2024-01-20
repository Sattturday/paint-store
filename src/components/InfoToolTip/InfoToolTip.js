import Popup from '../Popup/Popup';

function InfoTooltip({ message, onClose }) {
  return (
    <Popup isOpen={message} name='info' onClose={onClose}>
      <p className='popup__title popup__title_info'>{message}</p>
    </Popup>
  );
}

export default InfoTooltip;
