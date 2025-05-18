
// document.getElementById('moreTabBtn').addEventListener('click', function () {
//     // Hide existing sections
//     const mainSections = document.querySelectorAll('main > section');
//     mainSections.forEach(section => section.style.display = 'none');

//     // Show More Features
//     document.getElementById('moreFeatures').style.display = 'block';
// });

// // Back button functionality
// document.getElementById('backBtn').addEventListener('click', function () {
//     // Hide More Features
//     document.getElementById('moreFeatures').style.display = 'none';

//     // Show existing sections
//     const mainSections = document.querySelectorAll('main > section');
//     mainSections.forEach(section => section.style.display = 'block');
// });

// document.getElementById('learnMoreBtn').addEventListener('click', function () {
//     const content = document.getElementById('educationContent');
//     content.style.display = content.style.display === 'none' ? 'block' : 'none';
// });

// document.getElementById('shareBtn').addEventListener('click', function () {
//     const userInput = document.getElementById('userInput').value;
//     if (userInput) {
//         const li = document.createElement('li');
//         li.textContent = userInput;
//         document.getElementById('communityList').appendChild(li);
//         document.getElementById('userInput').value = ''; // Clear input
//     } else {
//         alert('Please enter a message to share!');
//     }
// });

// // Store history
// let history = [];

// // Calculate Carbon Footprint
// document.getElementById('calculateBtn').addEventListener('click', function () {
//     const transportation = document.getElementById('transportation').value;
//     const meals = parseInt(document.getElementById('meals').value);
//     const waste = parseFloat(document.getElementById('waste').value);

//     // Basic calculation logic
//     let carbonFootprint = 0;

//     if (transportation.toLowerCase() === 'car') {
//         carbonFootprint += 10; // Example for car
//     } else if (transportation.toLowerCase() === 'bus') {
//         carbonFootprint += 5; // Example for bus
//     } else if (transportation.toLowerCase() === 'bike') {
//         carbonFootprint += 1; // Example for bike
//     }

//     // Meals: Assume each meal contributes 1.5 kg CO2 (simplified)
//     if (!isNaN(meals)) {
//         carbonFootprint += meals * 1.5;
//     }

//     // Waste: Assume 1 kg of waste contributes 0.5 kg CO2
//     if (!isNaN(waste)) {
//         carbonFootprint += waste * 0.5;
//     }

//     // Display result
//     document.getElementById('result').textContent = `Estimated Carbon Footprint: ${carbonFootprint} kg CO2 per day.`;

//     // Visual representation
//     const fillPercentage = Math.min(carbonFootprint / 50 * 100, 100); // Assuming 50 kg is max
//     document.getElementById('footprintFill').style.width = fillPercentage + '%';

//     // Provide tips based on the carbon footprint
//     const tips = [];
//     if (carbonFootprint > 20) {
//         tips.push("Consider using public transport or biking more often.");
//     }
//     if (carbonFootprint > 15) {
//         tips.push("Try reducing meat consumption to lower your carbon footprint.");
//     }
//     if (carbonFootprint > 10) {
//         tips.push("Minimize waste by recycling and composting.");
//     }
//     if (transportation.toLowerCase() === 'car' && carbonFootprint > 15) {
//         tips.push("Consider carpooling to reduce emissions.");
//     }

//     // Display tips
//     const tipsList = document.getElementById('tipsList');
//     tipsList.innerHTML = ''; // Clear previous tips
//     tips.forEach(tip => {
//         const li = document.createElement('li');
//         li.textContent = tip;
//         tipsList.appendChild(li);
//     });

//     // Add the result to history
//     history.push(carbonFootprint);
//     displayHistory(); // Call the function to display history
// });

// // Display carbon footprint history
// function displayHistory() {
//     const historyList = document.getElementById('historyList');
//     historyList.innerHTML = ''; // Clear previous history
//     history.forEach(entry => {
//         const li = document.createElement('li');
//         li.textContent = `${entry} kg CO2`;
//         historyList.appendChild(li);
//     });
// }

// // Reset button functionality
// document.getElementById('resetBtn').addEventListener('click', function () {
//     document.getElementById('transportation').value = '';
//     document.getElementById('meals').value = '';
//     document.getElementById('waste').value = '';
//     document.getElementById('result').textContent = '';
//     document.getElementById('tipsList').innerHTML = '';
//     document.getElementById('userInput').value = ''; // Clear community input as well
//     document.getElementById('footprintFill').style.width = '0%'; // Reset visual representation
// });


// // Challenge tracking functionality
// const challengeCheckboxes = document.querySelectorAll('#challengeList input[type="checkbox"]');
// const challengeStatus = document.getElementById('challengeStatus');

// // Event listener for checking challenges
// challengeCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', function () {
//         updateChallengeStatus();
//         if (this.checked) {
//             alert("Great job! You've completed a challenge!");
//         }
//     });
// });

// // Update challenge status
// function updateChallengeStatus() {
//     const completedChallenges = Array.from(challengeCheckboxes).filter(checkbox => checkbox.checked).length;
//     const totalChallenges = challengeCheckboxes.length;
//     challengeStatus.textContent = `You have completed ${completedChallenges} out of ${totalChallenges} challenges.`;
// }

// // Reset Challenges button functionality
// document.getElementById('resetChallengesBtn').addEventListener('click', function () {
//     challengeCheckboxes.forEach(checkbox => {
//         checkbox.checked = false; // Uncheck all boxes
//     });
//     challengeStatus.textContent = ''; // Clear challenge status
// });



// let activityCount = 0;

// document.getElementById('logActivityBtn').addEventListener('click', function () {
//     const activityInput = document.getElementById('activityInput').value;
//     if (activityInput) {
//         const li = document.createElement('li');
//         const timestamp = new Date().toLocaleString();
//         li.textContent = `${timestamp}: ${activityInput}`;

//         const ratingInput = document.createElement('input');
//         ratingInput.type = 'number';
//         ratingInput.min = 1;
//         ratingInput.max = 5;
//         ratingInput.placeholder = "Rate impact";
//         li.appendChild(ratingInput); // Add rating input to the list item

//         document.getElementById('activityList').appendChild(li);
//         document.getElementById('activityInput').value = ''; // Clear input

//         activityCount++; // Increment activity count
//         document.getElementById('activityCount').textContent = `Total Activities Logged: ${activityCount}`; // Update count display
//     } else {
//         alert('Please enter an activity to log!');
//     }
// });

// // Reminder alert
// setInterval(() => {
//     alert("Don't forget to log your sustainable activities today!");
// }, 86400000); // 86400000 milliseconds = 1 day


// // Sustainability Quiz functionality
// document.getElementById('submitQuizBtn').addEventListener('click', function () {
//     const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
//     if (selectedAnswer) {
//         if (selectedAnswer.value === 'CO2') {
//             document.getElementById('quizResult').textContent = 'Correct! Carbon Dioxide is the main greenhouse gas.';
//         } else {
//             document.getElementById('quizResult').textContent = 'Incorrect. The correct answer is Carbon Dioxide.';
//         }
//     } else {
//         alert('Please select an answer!');
//     }
// });
// // Reset Activity Log functionality
// document.getElementById('resetActivityBtn').addEventListener('click', function () {
//     document.getElementById('activityInput').value = ''; // Clear input
//     document.getElementById('activityList').innerHTML = ''; // Clear the activity list
// });

// // Reset Community Input functionality
// document.getElementById('resetCommunityBtn').addEventListener('click', function () {
//     document.getElementById('userInput').value = ''; // Clear input
//     document.getElementById('communityList').innerHTML = ''; // Clear the community list
// });

// // Reset Footprint History functionality
// document.getElementById('resetHistoryBtn').addEventListener('click', function () {
//     history = []; // Clear the history array
//     displayHistory(); // Update the display
// });

// // Reset Quiz functionality
// document.getElementById('resetQuizBtn').addEventListener('click', function () {
//     const quizInputs = document.querySelectorAll('input[name="quiz"]');
//     quizInputs.forEach(input => input.checked = false); // Uncheck all radio buttons
//     document.getElementById('quizResult').textContent = ''; // Clear quiz result
// });
// document.getElementById('submitFeedbackBtn').addEventListener('click', function () {
//     const feedback = document.getElementById('feedbackInput').value;
//     if (feedback) {
//         // Display "Thank you for your feedback!"
//         const feedbackStatus = document.getElementById('feedbackStatus');
//         feedbackStatus.innerText = "Thank you for your feedback!";

//         // Clear the feedback input field
//         document.getElementById('feedbackInput').value = ''; 

//         // Hide the feedback message after 30 seconds
//         setTimeout(function () {
//             feedbackStatus.innerText = ''; // Clear the feedback status message
//         }, 2000); // 30 seconds = 30000 milliseconds
//     } else {
//         document.getElementById('feedbackStatus').innerText = "Please enter your feedback.";
//     }
// });


// // Add Challenge functionality
// document.getElementById('addChallengeBtn').addEventListener('click', function () {
//     const challengeInput = document.getElementById('customChallengeInput').value;
//     if (challengeInput) {
//         const li = document.createElement('li');
//         li.textContent = challengeInput;
//         document.getElementById('userChallengesList').appendChild(li);
//         document.getElementById('customChallengeInput').value = ''; // Clear input
//     } else {
//         alert('Please enter a challenge!');
//     }
// });

















































document.getElementById('moreTabBtn').addEventListener('click', function () {
    // Hide existing sections
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach(section => section.style.display = 'none');

    // Show More Features
    document.getElementById('moreFeatures').style.display = 'block';
});

// Back button functionality
document.getElementById('backBtn').addEventListener('click', function () {
    // Hide More Features
    document.getElementById('moreFeatures').style.display = 'none';

    // Show existing sections
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach(section => section.style.display = 'block');
});

document.getElementById('learnMoreBtn').addEventListener('click', function () {
    const content = document.getElementById('educationContent');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('shareBtn').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const li = document.createElement('li');
        li.textContent = userInput;
        document.getElementById('communityList').appendChild(li);
        document.getElementById('userInput').value = ''; // Clear input
    } else {
        alert('Please enter a message to share!');
    }
});

//Store the history of carbon footprint and total footprint
let history = [];
let totalCarbonFootprint = 0; // Variable to store the total footprint

// Update the Dashboard with the current total carbon footprint
function updateDashboard() {
    // Update the total carbon footprint displayed on the dashboard
    document.getElementById('totalFootprint').textContent = totalCarbonFootprint.toFixed(2); // Show total footprint
}

// Calculate Carbon Footprint
document.getElementById('calculateBtn').addEventListener('click', function () {
    const transportation = document.getElementById('transportation').value;
    const meals = parseInt(document.getElementById('meals').value);
    const waste = parseFloat(document.getElementById('waste').value);

    // Basic calculation logic
    let carbonFootprint = 0;

    if (transportation.toLowerCase() === 'car') {
        carbonFootprint += 10; // Example for car
    } else if (transportation.toLowerCase() === 'bus') {
        carbonFootprint += 5; // Example for bus
    } else if (transportation.toLowerCase() === 'bike') {
        carbonFootprint += 1; // Example for bike
    }

    // Meals: Assume each meal contributes 1.5 kg CO2 (simplified)
    if (!isNaN(meals)) {
        carbonFootprint += meals * 1.5;
    }

    // Waste: Assume 1 kg of waste contributes 0.5 kg CO2
    if (!isNaN(waste)) {
        carbonFootprint += waste * 0.5;
    }

    // Display result in the Calculate section
    document.getElementById('result').textContent = `Estimated Carbon Footprint: ${carbonFootprint} kg CO2 per day.`;

    // Visual representation
    const fillPercentage = Math.min(carbonFootprint / 50 * 100, 100); // Assuming 50 kg is max
    document.getElementById('footprintFill').style.width = fillPercentage + '%';

    // Provide tips based on the carbon footprint
    const tips = [];
    if (carbonFootprint > 20) {
        tips.push("Consider using public transport or biking more often.");
    }
    if (carbonFootprint > 15) {
        tips.push("Try reducing meat consumption to lower your carbon footprint.");
    }
    if (carbonFootprint > 10) {
        tips.push("Minimize waste by recycling and composting.");
    }
    if (transportation.toLowerCase() === 'car' && carbonFootprint > 15) {
        tips.push("Consider carpooling to reduce emissions.");
    }

    // Display tips
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = ''; // Clear previous tips
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Update history and total footprint
    history.push(carbonFootprint);
    totalCarbonFootprint += carbonFootprint; // Update total carbon footprint

    // Update the Dashboard with the new total carbon footprint
    updateDashboard(); // This will update the dashboard even if it's hidden

    displayHistory(); // Call the function to display history
});

// Display carbon footprint history
function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear previous history
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry} kg CO2`;
        historyList.appendChild(li);
    });
}

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('transportation').value = '';
    document.getElementById('meals').value = '';
    document.getElementById('waste').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('tipsList').innerHTML = '';
    document.getElementById('userInput').value = ''; // Clear community input as well
    document.getElementById('footprintFill').style.width = '0%'; // Reset visual representation
});



// Challenge tracking functionality
const challengeCheckboxes = document.querySelectorAll('#challengeList input[type="checkbox"]');
const challengeStatus = document.getElementById('challengeStatus');

// Function to update challenge count and status dynamically
function updateChallengeStatus() {
    const completedChallenges = Array.from(challengeCheckboxes).filter(checkbox => checkbox.checked).length;
    const totalChallenges = challengeCheckboxes.length;
    document.getElementById('completedChallenges').textContent = completedChallenges;

    // Update challenge status message
    challengeStatus.textContent = `You have completed ${completedChallenges} out of ${totalChallenges} challenges.`;
}

// Event listener for checking challenges
challengeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        updateChallengeStatus();
        if (this.checked) {
            alert("Great job! You've completed a challenge!");
        }
    });
});

// Initialize the challenge status when the page loads
updateChallengeStatus();

// Add Challenge functionality
document.getElementById('addChallengeBtn').addEventListener('click', function () {
    const challengeInput = document.getElementById('customChallengeInput').value;
    if (challengeInput) {
        // Create a new list item for the custom challenge
        const li = document.createElement('li');
        li.textContent = challengeInput;

        // Create a checkbox for the new challenge
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.prepend(checkbox); // Add checkbox before the challenge text
        document.getElementById('userChallengesList').appendChild(li);

        // Add the new checkbox to the challengeCheckboxes list
        challengeCheckboxes.push(checkbox);

        // Add event listener to the new checkbox
        checkbox.addEventListener('change', function () {
            updateChallengeStatus();
            if (this.checked) {
                alert("Great job! You've completed a challenge!");
            }
        });

        // Clear the input field after adding the challenge
        document.getElementById('customChallengeInput').value = ''; 

        // Recalculate and update the challenge status
        updateChallengeStatus();
    } else {
        alert('Please enter a challenge!');
    }
});

// Reset Challenges button functionality
document.getElementById('resetChallengesBtn').addEventListener('click', function () {
    challengeCheckboxes.forEach(checkbox => {
        checkbox.checked = false; // Uncheck all boxes
    });
    challengeStatus.textContent = ''; // Clear challenge status
    updateChallengeStatus(); // Update the challenge count after reset
});


let activityCount = 0; // Track the number of activities logged

// Log activity and update dashboard
document.getElementById('logActivityBtn').addEventListener('click', function () {
    const activityInput = document.getElementById('activityInput').value;
    
    if (activityInput) {
        // Create a new list item (li) for the activity
        const li = document.createElement('li');
        const timestamp = new Date().toLocaleString();
        li.textContent = `${timestamp}: ${activityInput}`;

        // Create a rating input element for the user to rate the impact of the activity
        const ratingInput = document.createElement('input');
        ratingInput.type = 'number';
        ratingInput.min = 1;
        ratingInput.max = 5;
        ratingInput.placeholder = "Rate impact";
        li.appendChild(ratingInput); // Add rating input to the list item

        // Append the list item to the 'activityList' to show it in the logged activities
        document.getElementById('activityList').appendChild(li);

        // Clear the input field after adding the activity
        document.getElementById('activityInput').value = '';

        // Increment activity count and update the dashboard
        activityCount++;
        document.getElementById('loggedActivities').textContent = activityCount; // Update activities count in the dashboard
    } else {
        alert('Please enter an activity to log!');
    }
});

// Reset button functionality for the dashboard
document.getElementById('resetBtn').addEventListener('click', function () {
    // Reset all input values
    document.getElementById('transportation').value = '';
    document.getElementById('meals').value = '';
    document.getElementById('waste').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('tipsList').innerHTML = '';
    document.getElementById('userInput').value = ''; // Clear community input as well
    document.getElementById('footprintFill').style.width = '0%'; // Reset visual representation
    
    // Reset dashboard values
    totalFootprint = 0;
    document.getElementById('totalFootprint').textContent = '0'; // Reset total footprint
    
    // Reset challenge checkboxes and count
    challengeCheckboxes.forEach(checkbox => checkbox.checked = false);
    document.getElementById('completedChallenges').textContent = '0'; // Reset completed challenges count
    challengeStatus.textContent = ''; // Clear challenge status
    
    // Reset activity log and count
    document.getElementById('activityList').innerHTML = ''; // Clear activity log
    activityCount = 0;
    document.getElementById('loggedActivities').textContent = '0'; // Reset activities count
});


// Reminder alert
setInterval(() => {
    alert("Don't forget to log your sustainable activities today!");
}, 86400000); // 86400000 milliseconds = 1 day


// Sustainability Quiz functionality
document.getElementById('submitQuizBtn').addEventListener('click', function () {
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === 'CO2') {
            document.getElementById('quizResult').textContent = 'Correct! Carbon Dioxide is the main greenhouse gas.';
        } else {
            document.getElementById('quizResult').textContent = 'Incorrect. The correct answer is Carbon Dioxide.';
        }
    } else {
        alert('Please select an answer!');
    }
});
// Reset Activity Log functionality
document.getElementById('resetActivityBtn').addEventListener('click', function () {
    document.getElementById('activityInput').value = ''; // Clear input
    document.getElementById('activityList').innerHTML = ''; // Clear the activity list
});

// Reset Community Input functionality
document.getElementById('resetCommunityBtn').addEventListener('click', function () {
    document.getElementById('userInput').value = ''; // Clear input
    document.getElementById('communityList').innerHTML = ''; // Clear the community list
});

// Reset Footprint History functionality
document.getElementById('resetHistoryBtn').addEventListener('click', function () {
    history = []; // Clear the history array
    displayHistory(); // Update the display
});

// Reset Quiz functionality
document.getElementById('resetQuizBtn').addEventListener('click', function () {
    const quizInputs = document.querySelectorAll('input[name="quiz"]');
    quizInputs.forEach(input => input.checked = false); // Uncheck all radio buttons
    document.getElementById('quizResult').textContent = ''; // Clear quiz result
});
document.getElementById('submitFeedbackBtn').addEventListener('click', function () {
    const feedback = document.getElementById('feedbackInput').value;
    if (feedback) {
        // Display "Thank you for your feedback!"
        const feedbackStatus = document.getElementById('feedbackStatus');
        feedbackStatus.innerText = "Thank you for your feedback!";

        // Clear the feedback input field
        document.getElementById('feedbackInput').value = ''; 

        // Hide the feedback message after 30 seconds
        setTimeout(function () {
            feedbackStatus.innerText = ''; // Clear the feedback status message
        }, 2000); // 30 seconds = 30000 milliseconds
    } else {
        document.getElementById('feedbackStatus').innerText = "Please enter your feedback.";
    }
});


// Add Challenge functionality
document.getElementById('addChallengeBtn').addEventListener('click', function () {
    const challengeInput = document.getElementById('customChallengeInput').value;
    if (challengeInput) {
        const li = document.createElement('li');
        li.textContent = challengeInput;
        document.getElementById('userChallengesList').appendChild(li);
        document.getElementById('customChallengeInput').value = ''; // Clear input
    } else {
        alert('Please enter a challenge!');
    }
});















