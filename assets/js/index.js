   // Welcome alert on page load  
   window.onload = function () {  
    alert("Welcome to the Partizan Basketball Club!");  
    loadBlogPosts(); // Call the function to load blog posts  
    loadPlayers(); // Load players on page load  
};  

// Function to fetch and display blog posts  
function loadBlogPosts() {  
    fetch('content.json')  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.json();  
        })  
        .then(data => {  
            const postsContainer = document.getElementById('blog-posts');  
            // Clear existing content  
            postsContainer.innerHTML = '';  
            data.blogPosts.forEach(post => {  
                const postElement = document.createElement('div');  
                postElement.classList.add('blog-post');  
                postElement.innerHTML = `  
                    <h3>${post.title}</h3>  
                    <p><strong>Date:</strong> ${post.date}</p>  
                    <p>${post.content}</p>  
                `;  
                postsContainer.appendChild(postElement);  
            });  
        })  
        .catch(error => {  
            console.error('There has been a problem with your fetch operation:', error);  
            const postsContainer = document.getElementById('blog-posts');  
            postsContainer.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';  
        });  
}  

// Function to load players  
function loadPlayers() {  
    // Simulated data for players  
    const players = [  
        { name: "Sterling Brown", position: "Guard", number: 12, info: "Sterling Brown is a Guard known for his skills." },  
        { name: "Tyrique Jones", position: "Center", number: 88, info: "Tyrique Jones is a skilled Center who can dominate the court." },  
        { name: "Aleksej Pokuševski", position: "Forward", number: 11, info: "Aleksej Pokuševski is a versatile Forward with great potential." }  
    ];  

    const playerBody = document.getElementById('player-body');  
    players.forEach((player, index) => {  
        const row = document.createElement('tr');  
        row.innerHTML = `  
            <td class="player" data-info="${player.info}">${player.name}</td>  
            <td>${player.position}</td>  
            <td>${player.number}</td>  
            <td>  
                <button onclick="editPlayer(${index})">Edit</button>  
                <button onclick="deletePlayer(${index})">Delete</button>  
            </td>  
        `;  
        playerBody.appendChild(row);  
    });  
}  

// Function to handle player editing  
function editPlayer(index) {  
    const newName = prompt("Enter new name:");  
    const newPosition = prompt("Enter new position:");  
    const newNumber = prompt("Enter new number:");  

    if (newName && newPosition && newNumber) {  
        const playerRows = document.querySelectorAll('#player-body tr');  
        const row = playerRows[index];  
        row.querySelector('td:first-child').innerText = newName;  
        row.querySelector('td:nth-child(2)').innerText = newPosition;  
        row.querySelector('td:nth-child(3)').innerText = newNumber;  
        alert("Player updated successfully!");  
    } else {  
        alert("Edit operation was canceled.");  
    }  
}  

// Function to handle player deletion  
function deletePlayer(index) {  
    const playerRows = document.querySelectorAll('#player-body tr');  
    if (confirm("Are you sure you want to delete this player?")) {  
        playerRows[index].remove();  
        alert("Player deleted successfully!");  
    }  
}  

// Smooth scrolling for navigation links  
const navLinks = document.querySelectorAll('.navbar a');  
navLinks.forEach(link => {  
    link.addEventListener('click', function (e) {  
        e.preventDefault();  
        const targetId = this.getAttribute('href');  
        const targetSection = document.querySelector(targetId);  
        if (targetSection) {  
            targetSection.scrollIntoView({ behavior: 'smooth' });  
        }  
    });  
});  

// Player lightbox functionality  
const players = document.querySelectorAll('.player');  
players.forEach(player => {  
    player.addEventListener('click', () => {  
        const playerInfo = player.getAttribute('data-info');  
        document.getElementById('lightbox-content').innerText = playerInfo;  
        document.getElementById('lightbox').style.display = "flex";  
    });  
});  

// Close the lightbox  
function closeLightbox() {  
    document.getElementById('lightbox').style.display = "none";  
}  

// Accordion Menu Functionality  
const accordionButtons = document.querySelectorAll('.accordion-button');  
accordionButtons.forEach(button => {  
    button.addEventListener('click', function () {  
        this.classList.toggle('active');  
        const content = this.nextElementSibling;  
        if (content.style.display === "block") {  
            content.style.display = "none";  
        } else {  
            content.style.display = "block";  
        }  
    });  
});  