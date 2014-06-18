/* globals $, _, picturefill */

    $('html').removeClass('no-js');

    var $commentsTemplate = $('#comments-template').html();
    /*,
        data = {
            comments: [
                { author: 'one', thumb: 'https://ipsumimage.appspot.com/128', picture: 'https://ipsumimage.appspot.com/128', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ullam quis fugiat sequi, provident, dolores veniam quasi molestias similique magnam illo tempore rem beatae exercitationem error voluptatum quisquam fugit corrupti!' }
            ]
        };

    $('#comments-list').append(_.template($commentsTemplate, data));
*/
    $('#comments').infinitescroll({
        navSelector  : '#nav',
        nextSelector : '#ajax-url',
        itemSelector : '#comments-list li',
        dataType: 'json',
        appendCallback: false
    }, function(json) {
        'use strict';
        var i = 0,
            str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dicta beatae aliquid labore quibusdam culpa blanditiis reprehenderit suscipit quo voluptatem odio, itaque dignissimos recusandae nisi tempore delectus laborum eveniet earum, tempora magni iure unde ea. Architecto sint delectus exercitationem, veniam esse cupiditate dicta facere, ullam suscipit iste nostrum magnam odit praesentium, voluptas voluptatibus maxime laborum debitis modi in vitae? Consectetur nesciunt, quod doloremque placeat tenetur. Debitis et qui eaque nisi asperiores quibusdam molestiae explicabo nostrum. Inventore temporibus laudantium quos. Assumenda distinctio vero, sequi odio, necessitatibus odit fugit reiciendis tempora iusto expedita quas, nam quam, dicta aliquid molestias maiores velit accusantium corrupti hic nisi aperiam! Esse reiciendis debitis impedit excepturi! Officiis veritatis soluta inventore? Dolore nam officiis blanditiis recusandae quo fugiat, error consectetur deserunt eaque voluptate saepe nemo, eos ipsam mollitia culpa vero velit aliquid nihil animi eum! Illum porro vel impedit aliquam nulla dolores culpa id illo qui quis non mollitia architecto optio necessitatibus maiores, error autem minus assumenda sapiente, rerum! Optio accusantium numquam ea laboriosam, perferendis cumque facere qui sequi, deleniti officia culpa amet aliquid molestiae earum reprehenderit a quam distinctio id, provident porro eveniet, eius? Temporibus repellat iste inventore consectetur nostrum modi atque ducimus quae facilis fuga, optio!',
            arr = [],
            res = json.results,
            seed = '',
            user,
            name,
            obj = {
                comments: []
            };

        for ( ; i<5; i++) {
            seed = res[i].seed;
            user = res[i].user;
            name = user.name;
            arr = str.split(' ', Math.floor(Math.random() * (200 - 10 + 1)) + 10);

            obj.comments.push(
                {
                    author: name.first + ' ' + name.last,
                    thumb: 'https://ipsumimage.appspot.com/128?l=' + seed,
                    picture: user.picture,
                    message: arr.join(' ')
                }
            );
        }

        $('#comments-list').append(_.template($commentsTemplate, obj));
        picturefill();

    });

