import React from 'react';
import Cat from './Cat';

function CatList() {
  const cats = [
    { name: "Whiskers", image: "https://cdn2.thecatapi.com/images/447.jpg" },
    { name: "Mittens", image: "https://cdn2.thecatapi.com/images/mOUZSsI8a.jpg" },
  ];

  return (
    <div>
      {cats.map((cat) => (
        <Cat key={cat.name} name={cat.name} image={cat.image} />
      ))}
    </div>
  );
}

export default CatList;
