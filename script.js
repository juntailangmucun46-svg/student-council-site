// LocalStorageを使ったリンク管理

function getLinks() {
    const data = localStorage.getItem('studentCouncilLinks');
    return data ? JSON.parse(data) : [];
}

function saveLinks(links) {
    localStorage.setItem('studentCouncilLinks', JSON.stringify(links));
}
