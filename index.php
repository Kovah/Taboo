<?php
/*
 * KVH Tabu
 * --------------------------
 * A small, Tabu-like game for your browser
 */

// Language Handling
$url = $_SERVER['REQUEST_URI'];
$url_params = explode('/', $url);
unset($url_params[0]);
$url_params = array_values($url_params);

// Language Handling
$game['available_langs'] = ['de'];

if (!empty($url_params[0]) && in_array($url_params[0], $game['available_langs'])) {
    $game['lang'] = $url_params[0];
} else {
    $game['lang'] = 'de';
}

require_once('lang/' . $game['lang'] . '.php');

$game['categories'] = [
    'animals',
    'people',
    'food',
    'things',
    'city-country',
    'cars',
    'tv',
    'literature',
    'sports',
    'web',
];
?>

<!DOCTYPE html>
<html lang="<?php echo $game['lang']; ?>">
<head>
    <meta charset="utf-8">
    <title>KVH Tabu</title>
    <meta name="description" content="A small Tabu-like game for your browser">
    <meta name="author" content="Kovah.de">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <link href="/assets/min/main.css" rel="stylesheet">
</head>

<body data-lang="<?php echo $game['lang']; ?>">

<div id="intro">
    <div class="intro__header">
        <?php foreach ($game['available_langs'] as $language) : ?>
            <a href="/<?php echo $language; ?>" class="lang__select btn"><?php echo $language; ?></a>
        <?php endforeach; ?>
    </div>

    <div class="intro__app-name">
        <h1><?php echo $lang['app.name']; ?></h1>
        <p><?php echo $lang['app.description']; ?></p>
    </div>
    <div class="intro__how-to">
        <?php echo $lang['app.how-to']; ?>
    </div>
    <div class="intro__settings">
        <div class="intro__setting-name">
            <input type="text" placeholder="<?php echo $lang['app.enter-name']; ?>" name="name">
        </div>
        <div class="intro__category-wrapper">
            <?php foreach ($game['categories'] as $category) : ?>
                <input type="radio" value="<?php echo $category; ?>" name="category"
                       id="cat-<?php echo $category; ?>">
                <label for="cat-<?php echo $category; ?>"
                       class="intro__category category category__<?php echo $category; ?> has-hover">
                    <span><?php echo $lang['category.' . $category]; ?></span>
                </label>
            <?php endforeach; ?>
        </div>
        <div class="intro__start">
            <button id="start-game" class="btn btn-block is-disabled" disabled="disabled">
                <?php echo $lang['game.start']; ?>
            </button>
            <button class="show-highscores btn btn-block">
                <?php echo $lang['app.show-highscores']; ?>
            </button>
        </div>
    </div>
</div>

<div id="game" class="hidden">
    <div class="game__header">
        <div class="game__timer">
            <?php echo $lang['game.time-remaining']; ?>&nbsp;<span id="game-timer">90</span>
        </div>
        <div class="game__points">
            <span id="game-point-down"></span>:<span id="game-point-up"></span>
        </div>
        <div class="game__exit">
            <button class="exit-game btn"><?php echo $lang['game.exit']; ?></button>
        </div>
    </div>
    <div class="game__word">

        <div class="game__word-top">
            <div id="game-ready" data-old-text="<?php echo $lang['game.get-ready']; ?>">
                <?php echo $lang['game.get-ready']; ?>
            </div>
            <div id="game-word" style="display: none"></div>
            <div id="game-over" style="display: none">
                <?php echo $lang['game.over'] ?><br><br>
                <button id="show-results" class="btn btn-block">
                    <?php echo $lang['app.show-results']; ?>
                </button>
                <button class="back-to-menu btn btn-block">
                    <?php echo $lang['app.back-to-menu']; ?>
                </button>
            </div>
            <div id="game-error" style="display: none"><?php echo $lang['game.error']; ?></div>
        </div>

        <div id="game-buzzwords" class="game__buzzwords" style="display: none"></div>
    </div>

    <div class="game__buttons">
        <button id="game__disacard" class="game__button btn btn-red is-disabled" disabled="disabled">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 208">
                <path d="M4 4l200 200m0-200L4 204" stroke="#FFF" stroke-width="12" fill="none" fill-rule="evenodd"/>
            </svg>
        </button>
        <button id="game__check" class="game__button btn btn-green is-disabled" disabled="disabled">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197 140">
                <path d="M64.96 139.94L.07 75.05l8.28-8.28 56.61 56.61L188.17.17l8.28 8.28" fill="#FFF"
                      fill-rule="evenodd"/>
            </svg>
        </button>
    </div>
</div>

<div id="result" class="hidden">
    <div class="result__wrapper">
        <div class="result__inner">
            <h1><?php echo $lang['results.for']; ?> <span id="result-name"></span></h1>

            <div class="result__score">
                <h3><?php echo $lang['results.correct']; ?> <span id="result-checked"></span></h3>
                <h3><?php echo $lang['results.skipped']; ?> <span id="result-skipped"></span></h3>
            </div>

            <button class="show-highscores btn btn-block">
                <?php echo $lang['app.show-highscores']; ?>
            </button>
            <button class="back-to-menu btn btn-block">
                <?php echo $lang['app.back-to-menu']; ?>
            </button>
        </div>
    </div>
</div>

<div id="highscores" class="hidden">
    <div class="highscores__wrapper">
        <h1><?php echo $lang['highscores']; ?></h1>
        <p id="highscore-list-unavailable" class="hidden">
            <?php echo $lang['highscores']; ?>
        </p>

        <div class="highscores__list-wrapper">
            <ul class="highscores__list">
                <li>
                    <div class="score__wrapper">
                        <span class="score__name"></span>
                        <span class="score__category"></span>
                        <span class="score__up">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197 140" width="19" height="14">
                                <path d="M64.96 139.94L.07 75.05l8.28-8.28 56.61 56.61L188.17.17l8.28 8.28"
                                      fill="#8CD435"
                                      fill-rule="evenodd"/>
                            </svg>
                        </span>
                        <span class="score__down">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 208" width="19" height="14">
                                <path d="M4 4l200 200m0-200L4 204" stroke="#E03E36" stroke-width="12" fill="none"
                                      fill-rule="evenodd"/>
                            </svg>
                        </span>
                    </div>
                </li>
            </ul>
            <ul id="highscore-list" class="highscores__list"></ul>
        </div>

        <button class="back-to-menu btn btn-block">
            <?php echo $lang['app.back-to-menu']; ?>
        </button>
        <button id="highscores-reset" class="btn btn-block">
            <?php echo $lang['highscores.reset']; ?>
        </button>
    </div>
</div>

<script src="/assets/min/jquery.min.js"></script>
<script src="/assets/min/game.js"></script>

</body>
</html>
