import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
