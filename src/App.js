import { useState } from 'react';
import InputForm from './components/InputForm';
import InvestmentCalculator from './components/InvestmentCalculator';
import Results from './components/Results';

function App() {

  const [input, setInput] = useState(null)

  const [results, setResults] = useState([])

  const calculateHandler = (userInput) => {
    setInput(userInput)
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData)
  };

  return (
    <div>
      <InvestmentCalculator />
      <InputForm onCalculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {results.length === 0 && <p style={{ textAlign: 'center' }}>No results calculated yet.</p>}
      {results.length > 0 && <Results results={results} input={input.currentSavings} />}


    </div>
  );
}

export default App;
