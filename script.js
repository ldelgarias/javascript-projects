//The lines commented out are for the option of using an API list where you are fetching the quotes.
// Instead of localQuotes fo the array you would change back to apiQuotes.

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from localQuotes array. Change to apiQuotes if pulling for an API list.
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }   
    // Check Quote lenght to determine styling
    if (quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }  
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from API
//async function getQuotes() {
 //  loading();
  //  const apiUrl = 'https://type.fit/api/quotes';
  //  try {
 //       const response = await fetch (apiUrl);
 //       apiQuotes = await response.json();
 //       newQuote();
 //   } catch (error) {
        // Catch error here
  //  }
//}   

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
//getQuotes();
newQuote();