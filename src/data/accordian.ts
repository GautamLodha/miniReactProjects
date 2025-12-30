type AccordionItem = {
    id : number,
    title : string,
    content : string
}
export const accordionData : AccordionItem[] = [
  {
    id: 1,
    title: "What is TypeScript?",
    content:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing and helps catch errors at compile time."
  },
  {
    id: 2,
    title: "Why use React with TypeScript?",
    content:
      "Using React with TypeScript improves code reliability, provides better autocomplete, and makes large applications easier to maintain."
  },
  {
    id: 3,
    title: "What is an Accordion component?",
    content:
      "An accordion is a UI component that allows users to expand and collapse sections to show or hide content."
  },
  {
    id: 4,
    title: "Single vs Multiple Accordion Open",
    content:
      "A single-open accordion allows only one section to be open at a time, while a multi-open accordion allows multiple sections to stay open."
  },
  {
    id: 5,
    title: "Is TypeScript required for React?",
    content:
      "TypeScript is not required, but it is highly recommended for better developer experience and fewer runtime bugs."
  }
];
