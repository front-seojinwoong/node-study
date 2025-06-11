import axios from 'axios';

// 1. 비동기 방식
function fetchAsync() {
  const result = axios.get('https://koreanjson.com/posts/1');
  console.log('비동기 방식', result); // Promise {<pending>}
}

fetchAsync();

// 2. 동기 방식
async function fetchSync() {
  const result = await axios.get('https://koreanjson.com/posts/1');
  console.log('동기 방식', result); // 제대로된 결과 => { title: '...',  }
  console.log('동기 방식', result.data.title)
}

fetchSync();
