<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page de connexion</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="containerButton">
            <div class="buttonHeader">
                <button type="button" id="themeButton">Thème</button>
                <a class="langButton" href="">
                    <img class="langButton" src="https://placehold.co/100x50" alt="">
                </a>
            </div>
            <div class="containerLogo">
                 <img src="https://placehold.co/300x200" alt="" id="logo">
        </div>
    </header>
    <main>
        <div class="containerTitle">
            <div class="title">
                <p>Se connecter</p>
            </div>
        </div>
        <div class="containerForm">
            <form action="">
                <fieldset>
                    <div class="form">
                        <label for="email">Adresse e-mail</label>
                        <input type="text" id="email" name="email" placeholder="Adresse e-mail" required>
                    </div>
                    <div class="form">
                        <label for="password">Mot de passe</label>
                        <input type="text" id="password" name="password" placeholder="Mot de passe" required>
                    </div>

                    <div class="form">
                        <input type="radio" id="rememberMe" name="rememberMe" value="rememberMe">
                        <Label for="rememberMe">Remember me</label>
                    </div>

                    <div class="form">
                        <input type="radio" id="stayConnected" name="stayConnected" value="stayConnected">
                        <Label for="stayConnected">Rester connecté</label>
                    </div>

                    
                    
                </fieldset>

                <fieldset>
                    <div class="btn">
                        <button type="submit" id="connect">Connexion</button>
                    </div>
                    <div class="btn">
                        <button type="submit" id="createAccount">Créer un compte</button>
                    </div>
                </fieldset>

                <fieldset>
                    <div class="btn">
                        <button type="submit">Se connecter avec google</button>
                      
                    </div>
                    <div class="btn">
                        <button type="submit">Se connecter avec X</button>
                      
                    </div>
                    <div class="btn">
                        <button type="submit">Se connecter avec discord</button>
                      
                    </div>
                </fieldset>
            </form>
        </div>
    </main>

    <footer>
        <section class="containerFooter">
            <div class="containerRS">
                <div>
                    <a href="" class="FB"></a>
                    <img src="" alt="">

                    <a href="" class="X"></a>
                    <img src="" alt="">

                    <a href="" class="discord"></a>
                    <img src="" alt="">
                </div>
            </div>
            <div class="containerTextFooter">
                <div>
                    <a href="" class="partner1"></a>
                    <img src="" alt="">
                </div>
            </div>
            <div class="containerCopyright">
                <div>
                    <p class="copyright">2024 Lore Weaver all rights Reserved.</p>
                </div>
            </div>
        </section>

    </footer>
    
</body>
</html>