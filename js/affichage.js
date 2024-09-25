
// Get the container element
const gridContainer = document.getElementById('affichage');

// Array of image URLs
const imageUrls = ["infinite_chess.png", "araignee.jpg", "balle.gif", "balleBasket.png", "balleTennis.png", "creature.gif", "pokeball.png", "room.png", "table.png", "vision.png"];
var nbI = 0;
var currImage = 0;
// Create the grid
imageUrls.forEach((imageUrl) => {
    // Create a new image element
    const image = document.createElement('img');
    image.src = "../media/image/"+imageUrl;
    image.id=nbI;

    // Add click event listener to each image
    image.addEventListener('click', () => {
        currImage=image.id;
        gridContainer.style.display="none";
        // Create a modal element
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Create an enlarged image element
        const enlargedImage = document.createElement('img');
        enlargedImage.src = "../media/image/"+imageUrl;

        const quitButton = document.createElement('button');
        quitButton.textContent = 'X';
        quitButton.addEventListener('click', () => {
            // Handle previous image navigation
            modal.remove();
            gridContainer.style.display="grid";
        });
        // Add previous and next buttons
        const previousButton = document.createElement('button');
        previousButton.textContent = 'Previous';
        previousButton.addEventListener('click', () => {
            // Handle previous image navigation
            currImage = parseInt(currImage)-1;
            if(currImage<0){
                currImage=imageUrls.length-1;
            }
            enlargedImage.src = "../media/image/"+imageUrls[currImage];
        });

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', () => {
            // Handle next image navigation
            currImage = parseInt(currImage)+1;
            if(currImage>imageUrls.length-1){
                currImage=0;
            }
            enlargedImage.src = "../media/image/"+imageUrls[currImage];
        });

        // Append elements to the modal
        modal.appendChild(enlargedImage);
        modal.appendChild(quitButton);
        modal.appendChild(previousButton);
        modal.appendChild(nextButton);

        // Append the modal to the document body
        document.body.appendChild(modal);
    });

    // Append the image to the grid container
    gridContainer.appendChild(image);
    nbI++;
});