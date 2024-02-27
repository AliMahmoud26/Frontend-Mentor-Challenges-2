// Importing the elements of app content
const adviceId = document.querySelector('.advice-id');
const adviceContent = document.querySelector('.advice-content');
const generatorBtn = document.querySelector('.generatorBtn');

// The API of the application
const url = "https://api.adviceslip.com/advice";

// Function to fetch a new piece of advice
// It will convert the response body to JSON
// But if the response doesn't exist or there's a problem, It'll return an error
// This Code With By ChatGpt In General. It's so simple and there're more than a way to write very simple code for this app
const fetchAdviceApp = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
};

// Function to update the advice content every time when you click the generatorBtn
const updateAdviceApp = async () => {
  const adviceData = await fetchAdviceApp();
  if (adviceData) {
    adviceId.textContent = adviceData.slip.id;
    adviceContent.textContent = adviceData.slip.advice;
  }
};

// Call updateAdvice once when the page loads - So when you open the applcation it gives you back an advice
updateAdviceApp();

// Event listener for the generator button
generatorBtn.addEventListener('click', updateAdviceApp);