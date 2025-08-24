// MBTI Types
type MBTIType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' | 
               'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

type Temperament = 'NT' | 'NF' | 'SJ' | 'SP';

const types: MBTIType[] = [
  "INTJ", "INTP", "ENTJ", "ENTP", 
  "INFJ", "INFP", "ENFJ", "ENFP", 
  "ISTJ", "ISFJ", "ESTJ", "ESFJ", 
  "ISTP", "ISFP", "ESTP", "ESFP"
];

function temperamentOf(type: MBTIType): Temperament {
  if (['INTJ', 'INTP', 'ENTJ', 'ENTP'].includes(type)) return 'NT';
  if (['INFJ', 'INFP', 'ENFJ', 'ENFP'].includes(type)) return 'NF';
  if (['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'].includes(type)) return 'SJ';
  return 'SP';
}

function createTypeCard(type: MBTIType): HTMLDivElement {
  const temperament = temperamentOf(type);
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="badge">${temperament}</div>
    <div class="variant-wrap">
      <img alt="${type} male" src="/mbti/svg/${type.toLowerCase()}-m.svg"/>
      <img alt="${type} female" src="/mbti/svg/${type.toLowerCase()}-f.svg"/>
    </div>
    <h2>${type}</h2>
  `;
  
  return card;
}

function initializeGallery(): void {
  const grid = document.getElementById('grid');
  if (!grid) {
    console.error('Grid element not found');
    return;
  }
  
  types.forEach(type => {
    const card = createTypeCard(type);
    grid.appendChild(card);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGallery);
} else {
  initializeGallery();
}