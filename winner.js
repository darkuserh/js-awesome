import showModal from './modal';

export default function showWinnerModal(fighter) {
    const title = 'Winner';
    const fighterName = fighter ? fighter.name : 'Unknown Fighter';
    const bodyElement = createElement({ tagName: 'div', className: 'modal-body' });
    const winnerMessage = createElement({ tagName: 'p' });
  
    winnerMessage.innerText = `${fighterName} wins the fight!`;
    bodyElement.append(winnerMessage);
    showModal({
        title,
        bodyElement
      });
      
}
