import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript DOM</h1>';

console.log(document.documentElement);
console.dir(document.documentElement);
console.dir(document.head);
console.dir(document.body);
console.log(document.body.constructor.name);
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

/*
  - NodeTypes
  1: Element
  2: Attribute
  3: Text
  4: CDATASection
  5: EntityReference
  6: Entity
  7: ProcessingInstruction
  8: Comment
  9: Document
  10: DocumentType
  11: DocumentFragment
  12: Notation
*/

console.log(document.body.nodeType);
console.log(document.nodeType);
console.log(document.nodeName);
console.log(document.tagName);