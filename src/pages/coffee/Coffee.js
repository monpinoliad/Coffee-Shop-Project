import React from 'react';
import CurveOne from '../../images/curve-1.svg';

function Coffee() {
  return (
    <div className="Coffee">
      <header className="header">
        <div className="header__slogan">
          <div className="header__slogan--content">
            Start your day with a classic brewed coffee.
          </div>
          <a href="#" className="header__slogan--link">See our menu</a>
        </div>
        <div className="header__illustration" style={{backgroundImage: `url(${CurveOne})`}}></div>
      </header>
      <div className="wrapper">
        <div className="wrapper__container">
          Reprehenderit incididunt amet voluptate laborum ullamco ut aute proident tempor excepteur consequat enim. Et mollit fugiat esse fugiat tempor occaecat voluptate id exercitation voluptate consequat ullamco cupidatat voluptate. Tempor duis cillum cillum velit mollit quis proident. Adipisicing eu ipsum ea nostrud eiusmod laborum ea sint voluptate nulla ipsum occaecat aliquip id. Commodo nostrud est velit nostrud deserunt magna excepteur elit incididunt ipsum est. Ad eiusmod fugiat adipisicing consectetur aliquip ex magna voluptate ut exercitation occaecat.

Ut et do dolor sunt voluptate deserunt est tempor. Consectetur laboris ex excepteur sint eu. In labore aute aliquip fugiat ipsum sunt proident cillum.

Nostrud incididunt eu exercitation dolor ut sint cupidatat eiusmod cupidatat Lorem. Lorem consectetur ullamco laboris ea in eu aute excepteur. Reprehenderit occaecat est ipsum laborum cillum laboris qui qui aliqua enim duis dolore laboris.

Laborum aliquip fugiat consequat id culpa. Quis mollit duis consectetur incididunt dolore nostrud qui minim qui. Ea enim consequat ad duis reprehenderit sit nisi.

Elit incididunt enim tempor ex nulla consequat amet cupidatat sunt aute sit fugiat amet. Deserunt mollit ullamco officia adipisicing pariatur. Laboris labore anim dolore esse anim reprehenderit eiusmod consequat eiusmod consectetur deserunt consequat. Id Lorem reprehenderit eiusmod ex commodo in ex minim qui culpa ut eiusmod sunt. Consectetur Lorem amet proident consequat adipisicing cupidatat nulla reprehenderit.
        </div>
      </div>
    </div>
  );
}

export default Coffee;
