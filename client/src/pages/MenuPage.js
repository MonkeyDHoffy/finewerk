import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu-container">
        <h1 className="menu-title">SPEISEKARTE</h1>
        
        <div className="menu-grid">
          {/* Linke Spalte */}
          <div className="menu-column">
            
            {/* KÜCHE */}
            <section className="menu-section">
              <h2 className="section-title">KÜCHE</h2>
              
              <div className="subsection">
                <h3 className="subsection-title">Frühstück</h3>
                <div className="menu-item">
                  <span className="item-name">Pancakes mit Bio-Ahornsirup</span>
                  <span className="item-price">4.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pancakes mit Käse & Schinken</span>
                  <span className="item-price">5.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Franzbrötchen</span>
                  <span className="item-price">3.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Butter-Croissant, wahlweise gefüllt mit<br/>
                    <span className="item-options">Himbeere • Mango • Erdbeere • Schoko • Karamell</span>
                  </span>
                  <span className="item-price">3.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Warmer Schokoladenkuchen</span>
                  <span className="item-price">8.0</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">FLAMMKUCHEN</h3>
                <div className="menu-item">
                  <span className="item-name">Elsass</span>
                  <span className="item-price">13</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Räucherlachs & Champignon</span>
                  <span className="item-price">14.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Räuchertofu & Gemüse</span>
                  <span className="item-price">13</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">MAINS – Sandwiches & Croques</h3>
                <div className="menu-item">
                  <span className="item-name">Korean Egg Drop Sandwich<br/>
                    <span className="item-desc">Brioche Bun mit Ei, Bacon & Cheese</span>
                  </span>
                  <span className="item-price">10</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Vegan Egg Drop Sandwich<br/>
                    <span className="item-desc">Brioche Bun mit Rührei, Cheese</span>
                  </span>
                  <span className="item-price">10</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Grilled Pesto Sandwich<br/>
                    <span className="item-desc">Sandwich mit Käse, Tomate & Pesto</span>
                  </span>
                  <span className="item-price">10</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Croque Monsieur<br/>
                    <span className="item-desc">Französisches Sandwich mit Schinken, Béchamel, Comté, Dijon Senf</span>
                  </span>
                  <span className="item-price">8.3</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Croque Madame<br/>
                    <span className="item-desc">Französisches Sandwich mit Schinken, Béchamel, Comté, Dijon Senf, Spiegelei</span>
                  </span>
                  <span className="item-price">9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Croque au Saumon<br/>
                    <span className="item-desc">Französisches Sandwich mit Lachs, Béchamel, Comté, Dijon Senf</span>
                  </span>
                  <span className="item-price">9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Croque Provençale<br/>
                    <span className="item-desc">Französisches Sandwich mit Tomate, Béchamel, Comté, Dijon Senf</span>
                  </span>
                  <span className="item-price">8.3</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">WAFFELN</h3>
                <div className="menu-item">
                  <span className="item-name">Normal</span>
                  <span className="item-price">6</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mit Spaghetti Eis</span>
                  <span className="item-price">10</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pumpkin</span>
                  <span className="item-price">6</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mit heißen Kirschen</span>
                  <span className="item-price">9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mit Apfel</span>
                  <span className="item-price">9</span>
                </div>
              </div>
            </section>

            {/* CAFÉ */}
            <section className="menu-section">
              <h2 className="section-title">CAFÉ</h2>
              
              <div className="subsection">
                <h3 className="subsection-title">Classic</h3>
                <div className="menu-item">
                  <span className="item-name">Espresso</span>
                  <span className="item-price">2.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Espresso Doppio</span>
                  <span className="item-price">4.8</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Espresso Macchiato</span>
                  <span className="item-price">2.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cortado</span>
                  <span className="item-price">3.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Americano</span>
                  <span className="item-price">3.8</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">Creamy</h3>
                <div className="menu-item">
                  <span className="item-name">Cappuccino</span>
                  <span className="item-price">4.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Flat White</span>
                  <span className="item-price">5.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Latte Macchiato</span>
                  <span className="item-price">5.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mochaccino</span>
                  <span className="item-price">4.9</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">CRAFTED</h3>
                <div className="menu-item">
                  <span className="item-name">V60 Filter</span>
                  <span className="item-price">5.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Matcha Latte</span>
                  <span className="item-price">5.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Kakao</span>
                  <span className="item-price">3.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pumpkin Spice Latte</span>
                  <span className="item-price">5.9</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">CHILLED</h3>
                <div className="menu-item">
                  <span className="item-name">Iced Americano</span>
                  <span className="item-price">4.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Iced Cappuccino</span>
                  <span className="item-price">4.6</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Iced Flat White</span>
                  <span className="item-price">5.6</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Iced Matcha Latte</span>
                  <span className="item-price">5.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Espresso Tonic / Bitter Lemon</span>
                  <span className="item-price">6.0</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">INDULGE</h3>
                <div className="menu-item">
                  <span className="item-name">Affogato</span>
                  <span className="item-price">5.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Eiskaffee</span>
                  <span className="item-price">6.8</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cascara Eistee</span>
                  <span className="item-price">3.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Maple Earl Grey</span>
                  <span className="item-price">5.9</span>
                </div>
              </div>
            </section>
          </div>

          {/* Rechte Spalte */}
          <div className="menu-column">
            
            {/* EIS BY HENRY'S */}
            <section className="menu-section">
              <h2 className="section-title">EIS BY HENRY'S – EISMANUFAKTUR</h2>
              
              <div className="subsection">
                <h3 className="subsection-title">Klassische Eisbecher</h3>
                <div className="menu-item">
                  <span className="item-name">Spaghetti Eis groß</span>
                  <span className="item-price">8.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Spaghetti Eis klein</span>
                  <span className="item-price">6.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Schoko Becher<br/>
                    <span className="item-desc">Schokoladen Sorbet, Vanille Milcheis, Sahne, Schokosoße, Schokoraspel</span>
                  </span>
                  <span className="item-price">10.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Haselnuss Becher<br/>
                    <span className="item-desc">Haselnuss Milcheis, Vanille Milcheis, Sahne, geröstete Haselnüsse aus dem Piemont, Haselnusskrokant, Schokosoße, Karamellsoße</span>
                  </span>
                  <span className="item-price">10.9</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">EISBECHER SPEZIAL</h3>
                <div className="menu-item">
                  <span className="item-name">Henry's (mit Alkohol)<br/>
                    <span className="item-desc">Vanille Milcheis, Haselnuss Milcheis, Frangelico Haselnusslikör, Klecks Sahne, Haselnusskrokant</span>
                  </span>
                  <span className="item-price">6.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Molly's (mit Alkohol)<br/>
                    <span className="item-desc">Schokoladen Sorbet, Haselnuss Milcheis, MoCo Kaffeelikör, Klecks Sahne, Schokoraspel</span>
                  </span>
                  <span className="item-price">6.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Gemischte Eis nach Wahl (je Kugel)</span>
                  <span className="item-price">2.1</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Sorbet mit Winzer Crémant (mit Alkohol)</span>
                  <span className="item-price">7.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Spekuletti</span>
                  <span className="item-price">10</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">EISBECHER KREATIONEN</h3>
                <div className="menu-item">
                  <span className="item-name">Halva Becher<br/>
                    <span className="item-desc">Halva Milcheis (Sesam, Erdnüsse, Schokostücke), Schokoladen Sorbet, Sahne, Erdnüsse (geröstet und gesalzen), Sesam, Schokosoße, Karamellsoße</span>
                  </span>
                  <span className="item-price">10.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mirabellen Becher<br/>
                    <span className="item-desc">Mirabellen Sorbet, Vanille Milcheis, eingelegte Mirabellen, Sahne<br/>wahlweise mit Mirabellen Schnaps (+1.5)</span>
                  </span>
                  <span className="item-price">6.4</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Williams Christ Birne<br/>
                    <span className="item-desc">Birnen Sorbet, Vanille Milcheis, Birne, Sahne<br/>wahlweise mit Williams Schnaps (+1.5)</span>
                  </span>
                  <span className="item-price">6.4</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Joghurt Becher<br/>
                    <span className="item-desc">Joghurt Eis, Vanille Milcheis, Joghurt, Sahne, Früchte nach Saison, Himbeersoße</span>
                  </span>
                  <span className="item-price">10.5</span>
                </div>
                <div className="menu-item special">
                  <span className="item-name">OLIVIA<br/>
                    <span className="item-desc">Eine Kugel Vanille Milcheis mit Olivenöl und Fleur de Sel</span>
                  </span>
                  <span className="item-price">3.2</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">Milchshakes 0.35 L</h3>
                <div className="menu-item">
                  <span className="item-name">Sorte nach Wahl</span>
                  <span className="item-price">5.5</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">Extras</h3>
                <div className="menu-item">
                  <span className="item-name">Portion Sahne</span>
                  <span className="item-price">+1.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Klecks Sahne</span>
                  <span className="item-price">+1.0</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Portion laktosefreie Sahne</span>
                  <span className="item-price">+1.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Soße</span>
                  <span className="item-price">+0.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Sonstige Toppings</span>
                  <span className="item-price">ab +0.5</span>
                </div>
              </div>
            </section>

            {/* GETRÄNKE */}
            <section className="menu-section">
              <h2 className="section-title">GETRÄNKE</h2>
              
              <div className="subsection">
                <h3 className="subsection-title">Alkoholfrei</h3>
                <div className="menu-item">
                  <span className="item-name">Sprudel 0.2</span>
                  <span className="item-price">2.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Wasser still 0.2</span>
                  <span className="item-price">2.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Sprudel Flasche</span>
                  <span className="item-price">5.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Wasser Flasche</span>
                  <span className="item-price">5.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cola 0.2</span>
                  <span className="item-price">3.0</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tonic 0.2</span>
                  <span className="item-price">3.0</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Bitter Lemon 0.2</span>
                  <span className="item-price">3.0</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">WEIN (10 cl)</h3>
                <div className="menu-item">
                  <span className="item-name">Corvers Rosé</span>
                  <span className="item-price">3.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Corvers Sommerlaune</span>
                  <span className="item-price">3.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Triennes</span>
                  <span className="item-price">3.9</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Weißburgunder Rote Erde</span>
                  <span className="item-price">4.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Schmitt Weber Auxerrois</span>
                  <span className="item-price">4.5</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Crémant</span>
                  <span className="item-price">4.5</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">BIER</h3>
                <div className="menu-item">
                  <span className="item-name">Bayreuther Hell</span>
                  <span className="item-price">3.5</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">COCKTAILS</h3>
                <div className="menu-item">
                  <span className="item-name">Apérol Spritz</span>
                  <span className="item-price">7.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Limoncello Spritz</span>
                  <span className="item-price">7.2</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Espresso Martini</span>
                  <span className="item-price">8.5</span>
                </div>
              </div>

              <div className="subsection">
                <h3 className="subsection-title">KOMBUCHA</h3>
                <div className="menu-item">
                  <span className="item-name">Wechselnde Sorten</span>
                  <span className="item-price">4.5</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;