const isMobile = Boolean(
    navigator.userAgent.match(
        '(Mobile|iP(hone|od|ad)|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune|incognito|webmate|Android|dream|CUPCAKE|froyo|BlackBerry|webOS|s8000|bada|IEMobile|Googlebot-Mobile|AdsBot-Google)',
    ),
);

const checkMobile = () => isMobile;

export default checkMobile;
