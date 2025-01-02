import { useState } from "react";
function PiggyBankScreen({ piggyBank, transactions, onAddMoney, onBreak }) {
    const [amount, setAmount] = useState('');
  
    const handleAdd = () => {
      if (amount) {
        onAddMoney(parseFloat(amount));
        setAmount('');
      }
    };
  
    return (
      <div className="flex flex-col items-center">
        <img src="/piggy.png" alt="Piggy Bank" className="w-32 mb-4" />
        <h1 className="text-xl font-bold mb-4">{piggyBank.name}'s Piggy Bank</h1>
        <h2 className="text-2xl mb-4">Balance: $ {piggyBank.balance}</h2>
        <div className="flex mb-4">
          <input
            type="number"
            placeholder="Add Money"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 mr-2"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Money
          </button>
        </div>
        <button
          onClick={onBreak}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4"
        >
          Break Piggy Bank
        </button>
        <h3 className="text-lg font-bold mb-2">Transactions</h3>
        <div className="bg-white shadow rounded p-4 w-64">
          {transactions.length > 0 ? (
            transactions.map((t, i) => (
              <div key={i} className="flex justify-between border-b py-1">
                <span>{t.type}</span>
                <span>Rs {t.amount}</span>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No transactions available</div>
          )}
        </div>
      </div>
    );
  }
  
  
  export default PiggyBankScreen