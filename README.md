# Tarot_Reader

A tarot app to get readings and learn about the many meanings of the cards.

# Goals
- Make an API for the entire 78-card tarot deck, referencing card name, number, suit, upright/reversed, and associated astrological, planetary, and elemental signs
- Add a child API with additonal meanings from other decks, with specific intentions, etc. to pull additional information for each card without overloading the main API
- Have a reading function, where users can customize the type of reading they want to get (all interpretaion is up to them, we just provide the cards) using a randomized draw of 1, 2, 3, etc. cards from the deck
- Feature a randomized Card of the Day on the homepage, linked to the card's full page
- Have a sideNav menu across the whole app
- Make a dropdown to explore the suits
- Feature different layouts to view cards at a glance (grid, list, single, etc.)
- Consistent and intuitive design and navigation elements across pages

# Stretch Goals
 - Have animations for card flips (home screen card of the day & during readings)
 - Save & store old readings to reference
 - Filter by card and meaning 
 - Log in & out
 - Share your readings w other users & comment on theirs
 - Draw from specific card meanings - ex. career, love, etc. instead of just the general
 - (likely unfeasible bc of how many cards there are) Draw specific readings based on the other cards in the reading
 - Select a custom theme
 - Select the deck of cards you want to use
 - Select your "reader" from like 3 characters, each with a different look & style
 - Create original artwork for icons & cards
 - 

# Figma & ERD
https://www.figma.com/file/LJ32eWYbcoA9LeRhM3K9TU/Tarot-Reader?type=design&node-id=0%3A1&mode=design&t=6MRfbxhsCUpwhXs0-1

*Lots of notes on components, design, and functionality on the lo-fi wireframes

# Takeaways
I really enjoyed this project; tarot is something I've loved for a long time, and this seemed like a cool way to showcase what I love about tarot - all the nuanced meanings, different interpretations, and gorgeous artwork. I had to hard code in the actually cool card art, because their artist/seller no longer hosts the card images standalone on her website, and the API made it difficult to reference artwork in an assets folder, so the standard tarot cards look very out of place in this app. But they work, and that's what counts.

I tried not to spend much time wireframing this project - I have a very thoroguh lo-fi wireframe with detailed planning notes, but I knew I could spend a long time fleshing out a hi-fi wireframe that would please me as a UX designer, but probably wouldn't serve me well as a developer. The lo-fi models had enough design for me to feel confident in my planning, and I would've wasted time doing detailed extraneous pages or functions like logging in/out that I wouldn't even get around to coding. I also knew with the scope of the API I wanted to create, that I needed to be careful where I spent my time.

I think I should've pushed myself to focus more on the elements I was uncomfortable with, like generating content solely from the back end/API instead of filling in a hard-coded framework, but I avoided it because I know the strategy of approaching a project like this will change with what we learn in the next unit, and because I had such a clear idea for all the information I wanted to showcase and exactly how I wanted to showcase it that I didn't want to burn myself out getting frustrated over DOM manipulation if it wasn't totally necessary. I think I did a good job without it, but I also know that with it I would be able to show all of what I compiled in the API, instead of just sample pages for the individual cards.

I was proud of myself for figuring out how to split my CSS and JS so that I could reuse a general file of each on every screen, and then use a second unique CSS or JS to customize any new elements or old elements that needed to be slightly different. I wish I realized it earlier, but it did save me a ton of time. I also formatted the project in a way that I could copy and paste for a lot of the different suits without changing too much. But yes, I definitely got distracted by the style and content components of this project.

# Future Goals
This is an app I'd really like to deploy, though I would have to use my own artwork for the cards (the ones I'm primarily using now are free domain I believe, but I don't like them and they don't fit the vibe) and I'm not sure how it would work featuring other people's published (even if it's available for free to read) interpretations of the cards when those people either sell readings or card decks. I could compile my own interpretations, but there are 78 cards, and part of what I liked about the linked APIs in this was that I could reference other people's interpretations, and there's the potential to import interpretations from all my favorite decks in one place (which is a lot easier than cross-referencing websites and books and my own spreadsheet). I feel like I already got lost in the content aspect of this project, and I don't want to fall down that rabbit hole again before working out more of the functionality stretch goals.

I do definitely want to do the readings; I don't think that will be hard if I look at how you'd draw cards from a normal deck for like a blackjack game. It will be harder to store that information per user, but I don't care about that as much. I got a little carried away with the initial wireframe in terms of how big the scope of this project could get (like fully changing the themes, creating personas of readers that users could pick from (just like headshots, very brief preset dialogue, and a different themed reading table and/or deck), and customized layouts and intentions for readings) considering the timeframe, but I do find those concpets exiciting. While it seems like a lot of work, would also be engaging - especially now that I have the main APIs together and the framework working.

I would like to work on my dom manipulation, so that I could populate the single cards and the additional meanings, because hard coding all of that is inefficient and not feasible. I will probably wait before doing any major overhauls with the components I have working until we learn React. Ideally we'll learn techniquest that will help me streamline everything, and piecing it together now will be a waste.

There are elements like adding a search bar and setting the Card of the Day to actually be randomized every day that are challenges I didn't take on but feel like I can handle now that I don't need to worry about everything else. I should also probably link it to MongoDB Atlas, so I don't need to delete whole databases in order to re-seed when I need to edit things. (Updating does not work when you have 78 cards and need to change aspects of each of them. Ctrl+F in the seed does)