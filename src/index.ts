import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

// Array sort
// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// String sort
// const charactersCollection = new CharactersCollection('Xaayb');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// Linked list sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
