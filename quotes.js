// Define an array of quotes
const quotes = [
    // Hustling
    "Hustle until you no longer need to introduce yourself.", 
    "The dream is free. The hustle is sold separately.", 
    "The only way to do great work is to love what you do.", 
    "The harder the battle, the sweeter the victory.", 
    "Don't watch the clock; do what it does. Keep going.", 
    "Success is walking from failure to failure with no loss of enthusiasm.", 
    "The best revenge is massive success.", 
    "Work hard, be kind, and amazing things will happen.", 
    "Success isn't about how much money you make, it's about the difference you make in people's lives.",
    "Don't wait for opportunity. Create it.", 
    
    // Entrepreneurship
    "Entrepreneurship is living a few years of your life like most people won't so you can spend the rest of your life like most people can't.", 
    "If you're not a risk taker, you should get the hell out of business.", 
    "The biggest risk is not taking any risk.", 
    "If you want to be an entrepreneur, it's not a job, it's a lifestyle.", 
    "The best way to predict the future is to create it.", 
    "Opportunities don't happen, you create them.", 
    "Entrepreneurship is about creating a life on your own terms.", 
    "Every problem is a gift—without problems we would not grow.", 
    "It's not about ideas. It's about making ideas happen.", 
    "The only limit to our realization of tomorrow will be our doubts of today.", 
    
    // Builders
    "We can't solve problems by using the same kind of thinking we used when we created them.", 
    "Build your own dreams, or someone else will hire you to build theirs.", 
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", 
    "The only way to do great work is to love what you do.", 
    "If you want to go fast, go alone. If you want to go far, go together.", 
    "The only thing worse than starting something and failing... is not starting something.", 
    "Don't be intimidated by what you don't know. That can be your greatest strength and ensure that you do things differently from everyone else.", 
    "A true entrepreneur is a doer not a dreamer.", 
    "The ones who are crazy enough to think they can change the world, are the ones who do.", 
    "If you can't explain it simply, you don't understand it well enough.", 

    // Optimism
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", 
    "Believe you can and you're halfway there.", 
    "Pessimism leads to weakness, optimism to power.", 
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
    "With the new day comes new strength and new thoughts.", 
    "Positive anything is better than negative nothing.", 
    "The most important thing is to look ahead. The past is your anchor.", 
    "You can't stop the waves, but you can learn to surf.", 
    "The only limit to our realization of tomorrow will be our doubts of today.", 
    "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.", 
    
    // Happiness
    "Happiness is not something ready made. It comes from your own actions.", 
    "Happiness is a warm puppy.", 
    "Enjoy your journey :)",
    "The secret of happiness is not in doing what one likes, but in liking what one does.", 
    "Happiness is not out there for us to find. The reason that it's not out there is that it's inside us.", 
    "Happiness is not having what you want. It is appreciating what you have.", 
    "The only way to do great work is to love what you do.", 
    "The greatest happiness you can have is knowing that you do not necessarily require happiness.", 
    "The greatest wealth is to live content with little.", 
    "It is not how much we have, but how much we enjoy, that makes happiness.", 
    
    // Self-care
    "Self-care is not selfish. You cannot serve from an empty vessel.", 
    "You yourself, as much as anybody in the entire universe, deserve your love and affection.", 
    "Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.", 
    "Self-care is giving the world the best of you, instead of what's left of you.", 
    "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", 
    "An empty lantern provides no light. Self-care is the fuel that allows your light to shine brightly.", 
    "Taking care of yourself makes you stronger for everyone in your life... including you.", 
    "The most powerful relationship you will ever have is the relationship with yourself.", 
    "You don't have to be perfect to be worthy of love and respect.", 
    "Self-love is the source of all our other loves.", 
];

// Get a random quote from the array
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Select the container element
const container = document.querySelector(".container");

// Create a new paragraph element to display the quote
const quoteElement = document.createElement("p");
quoteElement.textContent = randomQuote;

// Append the quote element to the container
container.appendChild(quoteElement);