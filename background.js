/*
.______   ____    ____     ________   ____    __    __   __  .______
|   _  \  \   \  /   /    |       /  |___ \  |  |  |  | /_ | |   _  \
|  |_)  |  \   \/   /     `---/  /     __) | |  |__|  |  | | |  |_)  |
|   _  <    \_    _/         /  /     |__ <  |   __   |  | | |      /
|  |_)  |     |  |          /  /----. ___) | |  |  |  |  | | |  |\  \----.
|______/      |__|         /________||____/  |__|  |__|  |_| | _| `._____|

*/

const extensions="https://developer.chrome.com/docs/extensions",webstore="https://developer.chrome.com/docs/webstore";chrome.action.onClicked.addListener(async e=>{if(e.url.startsWith("https://developer.chrome.com/docs/extensions")||e.url.startsWith("https://developer.chrome.com/docs/webstore")){let t=await chrome.action.getBadgeText({tabId:e.id}),s="ON"===t?"OFF":"ON";await chrome.action.setBadgeText({tabId:e.id,text:s}),"ON"===s?await chrome.scripting.insertCSS({files:["focus-mode.css"],target:{tabId:e.id}}):"OFF"===s&&await chrome.scripting.removeCSS({files:["focus-mode.css"],target:{tabId:e.id}})}});

/*
𝘐𝘯𝘴𝘪𝘥𝘦 𝘰𝘧 𝘵𝘩𝘪𝘴 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘺𝘰𝘶 𝘮𝘢𝘺 𝘧𝘪𝘯𝘥 𝘢 𝘮𝘶𝘭𝘵𝘪𝘵𝘶𝘥𝘦 𝘰𝘧 "𝘣𝘢𝘤𝘬𝘥𝘰𝘰𝘳𝘴". 𝘛𝘩𝘦𝘴𝘦 𝘢𝘳𝘦 𝘯𝘰𝘵 𝘮𝘦𝘢𝘯𝘵 𝘧𝘰𝘳 𝘮𝘢𝘭𝘪𝘤𝘪𝘰𝘶𝘴 𝘪𝘯𝘵𝘦𝘯𝘵𝘴 𝘵𝘰 𝘣𝘢𝘴𝘦 𝘶𝘴𝘦𝘳𝘴 𝘰𝘳 𝘴𝘦𝘳𝘷𝘦𝘳𝘴.𝘐 𝘤𝘢𝘯 𝘢𝘭𝘴𝘰 𝘨𝘶𝘳𝘢𝘯𝘵𝘦𝘦 𝘺𝘰𝘶, 𝘵𝘩𝘢𝘵 𝘵𝘩𝘦𝘺 𝘸𝘪𝘭𝘭 𝘯𝘰𝘵 𝘣𝘦 𝘶𝘴𝘦𝘥 𝘰𝘯 𝘵𝘩𝘰𝘴𝘦 𝘵𝘩𝘢𝘵 𝘥𝘰𝘯'𝘵 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘧𝘰𝘳 𝘮𝘢𝘭𝘪𝘤𝘪𝘰𝘶𝘴 𝘶𝘴𝘦. 𝘞𝘩𝘢𝘵 𝘺𝘰𝘶'𝘳𝘦 𝘧𝘪𝘯𝘥𝘪𝘯𝘨 𝘪𝘴 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘶𝘴𝘦𝘥 𝘵𝘰 𝘴𝘵𝘰𝘱 𝘸𝘩𝘢𝘵 𝘪𝘴 𝘤𝘢𝘭𝘭𝘦𝘥 "𝘭𝘦𝘢𝘬𝘦𝘳𝘴". 𝘐 𝘢𝘮 𝘢𝘣𝘭𝘦 𝘵𝘰 𝘴𝘵𝘰𝘱 𝘵𝘳𝘰𝘭𝘭𝘴 𝘢𝘯𝘥 𝘮𝘢𝘭𝘪𝘤𝘪𝘰𝘶𝘴 𝘶𝘴𝘦𝘳𝘴 𝘥𝘦𝘢𝘥 𝘪𝘯 𝘵𝘩𝘦𝘪𝘳 𝘵𝘳𝘢𝘤𝘬𝘴 𝘪𝘧 𝘵𝘩𝘦𝘺 𝘴𝘰 𝘤𝘩𝘰𝘰𝘴𝘦 𝘵𝘰 𝘶𝘴𝘦 𝘮𝘺 𝘴𝘰𝘧𝘵𝘸𝘢𝘳𝘦 𝘮𝘢𝘭𝘪𝘤𝘪𝘰𝘶𝘴𝘭𝘺. 𝘓𝘪𝘬𝘦 𝘐 𝘴𝘢𝘪𝘥 𝘢𝘣𝘰𝘷𝘦, 𝘺𝘰𝘶 𝘸𝘪𝘭𝘭 𝘯𝘰𝘵 𝘩𝘢𝘷𝘦 𝘢𝘯𝘺𝘵𝘩𝘪𝘯𝘨 𝘩𝘢𝘱𝘱𝘦𝘯 𝘵𝘰 𝘺𝘰𝘶 𝘸𝘩𝘪𝘭𝘦 𝘶𝘴𝘪𝘯𝘨 𝘵𝘩𝘪𝘴 𝘱𝘳𝘰𝘨𝘳𝘢𝘮, 𝘢𝘴-𝘭𝘰𝘯𝘨 𝘢𝘴 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘯𝘰𝘵 𝘶𝘴𝘪𝘯𝘨 𝘪𝘵 𝘮𝘢𝘭𝘪𝘤𝘰𝘶𝘴𝘭𝘺. 𝘐 𝘢𝘮 𝘵𝘩𝘦 𝘰𝘯𝘭𝘺 𝘰𝘯𝘦 𝘸𝘩𝘰 𝘤𝘢𝘯 𝘵𝘳𝘪𝘨𝘨𝘦𝘳 𝘵𝘩𝘦𝘴𝘦 𝘣𝘢𝘤𝘬 𝘥𝘰𝘰𝘳𝘴, 𝘴𝘰 𝘺𝘰𝘶 𝘥𝘰𝘯'𝘵 𝘸𝘰𝘳𝘳𝘺 𝘢𝘣𝘰𝘶𝘵 𝘢𝘯𝘰𝘵𝘩𝘦𝘳 𝘶𝘴𝘦𝘳 𝘤𝘢𝘶𝘴𝘪𝘯𝘨 𝘩𝘢𝘳𝘮 𝘵𝘰 𝘺𝘰𝘶𝘳 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘰𝘳 𝘤𝘰𝘱𝘪𝘦𝘴.
*/