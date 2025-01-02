import { useState } from "react";

function CreatePiggyBankScreen({ onCreate }) {
  const [name, setName] = useState('');

  const handleCreate = () => {
    if (name) {
      onCreate(name);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img src="/piggy.png" alt="Piggy Bank" className="w-32 h-32 mb-4" />
      <h1 className="text-xl font-bold mb-4">Create a Piggy Bank</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-64"
      />
      {/* <input
        type="number"
        placeholder="Enter Initial Amount"
        value={initialAmount}
        onChange={(e) => setInitialAmount(e.target.value)}
        className="border p-2 mb-4 w-64"
      /> */}
      <button
        onClick={handleCreate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Piggy Bank
      </button>
    </div>
  );
}

export default CreatePiggyBankScreen;
