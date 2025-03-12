
$(document).ready(function () {
    let draggedPiece = null;

    // Drag-and-drop
    $('.piece').on('dragstart', function (e) {
        draggedPiece = $(this);
    });

    $('.slot').on('dragover', function (e) {
        e.preventDefault();
    });

    $('.slot').on('drop', function (e) {
        e.preventDefault();
        if (draggedPiece) {
            // Si le slot contient déjà une image, la remettre dans la zone des pièces
            if ($(this).children('.piece').length > 0) {
                const existingPiece = $(this).children('.piece').first();
                $('#image-pieces').append(existingPiece);
            }
            // Ajouter l'image déplacée dans le slot
            $(this).append(draggedPiece);
            draggedPiece = null;

            // Vérifier l'ordre après chaque dépôt
            checkOrder();
        }
    });

    // Vérifier l'ordre des images
    function checkOrder() {
        let isCorrect = true;
        $('.slot').each(function () {
            const correctId = $(this).attr('data-correct');
            const pieceId = $(this).children('.piece').attr('data-id');
            if (!pieceId || pieceId !== correctId) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            $('#message').text('Bravo ! Vous avez reconstitué l\'arc-en-ciel ! 🌈').css('color', 'green');
        } else {
            $('#message').text('Oops ! Ce n\'est pas encore ça. Essayez encore !').css('color', 'red');
        }
    }

    // Mélanger les images
    $('#shuffle-button').on('click', function () {
        const pieces = $('.piece').toArray();
        pieces.sort(() => Math.random() - 0.5);
        $('#image-pieces').empty().append(pieces);
        $('#message').text('');
    });
});