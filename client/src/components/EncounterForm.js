import React, { useState } from 'react';

const EncounterForm = () => {
  const [title, setTitle] = useState('');
  const [world, setWorld] = useState('');
  const [traits, setTraits] = useState('');
  const [flavor, setFlavor] = useState('');
  const [rules, setRules] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to save the form data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        World:
        <input type="text" value={world} onChange={(e) => setWorld(e.target.value)} />
      </label>
      <label>
        Traits:
        <input type="text" value={traits} onChange={(e) => setTraits(e.target.value)} />
      </label>
      <label>
        Flavor:
        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
      </label>
      <label>
        Rules:
        <input type="text" value={rules} onChange={(e) => setRules(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EncounterForm;

{/*...*/}
return (
  <form onSubmit={handleSubmit}>
    <label>
      Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      World:
      <input type="text" value={world} onChange={(e) => setWorld(e.target.value)} />
    </label>
    <label>
      Traits:
      <input type="text" value={traits} onChange={(e) => setTraits(e.target.value)} />
    </label>
    <label>
      Flavor:
      <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
    </label>
    <label>
      Rules:
      <input type="text" value={rules} onChange={(e) => setRules(e.target.value)} />
    </label>
    <label>
      Image:
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    </label>
    <button type="submit">Save</button>
  </form>
);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a FormData object
  const formData = new FormData();
  formData.append('title', title);
  formData.append('world', world);
  formData.append('traits', traits);
  formData.append('flavor', flavor);
  formData.append('rules', rules);
  formData.append('image', image);

  // Send a POST request to the server with the form data
  try {
    const response = await fetch('/encounter', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

