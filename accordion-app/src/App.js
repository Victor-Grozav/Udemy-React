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
  const [selectedItem, setSelectedItem] = useState(null);
  function selectedItems(id) {
    setSelectedItem(id !== selectedItem ? id : null);
  }
  return (
    <div>
      <Accordion onSelectedItems={selectedItems} data={faqs} />
    </div>
  );
}
function Accordion({ data, selectedItems }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          selectedItems={selectedItems}
          title={el.title}
          text={el.text}
          num={i}
          key={el.id}
        />
      ))}{" "}
    </div>
  );
}
function AccordionItem({ num, title, text, selectedItems, key }) {
  return (
    <div className="item">
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p onClick={() => selectedItems(key)} className="icon">
        -
      </p>
      <div className="content-box">{key === selectedItems ? text : ""}</div>
    </div>
  );
}
