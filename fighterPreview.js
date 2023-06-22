import createElement from '../helpers/domHelper';
import mockData from '../helpers/mockData'
export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // todo: show fighter info (image, name, health, etc.)
    const fighterInfo = mockData.find((data) => data.id === fighter.id);
    if (fighterInfo) {
        const fighterImage = createElement({
          tagName: 'img',
          className: 'fighter-preview___image',
          src: fighterInfo.image,
          alt: fighterInfo.name
        });
        fighterElement.appendChild(fighterImage);
    }
    const fighterName = createElement({
        tagName: 'div',
        className: 'fighter-preview___name',
        textContent: fighterInfo.name
      });
      fighterElement.appendChild(fighterName);
  
      const fighterHealth = createElement({
        tagName: 'div',
        className: 'fighter-preview___health',
        textContent: `Health: ${fighterInfo.health}`
      });
      fighterElement.appendChild(fighterHealth);
    return fighterElement;
    
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
