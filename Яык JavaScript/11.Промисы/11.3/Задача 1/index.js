async function loadJson(url) {
    let response = await fetch(url);

    if (response.status === 200) {
       return await response.json();
    }

    throw new Error(String(response.status));
}

loadJson('no-such-user.json')
    .catch(console.log);