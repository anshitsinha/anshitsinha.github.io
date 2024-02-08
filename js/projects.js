
// Projects data
const projects = [
    // Project details: name, type, position, and image link
    {
        name: 'Manga2Ascii',
        type: 'Fun',
        pos: 'start',
        image: './assets/Projects/Manga2Ascii.png' 
    },
    {
        name: 'Landing Page',
        type: 'Web Design',
        pos: 'mid',
        image: './assets/Projects/LandingPage.png' 
    },
    {
        name: 'Portfolio',
        type: 'Website',
        pos: 'end',
        image: './assets/Projects/Portfolio.gif'
    },
    {
        name: 'Age Countdown',
        type: 'Application',
        pos: 'mid',
        image: './assets/Projects/AgeCountdown.png' 
    },
    {
        name: 'Preloader',
        type: 'Animation',
        pos: 'end',
        image: './assets/Projects/Preloader.png' 
    },
    {
        name: 'Stock Price Prediction',
        type: 'Machine Learning',
        pos: 'mid',
        image: './assets/Projects/StockPricePrediction.png' 
    },
    {
        name: 'Truth & Dare',
        type: 'Application',
        pos: 'start',
        image: './assets/Projects/TruthAndDare.png',
        link: 'https://anshitsinha.github.io/truth-or-dare/'
    },

    {
        name: 'Product Page',
        type: 'Web Design',
        pos: 'end',
        image: './assets/Projects/ProductPage.png',
        link: 'https://anshitsinha.github.io/ecstacy/'
    },
];

// Function to create project panels
const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);
        let imageContainer = document.createElement('div');
        imageContainer.className = `image-container`;
        let imageDiv = document.createElement('div');
        let imageLink = document.createElement('a');
        imageLink.href = project.link;
        imageLink.target = '_blank';
        let image = document.createElement('img');
        image.classList.add('project-image');
        image.src = project.image;
        let overlayButton = document.createElement('a');
        overlayButton.innerText = 'View Project';
        overlayButton.classList.add('overlay-button');
        overlayButton.style.visibility = 'hidden';
        overlayButton.href = project.link;

        // Event listeners for mouseover and mouseout to show/hide the button
        imageDiv.addEventListener('mouseover', () => {
            overlayButton.style.visibility = 'visible';
        });
        imageDiv.addEventListener('mouseout', () => {
            overlayButton.style.visibility = 'hidden';
        });

        // Event listener for moving the button with the mouse
        imageDiv.addEventListener('mousemove', (event) => {
            const speed = 0.45; // Adjust the speed factor as needed
            const displacement = 1; // Adjust the displacement factor as needed
            const rect = imageDiv.getBoundingClientRect();
            const mouseX = event.clientX - rect.left - rect.width / 2;
            const mouseY = event.clientY - rect.top - rect.height / 2;
            const buttonX = (mouseX / rect.width) * 100 * speed - displacement;
            const buttonY = (mouseY / rect.height) * 100 * speed - displacement;
            overlayButton.style.left = `calc(50% + ${buttonX}px)`;
            overlayButton.style.top = `calc(50% + ${buttonY}px)`;
        });

        // Set the initial position of the button to the center of the image
        overlayButton.style.left = `50%`;
        overlayButton.style.top = `50%`;
        overlayButton.style.transform = 'translate(-50%, -50%)';

        // Appending elements
        imageLink.appendChild(image);
        imageDiv.append(imageLink, overlayButton);
        imageContainer.appendChild(imageDiv);
        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');
        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;
        let projectType = document.createElement('p');
        projectType.innerText = project.type;
        projectDetails.append(projectTitle, projectType);
        panel.append(imageContainer, projectDetails);
        document.querySelector('.projects-slider').appendChild(panel);
    });
};

// Styling for the overlay button
const style = document.createElement('style');
style.innerHTML = `
    .overlay-button {
        position: absolute;
        display: inline-block;
        padding: 10px ;
        border: 0;
        text-decoration: none;
        border-radius: 15px;
        background-color: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.1);
        backdrop-filter: blur(30px);
        color: rgba(255,255,255,0.8);
        font-size: 14px;
        letter-spacing: 2px;
        cursor: pointer;
        text-transform: uppercase;
    }
`;
document.head.appendChild(style);

// Blog posts data
const blogPosts = [

    // Blog post details: title, time, image link, and post link
    {
        title: 'The digital renaissance',
        time: '10 Min',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c8e66786746849.5da35882a4d79.jpg',
        link: './Blogs/the-digital-renaissance-how-to-unlock-your-potential-in-the-age-of-information.html'
    },
    {
        title: 'Harnessing ancient wisdom',
        time: '7 Min',
        image: 'https://www.shutterstock.com/image-illustration/ancient-wisdom-landscape-ethereal-backdrop-600nw-2215196649.jpg',
        link: './Blogs/harnessing-ancient-wisdom-for-effortless-success-in-modern-life.html'
    },
    {
        title: 'The power of non-binary thinking',
        time: '12 Min',
        image: 'https://zett.zhdk.ch/content/uploads/2022/08/Was-ist....Lichtprojektion-mit-Profilscheinwerfern-plus-Kürbiskernöl_web_ABC2300.jpg',
        link: './Blogs/the-power-of-non-binary-thinking-unleashing-your-fullest-potential.html'
    }
];

// Function to create blog post sections
const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog-post');
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post-image-container');
        let imageLink = document.createElement('a');
        imageLink.href = post.link;
        imageLink.target = '_blank';
        let image = document.createElement('img');
        image.classList.add('blog-post-img');
        image.src = post.image;
        let overlayButton = document.createElement('a');
        overlayButton.innerText = 'Read Post';
        overlayButton.classList.add('overlay-button');
        overlayButton.style.visibility = 'hidden';
        overlayButton.href = post.link;

        // Event listeners for mouseover and mouseout to show/hide the button
        imageContainer.addEventListener('mouseover', () => {
            overlayButton.style.visibility = 'visible';
        });
        imageContainer.addEventListener('mouseout', () => {
            overlayButton.style.visibility = 'hidden';
        });

        // Event listener for moving the button with the mouse
        imageContainer.addEventListener('mousemove', (event) => {
            const speed = 0.45; // Adjust the speed factor as needed
            const displacement = 1; // Adjust the displacement factor as needed
            const rect = imageContainer.getBoundingClientRect();
            const mouseX = event.clientX - rect.left - rect.width / 2;
            const mouseY = event.clientY - rect.top - rect.height / 2;
            const buttonX = (mouseX / rect.width) * 100 * speed - displacement;
            const buttonY = (mouseY / rect.height) * 100 * speed - displacement;
            overlayButton.style.left = `calc(50% + ${buttonX}px)`;
            overlayButton.style.top = `calc(50% + ${buttonY}px)`;
        });

        // Set the initial position of the button to the center of the image
        overlayButton.style.left = `50%`;
        overlayButton.style.top = `50%`;
        overlayButton.style.transform = 'translate(-50%, -50%)';

        // Appending elements
        imageLink.appendChild(image);
        imageContainer.append(imageLink, overlayButton);
        let postDetails = document.createElement('div');
        postDetails.classList.add('post-details');
        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;
        let postTime = document.createElement('p');
        postTime.innerText = post.time;
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails);
        blogPostSection.appendChild(postDiv);
        document.getElementById('blog').appendChild(blogPostSection);
    });
};

// Export functions for creating projects and blog posts
export {
    createProjects,
    createBlogposts
};
