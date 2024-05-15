document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let continuePrompt = true;
  
    while (continuePrompt) {
      const weight = parseFloat(document.getElementById('weight').value);
      const feet = parseFloat(document.getElementById('feet').value);
      const inches = parseFloat(document.getElementById('inches').value);
      const heightInMeters = ((feet * 12) + inches) * 0.0254; // Convert feet and inches to meters
      const bmi = weight / (heightInMeters ** 2);
      let bmiCategory = '';
  
      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obese';
      }
  
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p>
                             <p>BMI Category: ${bmiCategory}</p>`;
  
      continuePrompt = confirm("Do you wish to continue?");
      if (continuePrompt) {
        document.getElementById('weight').value = '';
        document.getElementById('feet').value = '';
        document.getElementById('inches').value = '';
        resultDiv.innerHTML = ''; // Clear previous result
      }
    }
  });