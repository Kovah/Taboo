// Variables
var lang = $('body').data('lang');
var scores = {sessions: []};
var $startInputName = $('input[name=name]');
var $startInputCategory = $('input[name=category]');
var $startBtn = $('#start-game');
var $game = $('#game');
var $gameGetReady = $('#game-ready');
var $gameError = $('#game-error');
var $gameButtons = $('.game__button');
var $gameCheck = $('#game__check');
var $gameDiscard = $('#game__disacard');
var $gameWord = $('#game-word');
var $gameBuzzwords = $('#game-buzzwords');
var $gameOver = $('#game-over');
var $gamePointsUpEl = $('#game-point-up');
var $gamePointsDownEl = $('#game-point-down');
var $gameTimer = $('#game-timer');
var gameTimerInt;
var gameTime = 180;
var gameWords;
var gameWordsCount;
var gameSession = {name: '', down: 0, up: 0, words: 0, category: ''};
var $backToMenu = $('.back-to-menu');
var $exitGame = $('.exit-game');
var $showResults = $('#show-results');
var $showScores = $('.show-highscores');
var $result = $('#result');
var $resultName = $('#result-name');
var $resultChecked = $('#result-checked');
var $resultSkipped = $('#result-skipped');
var $highscores = $('#highscores');
var $highscoresList = $('#highscore-list');
var $highscoresUnavailable = $('#highscore-list-unavailable');
var $highscoresReset = $('#highscores-reset');
var HTMLReplaceTags = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

// Functions
function checkStartInput() {
    if ($('input[name=name]').val().length > 0 && $("input[name=category]:checked").length > 0) {
        $startBtn.prop('disabled', false).removeClass('is-disabled');
    }
}

function pickRandomProperty(obj) {
    var computedResult = {};

    // Pick random property
    var keys = Object.keys(obj);
    var len = keys.length;
    if (len === 0) return false;
    var rnd = Math.floor(Math.random() * len);
    var key = keys[rnd];
    var result = obj[key];
    delete obj[key];

    // Parse words
    var split = result.split('|');
    computedResult.word = split[0];
    computedResult.buzzwords = split[1].split(':');

    return computedResult;
}

function replaceTag(tag) {
    return HTMLReplaceTags[tag] || tag;
}

// Game
$(function () {
    // Starting
    $startInputCategory.on('change', function () {
        $('.intro__category').removeClass('is-checked');
        var value = $(this).val();
        $('.category__' + value).addClass('is-checked');
        checkStartInput();
    });

    $startInputName.on('input', function () {
        checkStartInput();
    });

    loadHighscores();

    // Game mechanics
    $('#start-game').click(function () {
        if ($(this).prop('disabled') === 'disabled') return;
        console.log('Game is starting!');

        // Set the timer
        $gameTimer.text(gameTime);

        // Set points
        $gamePointsUpEl.text(gameSession.up);
        $gamePointsDownEl.text(gameSession.down);

        // Show game
        resetGame();
        gameShow();

        // Prepare the game details
        var category = $("input[name=category]:checked").val();
        console.log('Loaded category: ' + category);

        gameSession.name = $startInputName.val();
        gameSession.category = $('label[for=cat-' + category + ']').text().replace('  ', ' ');

        console.log(gameSession);

        var file = 'lists/' + lang + '/' + category + '.json';

        $.getJSON(file, function (json) {
        }).done(function (json) {
            gameWords = json;
            gameWordsCount = Object.keys(gameWords).length;
            console.log('Loaded entries: ' + gameWordsCount);

            // Start
            window.setTimeout(function () {
                gameInit();
            }, 1000);
        }).fail(function () {
            $gameGetReady.hide();
            $gameError.show();
        });
    });

    function gameInit() {
        var step = 3;
        var readyInterval = window.setInterval(function () {
            if (step === 0) {
                clearInterval(readyInterval);
                gameStart();
            }
            $gameGetReady.text(step);
            step--;
        }, 1000);
    }

    function gameStart() {
        console.log('Game started');

        $gameGetReady.hide();
        gameButtonsEnable();
        gameCounterStart();
        gameSetNewWord();
        $gameWord.show();
        $gameBuzzwords.show();
    }

    function gameEnd() {
        console.log('Game stopped');
        gameCounterStop();
        gameButtonsDisable();
        $gameError.hide();
        $gameWord.hide();
        $gameBuzzwords.hide();
        $gameOver.show();

        console.log(scores);
        scores.sessions.push(gameSession);
        updateHighscores();
        saveHighscores();
    }

    function resetGame() {
        gameButtonsDisable();

        $gameWord.hide();
        $gameBuzzwords.hide();
        $gameOver.hide();
        $gameGetReady.text($gameGetReady.data('old-text')).show();

        gameTime = 120;
        gameWords = [];
        gameWordsCount = 0;
        gameSession = {name: '', down: 0, up: 0, words: 0};
    }

    function gameCounterStart() {
        gameTimerInt = window.setInterval(function () {
            gameTime--;

            if (gameTime === 0) {
                clearInterval(gameTimerInt);
                gameEnd();
            }

            $gameTimer.text(gameTime);
        }, 1000);
    }

    function gameCounterStop() {
        clearInterval(gameTimerInt);
    }

    function gameSetNewWord() {
        var newWord = pickRandomProperty(gameWords);
        if (newWord === false) {
            gameEnd();
            return;
        }

        $gameWord.text(newWord.word.replace(/[&<>]/g, replaceTag));
        $gameBuzzwords.html('');

        // Set Buzzwords
        if (newWord.buzzwords.length > 1) {
            for (var index = 0; index < newWord.buzzwords.length; index++) {
                var string = '<span class="game__buzzword">';
                string += newWord.buzzwords[index].replace(/[&<>]/g, replaceTag);
                string += '</span>';
                $gameBuzzwords.append(string);
            }
        }
    }

    $gameCheck.click(function () {
        if ($(this).prop('disabled') === 'disabled') return;

        gameSession.up++;
        gameSession.words++;
        $gamePointsUpEl.text(gameSession.up);

        gameSetNewWord();
    });

    $gameDiscard.click(function () {
        if ($(this).prop('disabled') === 'disabled') return;

        gameSession.down++;
        gameSession.words++;
        $gamePointsDownEl.text(gameSession.down);

        gameSetNewWord();
    });

    $showResults.click(function () {
        $resultName.text(gameSession.name);
        $resultChecked.text(gameSession.up);
        $resultSkipped.text(gameSession.down);
        resultShow();
    });

    $showScores.click(function () {
        updateHighscores();
        highscoresShow();
    });

    // Highscore saving
    function loadHighscores() {
        var localScores = JSON.parse(localStorage.getItem('highscores'));
        if (localScores != null) {
            console.log('Old highscores loaded');
            scores = localScores;
        }
    }

    function updateHighscores() {
        setHighscores();
        saveHighscores();
    }

    function setHighscores() {
        $highscoresList.html('');

        $.each(scores.sessions, function () {
            var entryName = '<span class="score__name">' + this.name + '</span>';
            var entrycategory = '<span class="score__category">' + this.category + '</span>';
            var entryUp = '<span class="score__up">' + this.up + '</span>';
            var entryDown = '<span class="score__down">' + this.down + '</span>';
            var entry = entryName + entrycategory + entryUp + entryDown;

            $highscoresList.append('<li><div class="score__wrapper">' + entry + '</div></li>');
        })
    }

    function saveHighscores() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem('highscores', JSON.stringify(scores));
        } else {
            $highscoresUnavailable.removeClass('hidden');
        }
    }

    function resetHighscores() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.removeItem('highscores');
        }
        scores = {sessions: []};
    }

    $highscoresReset.click(function () {
        highscoresHide();
        resetHighscores();
    });

    // Helper functions
    function gameButtonsEnable() {
        $gameButtons.prop('disabled', false).removeClass('is-disabled');
    }

    function gameButtonsDisable() {
        $gameButtons.prop('disabled', 'disabled').addClass('is-disabled');
    }

    function gameShow() {
        $game.animate({top: 0}, 500).removeClass('hidden');
    }

    function gameHide() {
        $game.animate({top: '100vh'}, 500, function () {
            $(this).addClass('hidden')
        });
    }

    function resultShow() {
        $result.animate({top: 0}, 500).removeClass('hidden');
    }

    function resultHide() {
        $result.animate({top: '100vh'}, 500, function () {
            $(this).addClass('hidden')
        });
    }

    function highscoresShow() {
        $highscores.animate({top: 0}, 500).removeClass('hidden');
    }

    function highscoresHide() {
        $highscores.animate({top: '100vh'}, 500, function () {
            $(this).addClass('hidden')
        });
    }

    $backToMenu.click(function () {
        resetGame();
        highscoresHide();
        resultHide();
        gameHide();
    });

    $exitGame.click(function () {
        gameEnd();
    });
});
