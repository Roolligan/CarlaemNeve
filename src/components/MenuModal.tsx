import "./MenuModal.css";
import dessertImage from "../assets/dessert-placeholder.svg";
import { MenuItem } from "../data/mock";
import { buildWhatsAppLink } from "../utils/whatsapp";

interface MenuModalProps {
  item: MenuItem;
  onClose: () => void;
}

function MenuModal({ item, onClose }: MenuModalProps) {
  return (
    <div className="menu-modal" role="dialog" aria-modal="true">
      <div className="menu-modal__overlay" onClick={onClose} />
      <div className="menu-modal__content" role="document">
        <button className="menu-modal__close" onClick={onClose} aria-label="Fechar">
          x
        </button>
        <img src={dessertImage} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <ul>
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="menu-modal__actions">
          <span className="menu-modal__price">{item.price}</span>
          <a
            className="btn btn--primary"
            href={buildWhatsAppLink(`Olá! Quero pedir o item ${item.name}.`)}
            target="_blank"
            rel="noreferrer"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
