import tailor from './tailor.jpg';
import './App.css';
import Slideshow01 from './Slideshow01';
import Slideshow02 from './Slideshow02';

const imgSources = [
  'https://i.imgur.com/yYmiSBW.png', /* Accessoires et Costume Rouge vert blanc*/
  'https://i.imgur.com/wkRCOKu.png' /*Accessoires vitrine*/
];
/*Palette de couleur vert et fuschia (voir le post de Guy)*/
function App() {
  return (
    <div className='main'>
      <header className='header'>
        <h1>Guy Marcellin</h1>
      </header>
      <div className='onglet'>
        <a href="#Conseil en Image" className='ongletHeader' >Conseil en Image</a>
        <a href="#Location" className='ongletHeader' >Location</a>
        <a href="#VenteAccessoire" className='ongletHeader' >Vente d'accessoires</a>
        <a href="#APropos" className='ongletHeader' >A propos de Guy</a>
      </div>
{/* Ajouter Tarifs: Conseil morphologique 95 (30 minutes offertes), conseil morphologique et couleur 175 (30 minutes offertes, minimum 1h30), conseil morphologique, couleur et shopping (350h, minimum 3h)*/}

      {/*First block, for Conseil en Image*/}
      <div className='block' id="ConseilImage">
        <div>
          <img src={tailor} alt="Exemple Conseil" width={600} height={400} />
        </div>
        <div className='titleAndContent, textRight'>
          <h2>Conseil en Image</h2>
          <p>Prenez render-vous avec Guy pour une séance de conseil en image. Que vous soyez débutant complet ou ayant connaissance des bases, Guy saura vous aider à vous habiller au mieux pour n'importe quelle occasion. Selon votre envie,Guy sera capable de vous transmettre son savoir plus en détails.</p>
          <div className='textCenter'>
            <p className='callToAction'>Prendre RDV par Téléphone: 07 71 27 65 88</p>
          </div>
        </div>
      </div>
{/* 2 piece: 150, 3 piece 200, chemise: 30€ pour 3 jours*/}
      {/* Second block, for Location */}
      <div className='block' id="Location">
        
        <div className='titleAndContent'>
          <h2>Location et Vente de costumes demi-mesure</h2>
          <p>Une occasion bien précise en tête, mais vous ne souhaitais pas dépenser une somme vertigineuse pour un costume que vous ne porterez qu'une seule fois? N'ayez crainte: Guy vous propose un ensemble de costume selon vos besoin, et pour n'importe quelle occasion. Guy vous assure que les articles loués seront parfaitement à votre taille, avec retouches si nécessaires.</p>
          <br></br>
          <p></p> {/*Mettre un paragraphe sur la demi mesure et les prix de vente.*/}
          <div className='textCenter'>
            <p className='callToAction'>Prendre RDV par Téléphone: 07 71 27 65 88</p>
          </div>
        </div>
        <div id="gallery01">
          < Slideshow01 /> {/* <img src="./notyetdefined.jpg" alt="Placeholder for Gallery" width={600} height={400}/> */}
        </div>
      </div>

      {/* Third Block for Vente d'accessoires */}
      <div className='block' id="VenteAccessoire">
        <div>
          <img src={imgSources[0]} alt="Placeholder for Left Accessories" width={600}/>
        </div>
        <div className='titleAndContent , textCenter'>
          <h2>Vente d'accessoires</h2>
          <p>Envie d'un noeud papillon? D'une cravate, d'un mouchoir et bretelles assorties? Venez donc voir les accessoires de Guy. Outre les articles à la pièce, il vous est possible de trouver des ensembles préparés par les soins de Guy.</p>
          <div className='callToAction'>
            <p>Achat en magasin</p>
            <p>15 Rue du Roi Albert</p>
            <p>44000 Nantes</p>
            <p>Ouvert entre 10 et 13h / 14 et 19h</p>
          </div>
          
        </div>
        <div>
          <img src={imgSources[1]} alt="Placeholder for Right Accessories" width={600}/>
        </div>
      </div>

      {/* Fourth Block for A Propos de Guy (3-4 pictures)*/}
      <div className='block' id="APropos">
        <div>
          <Slideshow02 />{/* <img src="./notYetDefined.jpg" alt="Placeholder for Gallery" width={600} height={400}/> */}
        </div>
        <div className='titleAndContent, textRight'>
          <h2>A propos de Guy</h2>
          <p>Pour ce qui est de l'élégance sartoriale, Guy Marcellin est l'homme qu'il vous faut. Très souvent de passage à Roland Garros, il a su se faire remarqué durant son temps libre et sa carrière dans le monde de la mide par son style atypique, qui lui est propre. Ayant plus de XX années d'expérience dans le domaine, Guy saura au mieux vous conseiller dans n'importe quelle démarche, et ce grâce à son expérience avec des miliers de client lors de ses différents postes à Ollygan, XXX et YYY. Dans son bureau Rue du Roi Albert, votre apparence sera en de très bonnes mains.</p>
          <div>
            <a href="https://www.instagram.com/marcus_bureau_de_style/" target="_blank" rel="noopener noreferrer"><img src="./instagram.jpg" alt="Instagram"/> </a> 
            <a href="https://www.tiktok.com/guymarcelinmompanga/" target="_blank" rel="noopener noreferrer"><img src="./tiktok.jpg" alt="Tiktok"/> </a>
            <a href="https://www.linkedin.com/in/guy-marcellin-mompanga-8b9886199/" target="_blank" rel="noopener noreferrer"><img src="./LinkedIn.jpg" alt="LinkedIn"/> </a>
            <a href="https://www.youtube.com/guymarcelinmompanga/" target="_blank" rel="noopener noreferrer"><img src="./youtube.jpg" alt="Youtube"/> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
