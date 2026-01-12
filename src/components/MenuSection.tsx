import "./MenuSection.css";
import { useMemo, useRef, useState } from "react";
import {
  menuCategories,
  menuItems,
  MenuCategory,
  MenuItem
} from "../data/mock";
import dessertImage from "../assets/dessert-placeholder.svg";
import { buildWhatsAppLink } from "../utils/whatsapp";
import MenuModal from "./MenuModal";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(
    menuCategories[0]
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const scrollByAmount = (amount: number) => {
    listRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="section menu" id="cardapio">
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow">Cardápio</span>
          <h2 className="section__title">Escolha o doce perfeito para seu evento.</h2>
          <p className="section__subtitle">
            Cada item é produzido sob encomenda com ingredientes selecionados e
            finalização artesanal.
          </p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Categorias">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`menu__tab ${category === activeCategory ? "is-active" : ""}`}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={category === activeCategory}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu__carousel">
          <button
            className="menu__nav"
            onClick={() => scrollByAmount(-320)}
            aria-label="Ver itens anteriores"
          >
            {"<"}
          </button>
          <div className="menu__list" ref={listRef}>
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="menu-card"
                tabIndex={0}
                role="button"
                onClick={() => setSelectedItem(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSelectedItem(item);
                  }
                }}
              >
                <img src={dessertImage} alt={item.name} />
                <div className="menu-card__body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card__footer">
                    <span className="menu-card__price">{item.price}</span>
                    <a
                      className="btn btn--ghost"
                      href={buildWhatsAppLink(
                        `Olá! Quero pedir o item ${item.name}.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Pedir no WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="menu__nav"
            onClick={() => scrollByAmount(320)}
            aria-label="Ver próximos itens"
          >
            {">"}
          </button>
        </div>
      </div>
      {selectedItem && (
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}

export default MenuSection;
