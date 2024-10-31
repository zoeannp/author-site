// Mobile Navigation Menu'
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    onclick=document.getElementById("hamburger").style.display = "none";
  }

function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        onclick=document.getElementById("hamburger").style.display = "block";
    }

// Re-ordering elements in the DOM for books.html

window.addEventListener('resize', reorderElements);
window.addEventListener('load', reorderElements);

function reorderElements() {
    const container = document.querySelector('.book-info');
    const seriesTitle = document.querySelector('.book-info h2');
    const releaseDate = document.querySelector('.book-info h3');
    const coupleName = document.querySelector('.book-info h4');
    const description = document.querySelector('.book-description');

    if (window.innerWidth < 768) {
        // Move seriesTitle, releaseDate, and release date to the top of the container
        container.prepend(seriesTitle);
        container.prepend(releaseDate);
        container.prepend(coupleName);
    } else {
        // Revert to original order on desktop
        container.append(seriesTitle);
        container.append(releaseDate);
        container.append(coupleName);
    }
}