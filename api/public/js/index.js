import chatscript from '../chat/chat';

document.addEventListener('DOMContentLoaded', function () {
    chatscript();

    var allLinks = document.getElementsByTagName('a');

    for (var i = 0; i < allLinks.length; i++) {
        //console.log(allLinks[i].href)
        if (allLinks[i].href.startsWith(window.location.origin + '/')) {
            if (allLinks[i].href.includes('trending-presale')) {
                //console.log('heyooo', allLinks[i].href)
            } else {
                const href = allLinks[i].getAttribute('href');

                if (href && href.startsWith('/')) {
                    // Split the href on '/' and remove the empty initial entry if any
                    var pathParts = href.split('/').filter(Boolean);

                    // Join the parts back to form the path without the initial '/'
                    var pathAfterSlash = pathParts.join('/');

                    if (pathAfterSlash.length === 0) {
                        href && href.startsWith('/')
                    } else {
                        // Log the part of the href after the initial '/' to the console
                        var fullPath = 'https://coingape.com/' + pathAfterSlash;

                        allLinks[i].href = fullPath
                    }
                }
            }
        }
    }
});


