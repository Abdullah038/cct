function calculateCalories() {
  var age = parseInt(document.getElementById("age").value);
  var heightFt = parseInt(document.getElementById("height-ft").value);
  var heightIn = parseInt(document.getElementById("height-in").value);
  var weight = parseInt(document.getElementById("weight").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var activityLevel = document.querySelector(
    'input[name="activity"]:checked'
  ).value;

  // Convert total height to inches
  var totalHeight = heightFt * 12 + heightIn;

  // Basic Metabolic Rate calculation adjusted by gender
  var bmr = 4.536 * weight + 15.88 * totalHeight - 5 * age;
  bmr += gender === "male" ? 5 : -161;

  // Adjust BMR based on activity level
  var calories;
  let resultText = "";
  switch (activityLevel) {
    case "inactive":
      calories = bmr * 1.2;
      resultText =
        "Minimal Movement: If you're not very active during the day, it's important to watch your calorie intake carefully. This calculation is based on minimal physical activity.";
      break;
    case "somewhat_active":
      calories = bmr * 1.375;
      resultText =
        "Moderately Active: This level is for those who engage in light physical activity or exercise a few times a week. Keep up the good work and consider increasing your activity level for greater health benefits.";
      break;
    case "active":
      calories = bmr * 1.55;
      resultText =
        "Regularly Active: Great job! You exercise regularly and lead an active lifestyle. This calorie level is designed to support your activity level and help maintain your weight.";
      break;
    case "very_active":
      calories = bmr * 1.725;
      resultText =
        "Highly Active: You're on the move a lot with either vigorous exercise or sports. This calorie intake supports your high energy expenditure and aids in recovery and performance.";
      break;
    default:
      calories = bmr; // Default to sedentary if no match
      resultText =
        "Please select an activity level to see your recommended calorie intake.";
  }

  // Display the result
  document.getElementById("calories-result").textContent =
    Math.round(calories);
  document.querySelector(".calories-result-text").textContent = resultText;
}
