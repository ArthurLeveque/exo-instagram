window.addEventListener('load', e => {
    // Eléments HTML
    //Pour l'exo 1
    const toFeed = document.querySelectorAll('.to-feed');
    const toProfile = document.querySelectorAll('.to-profile');
    
    const feed = document.querySelector('#main-feed');
    const profile = document.querySelector('#main-profile');
    const search = document.querySelector('#main-search');

    const iconsFeed = document.querySelectorAll('.icon-feed');
    const iconsProfile = document.querySelectorAll('.icon-profile');

    const forMobileFeedHeader = document.querySelector('#header-container-feed');
    const forMobileProfileHeader = document.querySelector('#header-container-profile');

    //Pour l'exo 2
    const whereToPost = document.querySelector('#posts');

    //Pour l'exo 3
    const whereToSearch = document.querySelector('.pictures-searcher'); 
    const searchBar = document.querySelector('#search');

    //Pour l'exo 4
    const whereToShow = document.querySelector('.pictures-adder');

    // Variables
    //Pour l'exo 2
    // Tableaux dans lesquels on va piocher aléatoirement pour créer des faux posts
    const usernames = ['Michel', 'Robert', 'Gertrude', 'Micheline', 'Didier', 'Bernard', 'José', 'Gontrand'];
    const postLocations = ['Nantes', 'Paris', 'Clisson', 'Tokyo', 'Berlin', 'Strasboug', 'Mulhouse'];
    const descriptions = ['Waouw', 'Impressionnant', 'J\'adore', 'Photo/20', 'Ohlàlà', 'Tellement magique', 'Tellement romantique', 'J\'ai plus d\'idées'];

    //Pour l'exo 3
    const accessKey = 'C1kB2Y4566fImAjw4kfisMZiGKQcCp9No5NRajt_NVc'; //Clé qui permet de se connecter
    const perPageSearch = 20; // per_page est limité à 30 max, on prend donc 2 pages de 20 pour arriver à 40

    //Pour l'exo 4
    const query = 'animals'; //thème des images
    const perPage = 15; //nombre d'images par page

    //Pour l'exo 1
    const displayFeed = () => {
        // On change les icônes pour qu'elles correspondent à la page affichée
        iconsFeed.forEach(icon => {
            icon.src = 'assets/img/home-active.svg'
        });
        iconsProfile.forEach(icon => {
            icon.src = 'assets/img/profile.svg'
        });

        feed.classList.remove("hide"); //On enlève la classe qui permet de cacher la div
        profile.classList.add("hide");  //On rajoute la classe qui permet de cacher la div
        search.classList.add("hide");

        forMobileFeedHeader.classList.remove("hide");
        forMobileProfileHeader.classList.add("hide");
    }

    const displayProfile = () => {
        iconsFeed.forEach(icon => {
            icon.src = 'assets/img/home.svg'
        });
        iconsProfile.forEach(icon => {
            icon.src = 'assets/img/profile-active.svg'
        });

        feed.classList.add("hide");  
        profile.classList.remove("hide"); 
        search.classList.add("hide");

        //adaptation du header pour la version mobile
        if (screen.width < 600) {
            forMobileFeedHeader.classList.add("hide");
            forMobileProfileHeader.classList.remove("hide");
        }
        
        //Pour l'exo 4
        whereToShow.innerHTML = ''; // Pour éviter d'additioner les images quand on appuie sur le bouton alors qu'on est déjà sur la page
        getPictures();
    }

    const displaySearch = () => {
        iconsFeed.forEach(icon => {
            icon.src = 'assets/img/home.svg'
        });
        iconsProfile.forEach(icon => {
            icon.src = 'assets/img/profile.svg'
        });

        feed.classList.add("hide");  
        profile.classList.add("hide"); 
        search.classList.remove("hide");
    }

    displayFeed();

    toFeed.forEach(link => {
        link.addEventListener('click', displayFeed);
    });

    toProfile.forEach(link => {
        link.addEventListener('click', displayProfile);
    });

    //Pour l'exo 2
    const createFakePosts = (quantity) => {
        //Quantity sert à définir le nombre de faux posts à créer
        for (let i = 0; i < quantity; i++) {
            // On génère des id qui permettront d'avoir des valeures aléatoires 
            let idUser = Math.floor(Math.random() * usernames.length);
            let idPostLocation = Math.floor(Math.random() * postLocations.length);
            let idImg = Math.floor(Math.random() * 1000);
            let idDescr = Math.floor(Math.random() * descriptions.length);

            // On récupère les différentes données
            let username = usernames[idUser];
            let postLocation = postLocations[idPostLocation];
            let imgScr = `https://picsum.photos/id/${idImg}/700/700`;
            let likeCount = Math.floor(Math.random() * 10000);
            let description = descriptions[idDescr];
            let createdDate = Math.floor(Math.random() * 11);

            //On crée une div qui va contenir le post
            const post = document.createElement('div');
            post.className = 'post';

            //On insère la structure du post et les données dans cette div
            post.innerHTML =
                `<div class="post-top">
                    <span class="to-profile post-publisher">
                        <div class="post-frame">
                            <div class="post-white-circle"></div>
                            <div class="post-profile-picture"></div>
                        </div>
                        <div class="post-profile">
                            <p>${username}</p>
                            <p>${postLocation}</p>
                        </div>
                    </span>
                    <a href="#" class="post-more">...</a>
                </div>

                <div class="post-picture">
                    <div class="display-picture" style="background-image: url('${imgScr}');"></div>
                </div>

                <div class="post-bot">
                    <div class="post-buttons">
                        <div class="post-buttons-left">
                            <a href="#"><img class="icon" src="assets/img/heart.svg" alt=""></a>
                            <a href="#"><img class="icon" src="assets/img/bubble.svg" alt=""></a>
                            <a href="#"><img class="icon" src="assets/img/send.svg" alt=""></a>
                        </div>
                        <a href="#"><img class="icon" src="assets/img/file.svg" alt=""></a>
                    </div>
                    <a href="#" class="post-likes">${likeCount} likes</a>
                    <div class="post-comment">
                        <a href="profile.php" class="comment-username">${username}</a>
                        <p>${description} <a href="#" class="hashtag">#you</a></p>
                    </div>
                    <div class="post-infos">
                        <p>${createdDate} days ago  - <a href="#">See translation</a></p>
                    </div>
                </div>`;

                //On envoie la div dans le html
                whereToPost.appendChild(post);
        }
    }

    createFakePosts(5);

    //Pour l'exo 3
    const getSearch = async (page) => {
        const searchValue = searchBar.value; // On récupère ce qu'il y a dans la barre de recherche

        if (searchValue.trim().length > 0) {
            return fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchValue}&per_page=${perPageSearch}&page=${page}`)
            .then(result => {
                return result.json();
            }).then(json => {
                json.results.forEach(picture =>{
                    const a = document.createElement('a');
                    a.className = 'user-picture';
                    a.href = '#';

                    const div = document.createElement('div');
                    div.className = 'user-display-picture';

                    a.appendChild(div);

                    const img = document.createElement('img');
                    img.src = picture.urls.regular;
                    img.alt = picture.description;
                    
                    div.appendChild(img);

                    whereToSearch.appendChild(a);
                })
            })
            .catch(error => {
                console.log(error);
            });  
        }
    };

    searchBar.oninput = async (e) => { // A chaque fois qu'une touche du clavier est pressée quand on sélectionne la barre de recherche
        displaySearch(); // On affiche la page search
        whereToSearch.innerHTML = ''; // On vide les images déjà affichées
        await getSearch(1); // On affiche la 1ère page du mot entré
        await getSearch(2); // On affiche ensuite la 2ème page pour atteindre les 40 images
    };// Ne pas taper trop vite sinon la page affiche plus de résultats que prévu

    //Pour l'exo 4
    const getPictures = e => {
        return fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${query}&per_page=${perPage}`)
        .then(result => {
            return result.json();
        }).then(json => {
            json.results.forEach(picture =>{
                const a = document.createElement('a');
               a.className = 'user-picture';
                a.href = '#';

                const div = document.createElement('div');
                div.className = 'user-display-picture';

                a.appendChild(div); // on mets la div dans le lien qu'on vient de créer

                const img = document.createElement('img');
                img.src = picture.urls.regular;
                img.alt = picture.description;

                div.appendChild(img); // on mets l'image dans la div qu'on vient de créer

                whereToShow.appendChild(a); //on mets le tout dans le conteneur qui va afficher les images
            })
        })
        .catch(error => {
            console.log(error);
        });
    };

});