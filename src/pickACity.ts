// Pick a [lon, lat] of a random major city in the world
// Used to set the map's initial position
export function randomCityCenter(): [number, number] {
  // thanks chatgpt
  const cities: [number, number][] = [
    // Tokyo
    [139.6917, 35.6895],
    // Delhi
    [77.1025, 28.7041],
    // Shanghai
    [121.4737, 31.2304],
    // São Paulo
    [-46.6333, -23.5505],
    // Mexico City
    [-99.1332, 19.4326],
    // Cairo
    [31.2357, 30.0444],
    // Mumbai
    [72.8777, 19.076],
    // Beijing
    [116.4074, 39.9042],
    // Dhaka
    [90.4125, 23.8103],
    // Osaka
    [135.5022, 34.6937],
    // New York
    [-74.0059, 40.7128],
    // Karachi
    [67.0099, 24.8615],
    // Buenos Aires
    [-58.3816, -34.6037],
    // Chongqing
    [106.5516, 29.563],
    // Istanbul
    [28.9784, 41.0082],
    // Kolkata
    [88.3639, 22.5726],
    // Manila
    [120.9842, 14.5995],
    // Lagos
    [3.3792, 6.5244],
    // Rio de Janeiro
    [-43.1729, -22.9068],
    // Tianjin
    [117.1994, 39.0851],
    // Kinshasa
    [15.2663, -4.4419],
    // Guangzhou
    [113.2644, 23.1291],
    // Los Angeles
    [-118.2437, 34.0522],
    // Moscow
    [37.6173, 55.7558],
    // Shenzhen
    [114.0579, 22.5431],
    // Lahore
    [74.3587, 31.5204],
    // Bangalore
    [77.5946, 12.9716],
    // Paris
    [2.3522, 48.8566],
    // Bogotá
    [-74.0721, 4.7109],
    // Jakarta
    [106.865, -6.1751],
    // Chennai
    [80.2707, 13.0827],
    // Lima
    [-77.0428, -12.0464],
    // Bangkok
    [100.5018, 13.7563],
    // Seoul
    [126.978, 37.5665],
    // Nagoya
    [136.9065, 35.1815],
    // Hyderabad
    [78.4867, 17.385],
    // London
    [-0.1276, 51.5072],
    // Tehran
    [51.389, 35.6892],
    // Chicago
    [-87.6298, 41.8781],
    // Chengdu
    [104.0665, 30.5728],
    // Nanjing
    [118.7969, 32.0603],
    // Wuhan
    [114.3054, 30.5928],
    // Ho Chi Minh City
    [106.6297, 10.8231],
    // Luanda
    [13.242, -8.7832],
    // Ahmedabad
    [72.5714, 23.0225],
    // Kuala Lumpur
    [101.6869, 3.139],
    // Xi'an
    [108.9398, 34.3416],
    // Hong Kong
    [114.1491, 22.2815],
    // Dongguan
    [113.7518, 23.0205],
    // Hangzhou
    [120.1551, 30.2741],
    // Foshan
    [113.1214, 23.0219],
    // Shenyang
    [123.4315, 41.8057],
    // Riyadh
    [46.6753, 24.7136],
    // Baghdad
    [44.3661, 33.3152],
    // Santiago
    [-70.6483, -33.4489],
    // Surat
    [72.8311, 21.1702],
    // Madrid
    [-3.7038, 40.4168],
    // Suzhou
    [120.5853, 31.2989],
    // Pune
    [73.8567, 18.5204],
    // Harbin
    [126.5349, 45.8038],
    // Houston
    [-95.3698, 29.7604],
    // Dallas
    [-96.797, 32.7767],
    // Toronto
    [-79.3832, 43.6532],
    // Dar es Salaam
    [39.2083, -6.7924],
    // Miami
    [-80.1918, 25.7617],
    // Belo Horizonte
    [-43.9722, -19.9167],
    // Singapore
    [103.8198, 1.3521],
    // Philadelphia
    [-75.1652, 39.9526],
    // Atlanta
    [-84.3879, 33.749],
    // Fukuoka
    [130.4181, 33.5904],
    // Khartoum
    [32.5599, 15.5007],
    // Barcelona
    [2.1734, 41.3851],
    // Johannesburg
    [28.0473, -26.2041],
    // Saint Petersburg
    [30.3351, 59.9343],
    // Qingdao
    [120.3826, 36.0671],
    // Dalian
    [121.6147, 38.914],
    // Washington
    [-77.0369, 38.9072],
    // Yangon
    [96.1572, 16.8409],
    // Alexandria
    [29.9511, 31.2001],
    // Jinan
    [117.1201, 36.6512],
    // Guadalajara
    [-103.344, 20.6597],
  ];
  return cities[Math.floor(Math.random() * cities.length)];
}
