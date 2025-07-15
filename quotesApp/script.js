const button = document.getElementById('get-quote-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const quotes = [{
    "quote": "I’m on a whiskey diet. I’ve lost three days already.",
    "author": "Tommy Cooper"
  },
  {
    "quote": "I used to think I was indecisive, but now I’m not so sure.",
    "author": "Unknown"
  },
  {
    "quote": "I always arrive late at the office, but I make up for it by leaving early.",
    "author": "Charles Lamb"
  },
  {
    "quote": "I'm writing a book. I've got the page numbers done.",
    "author": "Steven Wright"
  },
  {
    "quote": "I intend to live forever. So far, so good.",
    "author": "Steven Wright"
  },
  {
    "quote": "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    "author": "Steven Wright"
  },
  {
    "quote": "A day without sunshine is like, you know, night.",
    "author": "Steve Martin"
  },
  {
    "quote": "The early bird might get the worm, but the second mouse gets the cheese.",
    "author": "Steven Wright"
  },
  {
    "quote": "If you think nobody cares if you’re alive, try missing a couple of payments.",
    "author": "Earl Wilson"
  },
  {
    "quote": "I’m not arguing, I’m just explaining why I’m right.",
    "author": "Unknown"
  },
  {
    "quote": "My fake plants died because I did not pretend to water them.",
    "author": "Mitch Hedberg"
  },
  {
    "quote": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "author": "Unknown"
  },
  {
    "quote": "I refuse to join any club that would have me as a member.",
    "author": "Groucho Marx"
  },
  {
    "quote": "A clear conscience is usually the sign of a bad memory.",
    "author": "Steven Wright"
  },
  {
    "quote": "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "author": "Alan Dundes"
  },
  {
    "quote": "I remixed a remix, it was back to normal.",
    "author": "Mitch Hedberg"
  },
  {
    "quote": "Common sense is like deodorant. The people who need it most never use it.",
    "author": "Unknown"
  },
  {
    "quote": "Behind every great man is a woman rolling her eyes.",
    "author": "Jim Carrey"
  },
  {
    "quote": "I find television very educational. Every time someone turns it on, I go in the other room and read a book.",
    "author": "Groucho Marx"
  },
  {
    "quote": "Why don’t scientists trust atoms? Because they make up everything!",
    "author": "Unknown"
  },
  {
    "quote": "I haven’t spoken to my wife in years. I didn’t want to interrupt her.",
    "author": "Rodney Dangerfield"
  },
  {
    "quote": "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
    "author": "Unknown"
  },
  {
    "quote": "It’s not that I’m afraid to die, I just don’t want to be there when it happens.",
    "author": "Woody Allen"
  },
  {
    "quote": "I’m not lazy, I’m just on energy-saving mode.",
    "author": "Unknown"
  },
  {
    "quote": "If you think you are too small to make a difference, try sleeping with a mosquito.",
    "author": "Dalai Lama"
  }]


function getRandomElement() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}


// Function to display a quote
function displayQuote() {
    const { quote, author } = getRandomElement();
    // First fade out the current quote
    quoteText.classList.remove('fade-in');
    quoteAuthor.classList.remove('fade-in');
    quoteText.classList.add('fade-out');
    quoteAuthor.classList.add('fade-out');

    // Wait for the fade-out to complete before updating content
    setTimeout(() => {
        quoteText.textContent = quote;
        quoteAuthor.textContent = author;

        // Fade in the new quote
        quoteText.classList.remove('fade-out');
        quoteAuthor.classList.remove('fade-out');
        quoteText.classList.add('fade-in');
        quoteAuthor.classList.add('fade-in');
    }, 1000); // Match this duration to your fade-out transition
}


// Event listener for the button
button.addEventListener('click', displayQuote);

// Display initial quote on page load
displayQuote();
