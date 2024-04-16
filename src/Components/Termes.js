import React from 'react';

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: ( <><p>Bienvenue sur FarmConnect !</p><ol>
            <li>  En utilisant ce site, vous acceptez les conditions générales suivantes :</li>

            <li>1. Utilisation du site :</li>
            <li> Ce site est destiné aux agriculteurs et aux acheteurs intéressés par l'achat de produits agricoles. L'utilisation de ce site implique votre accord pour respecter toutes les lois et réglementations locales et nationales applicables.</li>

            <li>2. Compte utilisateur :</li>
            <li>Vous pouvez être invité à créer un compte utilisateur pour accéder à certaines fonctionnalités du site. Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe, et vous acceptez de ne pas partager vos informations de connexion avec des tiers.</li>

            <li>3. Produits et commandes :</li>
            <li>Les informations sur les produits affichées sur ce site sont fournies à titre informatif uniquement. Nous nous réservons le droit de modifier les prix, les descriptions et la disponibilité des produits sans préavis. Les commandes passées sur ce site sont soumises à notre confirmation et peuvent être annulées ou modifiées à notre discrétion.</li>

            <li>4. Livraison et retours :</li>
            <li> Nous nous efforçons de livrer vos produits dans les délais convenus. Cependant, les retards peuvent parfois survenir en raison de circonstances indépendantes de notre volonté. Consultez notre politique de livraison et de retour pour plus d'informations.

                5. Propriété intellectuelle :
                Tout le contenu présenté sur ce site, y compris les textes, les images, les vidéos et les logos, est protégé par les lois sur la propriété intellectuelle. Vous acceptez de ne pas copier, modifier, distribuer ou reproduire ce contenu sans notre autorisation écrite.

                En utilisant ce site, vous acceptez pleinement et sans réserve ces conditions générales. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.

                Ces termes et conditions peuvent être mis à jour périodiquement sans préavis. Nous vous encourageons à consulter régulièrement cette page pour rester informé des modifications éventuelles.</li>
        </ol></>
      )
    };
  }

  render() {
    return (
      <div className="terms-and-conditions">
        <h1>Terms and Conditions</h1>
        <p>{this.state.terms}</p>
      </div>
    );
  }
}

export default TermsAndConditions;
