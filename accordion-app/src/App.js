import { useState } from "react";
import "./App.css";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} id={el.id} />
      ))}{" "}
    </div>
  );
}
function AccordionItem({ num, title, text, id }) {
  const [selectedItem, setSelectedItem] = useState(false);

  function selectedItems() {
    setSelectedItem((a) => !a);
  }
  return (
    <div className="item">
      <p className="number">{num}</p>

      <p className="title">{title}</p>

      <p className="icon" onClick={selectedItems}>
        {selectedItem ? "-" : "+"}
      </p>
      {selectedItem && <div className="content-box">{text}</div>}
    </div>
  );
}
