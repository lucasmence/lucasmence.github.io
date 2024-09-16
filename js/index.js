function changeTab(evt, tabname) 
{
    document.getElementById("sidenav").style.width = "0";

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";

    return true;
} 

function openDefaultTab()
{
    document.getElementById("btn-default-tab").click();
    return true;
}

function convertPubDateToYMD(pubDate) 
{
    const date = new Date(pubDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

function toggleNav() 
{
    document.getElementById("sidenav").style.width < "250px" ? document.getElementById("sidenav").style.width = "250px" : document.getElementById("sidenav").style.width = "0";
}

function closeNav() 
{
    document.getElementById("sidenav").style.width = "0";
}

function getRssFeed()
{
    const rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://lucasmence.blogspot.com/rss.xml';
    const feedContainer = document.getElementById('rss-feed');

    fetch(rssUrl)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            let output = '<ul>';
            items.forEach(item => {
                output += `<div class="blog-content">
                                <div class="blog-box">
                                    <span class="blog-date">${convertPubDateToYMD(item.pubDate)}<br/></span>
                                    <div>
                                        <p class="blog-title"><strong>${item.title}</strong></p>
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <span class="table-line-divisor"><hr/></span>`;
            });
            output += '</ul>';
            feedContainer.innerHTML = output;
        })
        .catch(error => {
            feedContainer.innerHTML = 'Erro ao carregar o feed RSS.';
            console.error('Erro:', error);
        });
    
    return true;
}

