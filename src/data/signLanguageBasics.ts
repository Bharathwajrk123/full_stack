export interface SignItem {
  id: string;
  title: string;
  explanation: string;
  videoUrl: string;
  category: 'alphabet' | 'number' | 'common';
}

export const signLanguageBasics: SignItem[] = [
  // Alphabets (A-Z)
  {
    id: 'letter-a',
    title: 'Letter A',
    explanation: 'Make a fist with your thumb resting against the side of your index finger',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22408.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-b',
    title: 'Letter B',
    explanation: 'Hold your hand up with fingers straight and together, thumb folded across palm',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22409.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-c',
    title: 'Letter C',
    explanation: 'Curve your fingers and thumb to form the shape of the letter C',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22410.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-d',
    title: 'Letter D',
    explanation: 'Point your index finger up, curl other fingers to touch thumb',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22411.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-e',
    title: 'Letter E',
    explanation: 'Curl all fingers down to touch thumb, forming a closed fist',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22412.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-f',
    title: 'Letter F',
    explanation: 'Touch thumb to index finger, keep other three fingers straight up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22413.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-g',
    title: 'Letter G',
    explanation: 'Point index finger and thumb horizontally, like holding something small',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22414.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-h',
    title: 'Letter H',
    explanation: 'Extend index and middle fingers horizontally, keep others folded',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22415.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-i',
    title: 'Letter I',
    explanation: 'Extend only your pinky finger, fold other fingers down',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22416.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-j',
    title: 'Letter J',
    explanation: 'Make the letter I, then draw a J shape in the air',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22417.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-k',
    title: 'Letter K',
    explanation: 'Point index and middle fingers up, thumb between them',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22418.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-l',
    title: 'Letter L',
    explanation: 'Extend index finger up and thumb out, forming an L shape',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22419.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-m',
    title: 'Letter M',
    explanation: 'Fold first three fingers over thumb, pinky extended',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22420.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-n',
    title: 'Letter N',
    explanation: 'Fold first two fingers over thumb, other fingers extended',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22421.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-o',
    title: 'Letter O',
    explanation: 'Curve all fingers to meet thumb, forming an O shape',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22422.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-p',
    title: 'Letter P',
    explanation: 'Like K but pointing downward at a 45-degree angle',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22423.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-q',
    title: 'Letter Q',
    explanation: 'Like G but pointing downward',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22424.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-r',
    title: 'Letter R',
    explanation: 'Cross index finger over middle finger, both pointing up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22425.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-s',
    title: 'Letter S',
    explanation: 'Make a fist with thumb over fingers',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22426.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-t',
    title: 'Letter T',
    explanation: 'Fold fingers over thumb, thumb tip showing between index and middle',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22427.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-u',
    title: 'Letter U',
    explanation: 'Point index and middle fingers up together, side by side',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22428.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-v',
    title: 'Letter V',
    explanation: 'Point index and middle fingers up in a V shape',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22429.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-w',
    title: 'Letter W',
    explanation: 'Point index, middle, and ring fingers up together',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22430.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-x',
    title: 'Letter X',
    explanation: 'Bend index finger into a hook shape, other fingers folded',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22431.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-y',
    title: 'Letter Y',
    explanation: 'Extend thumb and pinky, fold other fingers down',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22432.mp4',
    category: 'alphabet'
  },
  {
    id: 'letter-z',
    title: 'Letter Z',
    explanation: 'Point index finger and draw a Z shape in the air',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/22/22433.mp4',
    category: 'alphabet'
  },

  // Numbers (0-9)
  {
    id: 'number-0',
    title: 'Number 0',
    explanation: 'Form an O shape with all fingers and thumb',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21588.mp4',
    category: 'number'
  },
  {
    id: 'number-1',
    title: 'Number 1',
    explanation: 'Point index finger up, fold other fingers down',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21589.mp4',
    category: 'number'
  },
  {
    id: 'number-2',
    title: 'Number 2',
    explanation: 'Point index and middle fingers up in a V shape',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21590.mp4',
    category: 'number'
  },
  {
    id: 'number-3',
    title: 'Number 3',
    explanation: 'Point thumb, index, and middle fingers up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21591.mp4',
    category: 'number'
  },
  {
    id: 'number-4',
    title: 'Number 4',
    explanation: 'Point four fingers up, fold thumb across palm',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21592.mp4',
    category: 'number'
  },
  {
    id: 'number-5',
    title: 'Number 5',
    explanation: 'Spread all five fingers wide open',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21593.mp4',
    category: 'number'
  },
  {
    id: 'number-6',
    title: 'Number 6',
    explanation: 'Touch thumb to pinky, keep other three fingers up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21594.mp4',
    category: 'number'
  },
  {
    id: 'number-7',
    title: 'Number 7',
    explanation: 'Touch thumb to ring finger, keep other three fingers up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21595.mp4',
    category: 'number'
  },
  {
    id: 'number-8',
    title: 'Number 8',
    explanation: 'Touch thumb to middle finger, keep other three fingers up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21596.mp4',
    category: 'number'
  },
  {
    id: 'number-9',
    title: 'Number 9',
    explanation: 'Touch thumb to index finger, keep other three fingers up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21597.mp4',
    category: 'number'
  },

  // Common Daily Signs (20 signs)
  {
    id: 'hello',
    title: 'Hello',
    explanation: 'Wave your hand with an open palm, or touch forehead and move hand forward',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/26/26372.mp4',
    category: 'common'
  },
  {
    id: 'thank-you',
    title: 'Thank You',
    explanation: 'Touch fingertips to chin, then move hand forward and down',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21764.mp4',
    category: 'common'
  },
  {
    id: 'please',
    title: 'Please',
    explanation: 'Place flat hand on chest and move in circular motion',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21665.mp4',
    category: 'common'
  },
  {
    id: 'water',
    title: 'Water',
    explanation: 'Make W handshape and tap it against your chin twice',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21806.mp4',
    category: 'common'
  },
  {
    id: 'food',
    title: 'Food',
    explanation: 'Bring fingertips to mouth as if eating',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21481.mp4',
    category: 'common'
  },
  {
    id: 'school',
    title: 'School',
    explanation: 'Clap hands together twice, like a teacher getting attention',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21712.mp4',
    category: 'common'
  },
  {
    id: 'home',
    title: 'Home',
    explanation: 'Touch fingertips to mouth, then move to side of face',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21520.mp4',
    category: 'common'
  },
  {
    id: 'family',
    title: 'Family',
    explanation: 'Make F handshapes with both hands, circle them around each other',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21463.mp4',
    category: 'common'
  },
  {
    id: 'friend',
    title: 'Friend',
    explanation: 'Hook index fingers together, then switch positions',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21489.mp4',
    category: 'common'
  },
  {
    id: 'help',
    title: 'Help',
    explanation: 'Place one fist on opposite palm and lift both hands up',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21514.mp4',
    category: 'common'
  },
  {
    id: 'sorry',
    title: 'Sorry',
    explanation: 'Make fist and rub it in circular motion on chest',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21742.mp4',
    category: 'common'
  },
  {
    id: 'yes',
    title: 'Yes',
    explanation: 'Make fist and nod it up and down like a head nodding',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21825.mp4',
    category: 'common'
  },
  {
    id: 'no',
    title: 'No',
    explanation: 'Snap index and middle finger down to thumb',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21618.mp4',
    category: 'common'
  },
  {
    id: 'good',
    title: 'Good',
    explanation: 'Touch fingertips to chin, then move hand down to other palm',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21500.mp4',
    category: 'common'
  },
  {
    id: 'bad',
    title: 'Bad',
    explanation: 'Touch fingertips to chin, then flip hand down with palm facing down',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21386.mp4',
    category: 'common'
  },
  {
    id: 'hospital',
    title: 'Hospital',
    explanation: 'Make H handshape and draw a cross on your upper arm',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21521.mp4',
    category: 'common'
  },
  {
    id: 'bus',
    title: 'Bus',
    explanation: 'Make B handshapes and move them as if holding a steering wheel',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21407.mp4',
    category: 'common'
  },
  {
    id: 'car',
    title: 'Car',
    explanation: 'Make fists and move them as if steering a car',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21413.mp4',
    category: 'common'
  },
  {
    id: 'work',
    title: 'Work',
    explanation: 'Make fists and tap one on top of the other repeatedly',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21821.mp4',
    category: 'common'
  },
  {
    id: 'money',
    title: 'Money',
    explanation: 'Tap the back of one hand into the palm of the other',
    videoUrl: 'https://www.signingsavvy.com/media/mp4-ld/21/21598.mp4',
    category: 'common'
  }
];

export const getSignsByCategory = (category: 'alphabet' | 'number' | 'common') => {
  return signLanguageBasics.filter(sign => sign.category === category);
};

export const getAllSigns = () => signLanguageBasics;