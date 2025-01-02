import React, { useState } from 'react';
import './index.css';
import PiggyBankScreen from './Components/PiggyBankScreen';
import CreatePiggyBankScreen from './Components/CreatePiggyBankScreen';

function App() {
  const [piggyBank, setPiggyBank] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const createPiggyBank = (name) => {
    setPiggyBank({ name,balance:0});
    // setTransactions([{ type: 'Created', amount }]);

  };

  const addMoney = (amount) => {
    if (piggyBank) {
      const newBalance = piggyBank.balance + amount;
      setPiggyBank({ ...piggyBank, balance: newBalance });
      setTransactions([...transactions, { type: 'Added', amount }]);
    }
  };

  const breakPiggyBank = () => {
    if (piggyBank) {
      alert(`Your current balance of Rs ${piggyBank.balance} is withdrawn.`);
      setPiggyBank({ ...piggyBank, balance: 0 });
      setTransactions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!piggyBank ? (
        <CreatePiggyBankScreen onCreate={createPiggyBank} />
      ) : (
        <PiggyBankScreen
          piggyBank={piggyBank}
          transactions={transactions}
          onAddMoney={addMoney}
          onBreak={breakPiggyBank}
        />
      )}
    </div>
  );
}

export default App;